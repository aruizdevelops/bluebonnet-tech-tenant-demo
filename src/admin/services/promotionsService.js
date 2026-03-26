/**
 * Promotions service (mock implementation).
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROMOTIONS = [
  {
    id: 'promo-1',
    name: 'Happy Hour',
    description: 'All smoothies $2 off between 3-5 PM daily.',
    discount: '$2 off',
    active: true,
    startDate: '2026-03-01',
    endDate: '2026-06-30',
  },
  {
    id: 'promo-2',
    name: 'Loyalty Punch Card',
    description: 'Buy 9, get the 10th free. Digital punch card.',
    discount: 'Free smoothie',
    active: true,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
  },
  {
    id: 'promo-3',
    name: 'Summer Mango Madness',
    description: '15% off all mango-based smoothies through summer.',
    discount: '15% off',
    active: true,
    startDate: '2026-06-01',
    endDate: '2026-08-31',
  },
];

export async function getPromotions() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_PROMOTIONS.map((p) => ({ ...p })), error: null };
}

export async function createPromotion(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = { ...item, id: `promo-${Date.now()}`, createdAt: now, updatedAt: now };
  return { success: true, data: newItem, error: null };
}

export async function updatePromotion(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deletePromotion(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
