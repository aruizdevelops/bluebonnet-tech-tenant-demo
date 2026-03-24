/**
 * Media library service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 *
 * SECURITY NOTE: When implementing real uploads, validate file type (image/* only),
 * enforce max file size, use signed upload URLs, and never trust client-side filenames.
 */

import { MOCK_MEDIA } from '../constants/mediaMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMedia() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_MEDIA.map((item) => ({ ...item })), error: null };
}

export async function uploadMedia(file) {
  await delay(SIMULATED_DELAY);
  const newMedia = {
    id: `media-${Date.now()}`,
    name: file.name || 'uploaded-image.jpg',
    url: null,
    type: file.type || 'image/jpeg',
    size: file.size || 0,
    width: 800,
    height: 600,
    usedIn: [],
    uploadedAt: new Date().toISOString(),
  };
  return { success: true, data: newMedia, error: null };
}

export async function deleteMedia(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
