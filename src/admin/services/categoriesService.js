/**
 * Categories CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 */

import { MOCK_CATEGORIES } from '../constants/categoriesMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCategories() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_CATEGORIES.map((item) => ({ ...item })), error: null };
}

export async function createCategory(item) {
  await delay(SIMULATED_DELAY);
  const newItem = {
    ...item,
    id: `cat-${Date.now()}`,
    itemCount: 0,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateCategory(id, updates) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { ...updates, id }, error: null };
}

export async function deleteCategory(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
