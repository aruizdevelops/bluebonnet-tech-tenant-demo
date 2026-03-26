/**
 * Placeholder auth service for admin access.
 * Always passes in demo mode. Replace with real auth for production.
 *
 * SECURITY NOTE: This is a demo-only placeholder. No real authentication is performed.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function checkAdminAuth() {
  await delay(SIMULATED_DELAY);
  return {
    authenticated: true,
    user: {
      name: 'Admin',
      role: 'owner',
      email: 'admin@tropikala.co',
    },
  };
}

export async function loginAdmin(email, password) {
  await delay(SIMULATED_DELAY);
  return {
    success: true,
    data: {
      name: 'Admin',
      role: 'owner',
      email: email || 'admin@tropikala.co',
    },
    error: null,
  };
}

export async function logoutAdmin() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: null, error: null };
}
