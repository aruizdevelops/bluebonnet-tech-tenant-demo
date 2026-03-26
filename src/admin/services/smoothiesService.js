/**
 * Smoothie CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

import { SMOOTHIES, SMOOTHIE_CATEGORIES } from '../../constants/smoothies';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSmoothies() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: SMOOTHIES.map((item) => ({ ...item })), error: null };
}

export async function createSmoothie(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `smo-${Date.now()}`,
    slug: item.slug || item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateSmoothie(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteSmoothie(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}

export async function getCategories() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: SMOOTHIE_CATEGORIES.map((cat) => ({ ...cat })), error: null };
}

export async function createCategory(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = { ...item, id: `cat-${Date.now()}`, createdAt: now, updatedAt: now };
  return { success: true, data: newItem, error: null };
}

export async function updateCategory(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteCategory(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
