/**
 * Media service (mock implementation).
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_MEDIA = [
  { id: 'media-1', name: 'tropical-sunrise.jpg', type: 'image/jpeg', size: '245 KB', uploadedAt: '2026-03-15' },
  { id: 'media-2', name: 'berry-bliss.jpg', type: 'image/jpeg', size: '312 KB', uploadedAt: '2026-03-15' },
  { id: 'media-3', name: 'hero-banner.jpg', type: 'image/jpeg', size: '1.2 MB', uploadedAt: '2026-03-10' },
  { id: 'media-4', name: 'store-interior.jpg', type: 'image/jpeg', size: '890 KB', uploadedAt: '2026-03-08' },
];

export async function getMedia() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_MEDIA.map((m) => ({ ...m })), error: null };
}

export async function uploadMedia(file) {
  await delay(SIMULATED_DELAY);
  const newItem = {
    id: `media-${Date.now()}`,
    name: file?.name || 'uploaded-file.jpg',
    type: file?.type || 'image/jpeg',
    size: file?.size ? `${Math.round(file.size / 1024)} KB` : 'Unknown',
    uploadedAt: new Date().toISOString().split('T')[0],
  };
  return { success: true, data: newItem, error: null };
}

export async function deleteMedia(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
