/**
 * Mock dashboard analytics data.
 * MOCK DATA - Replace with real analytics/reporting API when backend is ready.
 */

export const MOCK_KPIS = {
  totalOrders: 1247,
  totalRevenue: 12840,
  avgOrderValue: 10.29,
  activeSpecials: 3,
  totalMenuItems: 15,
  unavailableItems: 1,
};

export const MOCK_ORDERS_BY_CATEGORY = [
  { category: 'Mangonadas & Frozen Drinks', orders: 412, revenue: 3296 },
  { category: 'Cream Desserts', orders: 287, revenue: 2436 },
  { category: 'Fresh Fruit Cups', orders: 198, revenue: 1584 },
  { category: 'Elotes & Savory Snacks', orders: 165, revenue: 957 },
  { category: 'Ice Cream & Paletas', orders: 112, revenue: 504 },
  { category: 'Aguas Frescas & Drinks', orders: 73, revenue: 263 },
];

export const MOCK_TOP_ITEMS = [
  { name: 'Mangonada Grande', orders: 234, revenue: 2103, trend: 12 },
  { name: 'Fresas con Crema', orders: 189, revenue: 1415, trend: 8 },
  { name: 'Bionico', orders: 156, revenue: 1480, trend: -3 },
  { name: 'Elote Preparado', orders: 132, revenue: 790, trend: 5 },
  { name: 'Fresh Fruit Cup', orders: 98, revenue: 685, trend: 15 },
];

export const MOCK_LOW_PERFORMERS = [
  { name: 'Tostilocos', orders: 12, reason: 'Currently unavailable' },
  { name: 'Agua de Jamaica', orders: 28, reason: 'Low visibility on menu' },
  { name: 'Paleta de Fresa', orders: 31, reason: 'Seasonal demand drop' },
];

export const MOCK_BUSIEST_HOURS = [
  { hour: '11 AM', orders: 45 },
  { hour: '12 PM', orders: 98 },
  { hour: '1 PM', orders: 112 },
  { hour: '2 PM', orders: 87 },
  { hour: '3 PM', orders: 76 },
  { hour: '4 PM', orders: 65 },
  { hour: '5 PM', orders: 89 },
  { hour: '6 PM', orders: 134 },
  { hour: '7 PM', orders: 156 },
  { hour: '8 PM', orders: 142 },
  { hour: '9 PM', orders: 98 },
];

export const MOCK_SPECIALS_PERFORMANCE = [
  { title: 'Watermelon Loca', orders: 87, views: 342, conversionRate: 25.4, revenue: 1130 },
  { title: 'Mango Chamoy Sundae', orders: 64, views: 278, conversionRate: 23.0, revenue: 575 },
  { title: 'Family Fruit Platter', orders: 45, views: 198, conversionRate: 22.7, revenue: 1124 },
];

export const MOCK_FEATURED_PERFORMANCE = [
  { name: 'Mangonada Grande', orders: 234, views: 1820, conversionRate: 12.9 },
  { name: 'Fresas con Crema', orders: 189, views: 1540, conversionRate: 12.3 },
  { name: 'Elote Preparado', orders: 132, views: 1120, conversionRate: 11.8 },
  { name: 'Bionico', orders: 156, views: 1380, conversionRate: 11.3 },
];

export const MOCK_WEEKLY_TRENDS = [
  { period: 'Mon', orders: 156, revenue: 1607 },
  { period: 'Tue', orders: 142, revenue: 1462 },
  { period: 'Wed', orders: 168, revenue: 1729 },
  { period: 'Thu', orders: 175, revenue: 1801 },
  { period: 'Fri', orders: 198, revenue: 2037 },
  { period: 'Sat', orders: 224, revenue: 2306 },
  { period: 'Sun', orders: 184, revenue: 1893 },
];

export const MOCK_MONTHLY_TRENDS = [
  { period: 'Jan', orders: 892, revenue: 9187 },
  { period: 'Feb', orders: 1024, revenue: 10547 },
  { period: 'Mar', orders: 1247, revenue: 12840 },
];
