/**
 * Business info service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 */

import { MOCK_BUSINESS_INFO } from '../constants/businessMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBusinessInfo() {
  await delay(SIMULATED_DELAY);
  return {
    success: true,
    data: {
      ...MOCK_BUSINESS_INFO,
      locations: MOCK_BUSINESS_INFO.locations.map((loc) => ({
        ...loc,
        hours: loc.hours.map((h) => ({ ...h })),
      })),
    },
    error: null,
  };
}

export async function updateBusinessInfo(updates) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { ...MOCK_BUSINESS_INFO, ...updates }, error: null };
}
