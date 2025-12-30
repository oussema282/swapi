import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { LocationGate } from "@/components/LocationGate";
import { SetupGate } from "@/components/SetupGate";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Items from "./pages/Items";
import NewItem from "./pages/NewItem";
import EditItem from "./pages/EditItem";
import Matches from "./pages/Matches";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/UserProfile";
import Search from "./pages/Search";
import MapView from "./pages/MapView";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Setup from "./pages/Setup";
import WhitePaper from "./pages/WhitePaper";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SetupGate>
          <AuthProvider>
            <LocationGate>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/search" element={<Search />} />
                <Route path="/map" element={<MapView />} />
                <Route path="/items" element={<Items />} />
                <Route path="/items/new" element={<NewItem />} />
                <Route path="/items/:id/edit" element={<EditItem />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/chat/:matchId" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/success" element={<CheckoutSuccess />} />
                <Route path="/whitepaper" element={<WhitePaper />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LocationGate>
          </AuthProvider>
        </SetupGate>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
