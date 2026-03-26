/**
 * Smoothie catalog for Tropikala Smoothie Co.
 * All fictional content — does not replicate any real business.
 * MOCK DATA — replace with real API when backend is ready.
 */

export const SMOOTHIE_CATEGORIES = [
  {
    id: 'regular',
    name: 'Classic Blends',
    description: 'Our signature fruit & veggie smoothies made fresh daily.',
    icon: 'LocalDrink',
  },
  {
    id: 'specialty',
    name: 'Specialty Creations',
    description: 'Premium blends with superfoods, adaptogens, and unique flavors.',
    icon: 'AutoAwesome',
  },
];

export const SMOOTHIES = [
  // ── Regular Smoothies ─────────────────────
  {
    id: 'tropical-sunrise',
    slug: 'tropical-sunrise',
    name: 'Tropical Sunrise',
    description: 'A vibrant blend of mango, pineapple, and passion fruit with a hint of coconut cream. Pure tropical paradise in every sip.',
    price: 8.99,
    calories: 280,
    protein: 4,
    sugar: 38,
    fiber: 5,
    category: 'regular',
    featured: true,
    available: true,
    ingredients: ['Mango', 'Pineapple', 'Passion Fruit', 'Coconut Cream', 'Orange Juice'],
    emoji: '🌅',
    gradient: 'linear-gradient(135deg, #FF9A56 0%, #FF6B4A 100%)',
  },
  {
    id: 'berry-bliss',
    slug: 'berry-bliss',
    name: 'Berry Bliss',
    description: 'A luscious mix of strawberries, blueberries, and raspberries blended with creamy Greek yogurt and a drizzle of honey.',
    price: 8.49,
    calories: 240,
    protein: 8,
    sugar: 32,
    fiber: 6,
    category: 'regular',
    featured: false,
    available: true,
    ingredients: ['Strawberries', 'Blueberries', 'Raspberries', 'Greek Yogurt', 'Honey'],
    emoji: '🫐',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
  },
  {
    id: 'green-machine',
    slug: 'green-machine',
    name: 'Green Machine',
    description: 'Spinach, kale, banana, and green apple blended with fresh ginger and lemon for a refreshing nutrient boost.',
    price: 9.49,
    calories: 195,
    protein: 5,
    sugar: 22,
    fiber: 7,
    category: 'regular',
    featured: true,
    available: true,
    ingredients: ['Spinach', 'Kale', 'Banana', 'Green Apple', 'Ginger', 'Lemon'],
    emoji: '🥬',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
  },
  {
    id: 'mango-tango',
    slug: 'mango-tango',
    name: 'Mango Tango',
    description: 'Sweet mangoes paired with tangy lime, creamy banana, and a splash of coconut water. A tropical dance of flavors.',
    price: 8.99,
    calories: 260,
    protein: 3,
    sugar: 36,
    fiber: 4,
    category: 'regular',
    featured: false,
    available: true,
    ingredients: ['Mango', 'Banana', 'Lime', 'Coconut Water', 'Agave'],
    emoji: '🥭',
    gradient: 'linear-gradient(135deg, #FFB830 0%, #FF9A00 100%)',
  },
  {
    id: 'strawberry-wave',
    slug: 'strawberry-wave',
    name: 'Strawberry Wave',
    description: 'Sun-ripened strawberries blended with vanilla almond milk and a touch of maple syrup. Simple, classic, irresistible.',
    price: 7.99,
    calories: 220,
    protein: 6,
    sugar: 28,
    fiber: 4,
    category: 'regular',
    featured: false,
    available: true,
    ingredients: ['Strawberries', 'Almond Milk', 'Vanilla', 'Maple Syrup', 'Chia Seeds'],
    emoji: '🍓',
    gradient: 'linear-gradient(135deg, #FC5C7D 0%, #FF8A9B 100%)',
  },
  {
    id: 'citrus-burst',
    slug: 'citrus-burst',
    name: 'Citrus Burst',
    description: 'Oranges, grapefruit, and lemon blended with turmeric and a touch of cayenne for a zesty immunity kick.',
    price: 8.49,
    calories: 175,
    protein: 3,
    sugar: 30,
    fiber: 3,
    category: 'regular',
    featured: false,
    available: true,
    ingredients: ['Orange', 'Grapefruit', 'Lemon', 'Turmeric', 'Cayenne', 'Honey'],
    emoji: '🍊',
    gradient: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
  },

  // ── Specialty Smoothies ───────────────────
  {
    id: 'acai-royale',
    slug: 'acai-royale',
    name: 'Acai Royale',
    description: 'Premium acai blended with dark berries, banana, and topped with granola crumble. A superfood bowl in a cup.',
    price: 11.99,
    calories: 340,
    protein: 9,
    sugar: 34,
    fiber: 8,
    category: 'specialty',
    featured: true,
    available: true,
    ingredients: ['Acai', 'Mixed Berries', 'Banana', 'Granola', 'Almond Butter', 'Oat Milk'],
    emoji: '👑',
    gradient: 'linear-gradient(135deg, #4A1D96 0%, #7C3AED 100%)',
  },
  {
    id: 'matcha-zen',
    slug: 'matcha-zen',
    name: 'Matcha Zen',
    description: 'Ceremonial-grade matcha whisked with oat milk, vanilla, and a hint of lavender honey. Calm energy, elevated taste.',
    price: 10.99,
    calories: 245,
    protein: 7,
    sugar: 20,
    fiber: 3,
    category: 'specialty',
    featured: true,
    available: true,
    ingredients: ['Matcha', 'Oat Milk', 'Vanilla', 'Lavender Honey', 'Banana'],
    emoji: '🍵',
    gradient: 'linear-gradient(135deg, #68D391 0%, #38A169 100%)',
  },
  {
    id: 'golden-glow',
    slug: 'golden-glow',
    name: 'Golden Glow',
    description: 'Turmeric, mango, and ginger blended with golden milk and black pepper for maximum absorption. Anti-inflammatory bliss.',
    price: 11.49,
    calories: 275,
    protein: 6,
    sugar: 26,
    fiber: 4,
    category: 'specialty',
    featured: false,
    available: true,
    ingredients: ['Turmeric', 'Mango', 'Ginger', 'Coconut Milk', 'Black Pepper', 'Cinnamon'],
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #F6D365 0%, #FFB830 100%)',
  },
  {
    id: 'dragon-fruit-dream',
    slug: 'dragon-fruit-dream',
    name: 'Dragon Fruit Dream',
    description: 'Pink dragon fruit blended with lychee, coconut cream, and rose water. An exotic, Instagram-worthy masterpiece.',
    price: 12.49,
    calories: 290,
    protein: 4,
    sugar: 32,
    fiber: 5,
    category: 'specialty',
    featured: true,
    available: true,
    ingredients: ['Dragon Fruit', 'Lychee', 'Coconut Cream', 'Rose Water', 'Lime'],
    emoji: '🐉',
    gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
  },
  {
    id: 'peanut-butter-powerhouse',
    slug: 'peanut-butter-powerhouse',
    name: 'PB Powerhouse',
    description: 'Creamy peanut butter, banana, cacao nibs, and plant protein blended with oat milk. The ultimate post-workout fuel.',
    price: 11.99,
    calories: 420,
    protein: 22,
    sugar: 24,
    fiber: 6,
    category: 'specialty',
    featured: false,
    available: true,
    ingredients: ['Peanut Butter', 'Banana', 'Cacao Nibs', 'Plant Protein', 'Oat Milk', 'Honey'],
    emoji: '🥜',
    gradient: 'linear-gradient(135deg, #C4956A 0%, #8B6914 100%)',
  },
  {
    id: 'charcoal-detox',
    slug: 'charcoal-detox',
    name: 'Charcoal Detox',
    description: 'Activated charcoal with coconut, pineapple, and lemon. A dramatic-looking cleanse with bright tropical flavor.',
    price: 10.99,
    calories: 210,
    protein: 3,
    sugar: 22,
    fiber: 4,
    category: 'specialty',
    featured: false,
    available: false,
    ingredients: ['Activated Charcoal', 'Coconut Milk', 'Pineapple', 'Lemon', 'Agave'],
    emoji: '🖤',
    gradient: 'linear-gradient(135deg, #2D3436 0%, #636E72 100%)',
  },
];

/** Translate a single smoothie's user-facing fields */
export function translateSmoothie(smoothie, t) {
  return {
    ...smoothie,
    name: t(`smoothie.${smoothie.id}.name`),
    description: t(`smoothie.${smoothie.id}.description`),
    ingredients: t(`smoothie.${smoothie.id}.ingredients`).split(', '),
  };
}

/** Translate a single category's user-facing fields */
export function translateCategory(category, t) {
  return {
    ...category,
    name: t(`smoothie.category.${category.id}.name`),
    description: t(`smoothie.category.${category.id}.description`),
  };
}

/** Return all smoothies, translated */
export function getSmoothies(t) {
  return SMOOTHIES.map((s) => translateSmoothie(s, t));
}

/** Return all categories, translated */
export function getSmoothieCategories(t) {
  return SMOOTHIE_CATEGORIES.map((c) => translateCategory(c, t));
}

/** Return only available smoothies */
export function getAvailableSmoothies(t) {
  return getSmoothies(t).filter((s) => s.available);
}

/** Return featured smoothies */
export function getFeaturedSmoothies(t) {
  return getSmoothies(t).filter((s) => s.featured && s.available);
}

/** Return smoothies by category */
export function getSmoothiesByCategory(categoryId, t) {
  return getSmoothies(t).filter((s) => s.category === categoryId && s.available);
}

/** Find smoothie by slug */
export function getSmoothieBySlug(slug, t) {
  const smoothie = SMOOTHIES.find((s) => s.slug === slug) || null;
  return smoothie ? translateSmoothie(smoothie, t) : null;
}

/** Return regular smoothies */
export function getRegularSmoothies(t) {
  return getSmoothiesByCategory('regular', t);
}

/** Return specialty smoothies */
export function getSpecialtySmoothies(t) {
  return getSmoothiesByCategory('specialty', t);
}
