import {
  Smartphone,
  Car,
  Building2,
  Shirt,
  Home,
  Dumbbell,
  Gamepad2,
  BookOpen,
  PawPrint,
  Sparkles,
  Wrench,
  Apple,
  Baby,
  Package,
  type LucideIcon
} from 'lucide-react';

export interface CategoryChild {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
  children: CategoryChild[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  subcategories: Subcategory[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'electronique',
    name: 'Électronique',
    icon: Smartphone,
    subcategories: [
      {
        id: 'telephones',
        name: 'Téléphones',
        children: [
          { id: 'smartphones', name: 'Smartphones' },
          { id: 'telephones_classiques', name: 'Téléphones classiques' },
          { id: 'accessoires_telephones', name: 'Accessoires téléphones' },
        ],
      },
      {
        id: 'informatique',
        name: 'Informatique',
        children: [
          { id: 'ordinateurs_portables', name: 'Ordinateurs portables' },
          { id: 'ordinateurs_bureau', name: 'Ordinateurs de bureau' },
          { id: 'composants_pc', name: 'Composants PC' },
        ],
      },
      {
        id: 'tv_audio',
        name: 'TV & Audio',
        children: [
          { id: 'televisions', name: 'Télévisions' },
          { id: 'haut_parleurs', name: 'Haut-parleurs' },
          { id: 'casques_ecouteurs', name: 'Casques & Écouteurs' },
        ],
      },
    ],
  },
  {
    id: 'vehicules',
    name: 'Véhicules',
    icon: Car,
    subcategories: [
      {
        id: 'voitures',
        name: 'Voitures',
        children: [
          { id: 'berlines', name: 'Berlines' },
          { id: 'suv', name: 'SUV' },
          { id: 'pickup', name: 'Pick-up' },
        ],
      },
      {
        id: 'motos',
        name: 'Motos',
        children: [
          { id: 'motos_sport', name: 'Motos sportives' },
          { id: 'scooters', name: 'Scooters' },
        ],
      },
      {
        id: 'pieces_vehicules',
        name: 'Pièces & Accessoires',
        children: [
          { id: 'pieces_moteur', name: 'Pièces moteur' },
          { id: 'pneus', name: 'Pneus' },
        ],
      },
    ],
  },
  {
    id: 'immobilier',
    name: 'Immobilier',
    icon: Building2,
    subcategories: [
      {
        id: 'residentiel',
        name: 'Résidentiel',
        children: [
          { id: 'appartements', name: 'Appartements' },
          { id: 'maisons', name: 'Maisons' },
          { id: 'villas', name: 'Villas' },
        ],
      },
      {
        id: 'terrains',
        name: 'Terrains',
        children: [
          { id: 'terrain_residentiel', name: 'Terrain résidentiel' },
          { id: 'terrain_agricole', name: 'Terrain agricole' },
        ],
      },
    ],
  },
  {
    id: 'mode',
    name: 'Mode',
    icon: Shirt,
    subcategories: [
      {
        id: 'homme',
        name: 'Homme',
        children: [
          { id: 'chemises', name: 'Chemises' },
          { id: 'pantalons', name: 'Pantalons' },
          { id: 'chaussures_homme', name: 'Chaussures' },
        ],
      },
      {
        id: 'femme',
        name: 'Femme',
        children: [
          { id: 'robes', name: 'Robes' },
          { id: 'hauts', name: 'Hauts' },
          { id: 'chaussures_femme', name: 'Chaussures' },
        ],
      },
      {
        id: 'accessoires_mode',
        name: 'Accessoires',
        children: [
          { id: 'sacs', name: 'Sacs' },
          { id: 'montres', name: 'Montres' },
        ],
      },
    ],
  },
  {
    id: 'maison_jardin',
    name: 'Maison & Jardin',
    icon: Home,
    subcategories: [
      {
        id: 'meubles',
        name: 'Meubles',
        children: [
          { id: 'canapes', name: 'Canapés' },
          { id: 'lits', name: 'Lits' },
          { id: 'tables', name: 'Tables' },
        ],
      },
      {
        id: 'cuisine',
        name: 'Cuisine',
        children: [
          { id: 'ustensiles', name: 'Ustensiles de cuisine' },
          { id: 'electromenager', name: 'Électroménager' },
        ],
      },
      {
        id: 'jardin',
        name: 'Jardin',
        children: [
          { id: 'plantes', name: 'Plantes' },
          { id: 'outils_jardin', name: 'Outils' },
        ],
      },
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Plein air',
    icon: Dumbbell,
    subcategories: [
      {
        id: 'fitness',
        name: 'Fitness',
        children: [
          { id: 'equipements_sport', name: 'Équipements de sport' },
          { id: 'halteres', name: 'Haltères' },
        ],
      },
      {
        id: 'plein_air',
        name: 'Plein air',
        children: [
          { id: 'camping', name: 'Camping' },
          { id: 'velos', name: 'Vélos' },
        ],
      },
    ],
  },
  {
    id: 'jeux_jouets',
    name: 'Jeux & Jouets',
    icon: Gamepad2,
    subcategories: [
      {
        id: 'jouets_enfants',
        name: 'Jouets enfants',
        children: [
          { id: 'educatifs', name: 'Éducatifs' },
          { id: 'figurines', name: 'Figurines' },
        ],
      },
      {
        id: 'jeux_video',
        name: 'Jeux vidéo',
        children: [
          { id: 'consoles', name: 'Consoles' },
          { id: 'jeux', name: 'Jeux' },
        ],
      },
    ],
  },
  {
    id: 'livres_medias',
    name: 'Livres & Médias',
    icon: BookOpen,
    subcategories: [
      {
        id: 'livres',
        name: 'Livres',
        children: [
          { id: 'fiction', name: 'Fiction' },
          { id: 'non_fiction', name: 'Non-fiction' },
        ],
      },
      {
        id: 'films_musique',
        name: 'Films & Musique',
        children: [
          { id: 'dvd', name: 'DVD' },
          { id: 'vinyles', name: 'Vinyles' },
        ],
      },
    ],
  },
  {
    id: 'animaux',
    name: 'Animaux',
    icon: PawPrint,
    subcategories: [
      {
        id: 'animaux_compagnie',
        name: 'Animaux de compagnie',
        children: [
          { id: 'chiens', name: 'Chiens' },
          { id: 'chats', name: 'Chats' },
        ],
      },
      {
        id: 'accessoires_animaux',
        name: 'Accessoires',
        children: [
          { id: 'nourriture_animaux', name: 'Nourriture' },
          { id: 'jouets_animaux', name: 'Accessoires' },
        ],
      },
    ],
  },
  {
    id: 'beaute_sante',
    name: 'Beauté & Santé',
    icon: Sparkles,
    subcategories: [
      {
        id: 'cosmetiques',
        name: 'Cosmétiques',
        children: [
          { id: 'maquillage', name: 'Maquillage' },
          { id: 'soins_peau', name: 'Soins de la peau' },
        ],
      },
    ],
  },
  {
    id: 'bricolage',
    name: 'Bricolage & Outils',
    icon: Wrench,
    subcategories: [
      {
        id: 'outils',
        name: 'Outils',
        children: [
          { id: 'outils_main', name: 'Outils à main' },
          { id: 'outils_electriques', name: 'Outils électriques' },
        ],
      },
      {
        id: 'materiaux',
        name: 'Matériaux',
        children: [
          { id: 'construction', name: 'Construction' },
          { id: 'renovation', name: 'Rénovation' },
        ],
      },
    ],
  },
  {
    id: 'alimentation',
    name: 'Alimentation',
    icon: Apple,
    subcategories: [
      {
        id: 'epicerie',
        name: 'Épicerie',
        children: [
          { id: 'fruits', name: 'Fruits' },
          { id: 'legumes', name: 'Légumes' },
        ],
      },
      {
        id: 'boissons',
        name: 'Boissons',
        children: [
          { id: 'boissons_gazeuses', name: 'Boissons gazeuses' },
          { id: 'cafe_the', name: 'Café & Thé' },
        ],
      },
    ],
  },
  {
    id: 'bebe_enfants',
    name: 'Bébé & Enfants',
    icon: Baby,
    subcategories: [
      {
        id: 'articles_bebe',
        name: 'Articles pour bébé',
        children: [
          { id: 'poussettes', name: 'Poussettes' },
          { id: 'vetements_bebe', name: 'Vêtements' },
        ],
      },
    ],
  },
  {
    id: 'autres',
    name: 'Autres',
    icon: Package,
    subcategories: [],
  },
];

// Helper: get category by id
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}

// Helper: get category label by id
export function getCategoryLabel(id: string): string {
  const cat = getCategoryById(id);
  return cat?.name || id;
}

// Helper: get subcategory label
export function getSubcategoryLabel(categoryId: string, subcategoryId: string): string {
  const cat = getCategoryById(categoryId);
  const sub = cat?.subcategories.find(s => s.id === subcategoryId);
  return sub?.name || subcategoryId;
}

// Helper: get all category IDs (top level)
export function getAllCategoryIds(): string[] {
  return CATEGORIES.map(c => c.id);
}

// Helper: get category icon component
export function getCategoryIcon(id: string): LucideIcon {
  const cat = getCategoryById(id);
  return cat?.icon || Package;
}

// Helper: get subcategories for a category
export function getSubcategories(categoryId: string): Subcategory[] {
  return getCategoryById(categoryId)?.subcategories || [];
}

// Build a flat lookup map for quick label resolution
const CATEGORY_LABEL_MAP: Record<string, string> = {};
CATEGORIES.forEach(cat => {
  CATEGORY_LABEL_MAP[cat.id] = cat.name;
  cat.subcategories.forEach(sub => {
    CATEGORY_LABEL_MAP[sub.id] = sub.name;
    sub.children.forEach(child => {
      CATEGORY_LABEL_MAP[child.id] = child.name;
    });
  });
});

export { CATEGORY_LABEL_MAP };
