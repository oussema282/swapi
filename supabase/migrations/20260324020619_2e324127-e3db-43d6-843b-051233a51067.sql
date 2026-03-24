
-- Convert category column from enum to text
ALTER TABLE items ALTER COLUMN category TYPE text USING category::text;

-- Convert swap_preferences from enum array to text array
ALTER TABLE items ALTER COLUMN swap_preferences TYPE text[] USING swap_preferences::text[];

-- Add subcategory column
ALTER TABLE items ADD COLUMN subcategory text;

-- Auto-map old categories to new ones
UPDATE items SET category = 'electronique' WHERE category = 'electronics';
UPDATE items SET category = 'mode' WHERE category = 'clothes';
UPDATE items SET category = 'maison_jardin' WHERE category = 'home_garden';
UPDATE items SET category = 'jeux_jouets' WHERE category = 'games';
UPDATE items SET category = 'livres_medias' WHERE category = 'books';
UPDATE items SET category = 'autres' WHERE category = 'other';
-- sports stays as 'sports'

-- Update swap_preferences mappings
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'electronics', 'electronique');
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'clothes', 'mode');
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'home_garden', 'maison_jardin');
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'games', 'jeux_jouets');
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'books', 'livres_medias');
UPDATE items SET swap_preferences = array_replace(swap_preferences, 'other', 'autres');
