/**
 * Menu item CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

import { MOCK_MENU_ITEMS } from '../constants/menuMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMenuItems() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_MENU_ITEMS.map((item) => ({ ...item })), error: null };
}

export async function createMenuItem(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `menu-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateMenuItem(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteMenuItem(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
