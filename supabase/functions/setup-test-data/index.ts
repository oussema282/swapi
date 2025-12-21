import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const CATEGORIES = ["games", "electronics", "clothes", "books", "home_garden", "sports", "other"];
const CONDITIONS = ["new", "like_new", "good", "fair"];

// Sample items for each category
const SAMPLE_ITEMS: Record<string, { title: string; description: string }[]> = {
  games: [
    { title: "PlayStation 5 Controller", description: "Barely used DualSense controller, white color" },
    { title: "Nintendo Switch Lite", description: "Yellow edition, comes with case" },
    { title: "Xbox Game Pass Ultimate", description: "3 month subscription code" },
    { title: "Mario Kart 8 Deluxe", description: "Physical copy, perfect condition" },
    { title: "Elden Ring PS5", description: "Complete edition with DLC code" },
  ],
  electronics: [
    { title: "AirPods Pro 2", description: "With MagSafe case, 6 months old" },
    { title: "iPad Mini 6", description: "64GB WiFi, Space Gray" },
    { title: "Mechanical Keyboard", description: "Cherry MX Brown switches, RGB" },
    { title: "Sony WH-1000XM4", description: "Noise cancelling headphones, black" },
    { title: "GoPro Hero 10", description: "With accessories kit" },
  ],
  clothes: [
    { title: "North Face Jacket", description: "Size M, navy blue, like new" },
    { title: "Nike Air Jordan 1", description: "Size 10, Chicago colorway" },
    { title: "Levi's 501 Jeans", description: "Size 32x32, classic fit" },
    { title: "Patagonia Fleece", description: "Size L, gray, excellent condition" },
    { title: "Ray-Ban Aviators", description: "Gold frame, green lens" },
  ],
  books: [
    { title: "Atomic Habits", description: "Hardcover, unread" },
    { title: "The Pragmatic Programmer", description: "20th Anniversary Edition" },
    { title: "Dune Collection", description: "First 3 books, paperback" },
    { title: "Harry Potter Box Set", description: "Complete series, hardcover" },
    { title: "Clean Code", description: "Robert C. Martin, like new" },
  ],
  home_garden: [
    { title: "Dyson V11 Vacuum", description: "Cordless, with all attachments" },
    { title: "Instant Pot Duo", description: "6 quart, barely used" },
    { title: "Philips Hue Starter Kit", description: "4 bulbs with bridge" },
    { title: "Indoor Plant Set", description: "3 potted succulents" },
    { title: "KitchenAid Mixer", description: "Artisan series, red" },
  ],
  sports: [
    { title: "Peloton Dumbbells", description: "Set of 10, 15, 20 lbs" },
    { title: "Yoga Mat Premium", description: "Extra thick, purple" },
    { title: "Tennis Racket Wilson", description: "Pro Staff, with case" },
    { title: "Basketball Spalding", description: "Official size, indoor/outdoor" },
    { title: "Camping Tent 4-Person", description: "Waterproof, easy setup" },
  ],
  other: [
    { title: "LEGO Star Wars Set", description: "Millennium Falcon, sealed" },
    { title: "Vinyl Record Collection", description: "20 classic rock albums" },
    { title: "Board Game Bundle", description: "Catan, Ticket to Ride, Pandemic" },
    { title: "Art Supplies Kit", description: "Watercolors, brushes, paper" },
    { title: "Drone DJI Mini", description: "With extra batteries" },
  ],
};

// City locations with lat/lng
const LOCATIONS = [
  { city: "New York", lat: 40.7128, lng: -74.0060 },
  { city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { city: "Chicago", lat: 41.8781, lng: -87.6298 },
  { city: "Houston", lat: 29.7604, lng: -95.3698 },
  { city: "Phoenix", lat: 33.4484, lng: -112.0740 },
  { city: "Philadelphia", lat: 39.9526, lng: -75.1652 },
  { city: "San Antonio", lat: 29.4241, lng: -98.4936 },
  { city: "San Diego", lat: 32.7157, lng: -117.1611 },
  { city: "Dallas", lat: 32.7767, lng: -96.7970 },
  { city: "San Jose", lat: 37.3382, lng: -121.8863 },
];

function getRandomItems(arr: string[], count: number): string[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const createdUsers: string[] = [];
    const createdItems: string[] = [];

    // Create 10 test users
    for (let i = 1; i <= 10; i++) {
      const email = `test${i}@example.com`;
      const location = LOCATIONS[i - 1];

      // Check if user already exists
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existingUser = existingUsers?.users?.find(u => u.email === email);

      let userId: string;

      if (existingUser) {
        userId = existingUser.id;
        console.log(`User ${email} already exists`);
      } else {
        // Create new user
        const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
          email,
          password: "123456",
          email_confirm: true,
          user_metadata: { display_name: `Test User ${i}` },
        });

        if (createError) {
          console.error(`Error creating user ${email}:`, createError);
          continue;
        }

        userId = newUser.user.id;
        console.log(`Created user ${email}`);
      }

      createdUsers.push(email);

      // Update profile with location
      await supabaseAdmin
        .from("profiles")
        .update({
          display_name: `Test User ${i}`,
          location: location.city,
          latitude: location.lat,
          longitude: location.lng,
          bio: `I'm test user ${i} from ${location.city}. Looking to swap cool stuff!`,
        })
        .eq("user_id", userId);

      // Check existing items for this user
      const { data: existingItems } = await supabaseAdmin
        .from("items")
        .select("id")
        .eq("user_id", userId);

      // Create 2-4 items per user if they don't have enough
      const itemsToCreate = Math.max(0, 3 - (existingItems?.length || 0));
      
      for (let j = 0; j < itemsToCreate; j++) {
        const category = getRandomElement(CATEGORIES);
        const condition = getRandomElement(CONDITIONS);
        const sampleItem = getRandomElement(SAMPLE_ITEMS[category]);
        const swapPrefs = getRandomItems(CATEGORIES, Math.floor(Math.random() * 3) + 2);

        const { data: item, error: itemError } = await supabaseAdmin
          .from("items")
          .insert({
            user_id: userId,
            title: sampleItem.title,
            description: sampleItem.description,
            category,
            condition,
            swap_preferences: swapPrefs,
            value_min: Math.floor(Math.random() * 50) + 10,
            value_max: Math.floor(Math.random() * 200) + 100,
            is_active: true,
            latitude: location.lat + (Math.random() - 0.5) * 0.1,
            longitude: location.lng + (Math.random() - 0.5) * 0.1,
          })
          .select()
          .single();

        if (itemError) {
          console.error(`Error creating item:`, itemError);
        } else {
          createdItems.push(item.id);
          console.log(`Created item: ${sampleItem.title} for user ${i}`);
        }
      }
    }

    // Clear existing swipes to allow fresh testing
    await supabaseAdmin.from("swipes").delete().neq("id", "00000000-0000-0000-0000-000000000000");

    return new Response(
      JSON.stringify({
        success: true,
        message: `Created/verified ${createdUsers.length} users and ${createdItems.length} new items`,
        users: createdUsers,
        newItemsCount: createdItems.length,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in setup-test-data:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
