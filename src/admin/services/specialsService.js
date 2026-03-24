/**
 * Specials CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 */

import { MOCK_SPECIALS } from '../constants/specialsMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSpecials() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_SPECIALS.map((item) => ({ ...item })), error: null };
}

export async function createSpecial(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `special-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateSpecial(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteSpecial(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
