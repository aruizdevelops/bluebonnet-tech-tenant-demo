/**
 * Mock business info seeded from existing content.js LOCATIONS and ABOUT.
 * MOCK DATA - Replace with real API data when backend is ready.
 */

export const MOCK_BUSINESS_INFO = {
  name: 'Fruteria del Sol',
  about: 'What started as a family dream has grown into a neighborhood favorite. We believe every cup, every cone, and every elote should be made with the same care we put into feeding our own family. Fresh ingredients, traditional recipes, and a love for bringing people together \u2014 that is what drives us every day.',
  email: 'hello@fruteriadelsol.com',
  website: 'https://fruteriadelsol.com',
  locations: [
    {
      id: 'loc-001',
      name: 'Fruteria del Sol \u2014 Main Street',
      address: '123 Main Street, Suite A',
      city: 'Sunvale, TX 78640',
      phone: '(512) 555-0142',
      hours: [
        { days: 'Monday \u2013 Friday', open: '11:00 AM', close: '10:00 PM' },
        { days: 'Saturday \u2013 Sunday', open: '10:00 AM', close: '10:00 PM' },
      ],
    },
    {
      id: 'loc-002',
      name: 'Fruteria del Sol \u2014 East Side',
      address: '456 Valley Road',
      city: 'Eastbrook, TX 78617',
      phone: '(737) 555-0198',
      hours: [
        { days: 'Monday \u2013 Friday', open: '11:00 AM', close: '9:00 PM' },
        { days: 'Saturday \u2013 Sunday', open: '10:00 AM', close: '9:00 PM' },
      ],
    },
  ],
};
