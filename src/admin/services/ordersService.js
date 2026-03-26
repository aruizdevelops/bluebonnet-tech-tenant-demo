/**
 * Orders service (mock implementation).
 */

import { MOCK_ORDERS } from '../constants/ordersMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getOrders() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_ORDERS.map((o) => ({ ...o })), error: null };
}

export async function updateOrderStatus(id, status) {
  await delay(SIMULATED_DELAY);
  const order = MOCK_ORDERS.find((o) => o.id === id);
  const updated = { ...(order || {}), id, status, updatedAt: new Date().toISOString() };
  return { success: true, data: updated, error: null };
}
