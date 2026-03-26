/**
 * Mock dashboard analytics data for Tropikala Smoothie Co.
 * MOCK DATA — Replace with real analytics API when backend is ready.
 */

export function getMockKpis(t) {
  return {
    totalOrders: 1247,
    totalRevenue: 13580,
    avgOrderValue: 10.89,
    newCustomers: 186,
    topSmoothie: t('smoothie.tropical-sunrise.name'),
    totalSmoothies: 12,
    unavailableSmoothies: 1,
    activePromotions: 3,
  };
}

export function getMockOrdersByCategory(t) {
  return [
    { category: t('smoothie.category.regular.name'), orders: 742, revenue: 6542 },
    { category: t('smoothie.category.specialty.name'), orders: 505, revenue: 7038 },
  ];
}

export function getMockTopSmoothies(t) {
  return [
    { name: t('smoothie.tropical-sunrise.name'), orders: 198, revenue: 1780, trend: 15 },
    { name: t('smoothie.acai-royale.name'), orders: 167, revenue: 2002, trend: 22 },
    { name: t('smoothie.dragon-fruit-dream.name'), orders: 145, revenue: 1811, trend: 18 },
    { name: t('smoothie.green-machine.name'), orders: 132, revenue: 1252, trend: 8 },
    { name: t('smoothie.matcha-zen.name'), orders: 118, revenue: 1298, trend: 12 },
  ];
}

export function getMockLowPerformers(t) {
  return [
    { name: t('smoothie.citrus-burst.name'), orders: 38, reason: t('admin.dashboard.lowPerformerReason.lowAwareness') },
    { name: t('smoothie.peanut-butter-powerhouse.name'), orders: 45, reason: t('admin.dashboard.lowPerformerReason.niche') },
    { name: t('smoothie.charcoal-detox.name'), orders: 0, reason: t('admin.dashboard.lowPerformerReason.unavailable') },
  ];
}

export function getMockBusiestHours(t) {
  return [
    { hour: t('admin.dashboard.hours.10am'), orders: 45 },
    { hour: t('admin.dashboard.hours.11am'), orders: 78 },
    { hour: t('admin.dashboard.hours.12pm'), orders: 112 },
    { hour: t('admin.dashboard.hours.1pm'), orders: 98 },
    { hour: t('admin.dashboard.hours.2pm'), orders: 85 },
    { hour: t('admin.dashboard.hours.3pm'), orders: 92 },
    { hour: t('admin.dashboard.hours.4pm'), orders: 108 },
    { hour: t('admin.dashboard.hours.5pm'), orders: 124 },
    { hour: t('admin.dashboard.hours.6pm'), orders: 95 },
    { hour: t('admin.dashboard.hours.7pm'), orders: 62 },
  ];
}

export function getMockSpecialsPerformance(t) {
  return [
    { title: t('admin.dashboard.promoTitle.happyHour'), orders: 234, views: 1820, conversionRate: 12.9, revenue: 2340 },
    { title: t('admin.dashboard.promoTitle.loyalty'), orders: 156, views: 890, conversionRate: 17.5, revenue: 1716 },
    { title: t('admin.dashboard.promoTitle.seasonal'), orders: 89, views: 1240, conversionRate: 7.2, revenue: 1068 },
  ];
}

export function getMockFeaturedPerformance(t) {
  return [
    { name: t('smoothie.tropical-sunrise.name'), orders: 198, views: 2450, conversionRate: 8.1 },
    { name: t('smoothie.acai-royale.name'), orders: 167, views: 2180, conversionRate: 7.7 },
    { name: t('smoothie.dragon-fruit-dream.name'), orders: 145, views: 1920, conversionRate: 7.6 },
    { name: t('smoothie.green-machine.name'), orders: 132, views: 1650, conversionRate: 8.0 },
  ];
}

export function getMockWeeklyTrends(t) {
  return [
    { period: t('admin.dashboard.days.mon'), orders: 142, revenue: 1546 },
    { period: t('admin.dashboard.days.tue'), orders: 156, revenue: 1698 },
    { period: t('admin.dashboard.days.wed'), orders: 178, revenue: 1938 },
    { period: t('admin.dashboard.days.thu'), orders: 185, revenue: 2014 },
    { period: t('admin.dashboard.days.fri'), orders: 212, revenue: 2309 },
    { period: t('admin.dashboard.days.sat'), orders: 248, revenue: 2701 },
    { period: t('admin.dashboard.days.sun'), orders: 198, revenue: 2156 },
  ];
}

export function getMockMonthlyTrends(t) {
  return [
    { period: t('admin.dashboard.months.jan'), orders: 892, revenue: 9714 },
    { period: t('admin.dashboard.months.feb'), orders: 1056, revenue: 11498 },
    { period: t('admin.dashboard.months.mar'), orders: 1247, revenue: 13580 },
  ];
}

export function getMockOrderStatusBreakdown(t) {
  return [
    { status: t('admin.dashboard.status.completed'), count: 1089, color: '#38A169' },
    { status: t('admin.dashboard.status.inProgress'), count: 72, color: '#4299E1' },
    { status: t('admin.dashboard.status.pending'), count: 58, color: '#FFB830' },
    { status: t('admin.dashboard.status.cancelled'), count: 28, color: '#E53E3E' },
  ];
}

export function getMockRecentActivity(t) {
  return [
    { id: 'act-1', type: 'order', message: t('admin.dashboard.activity.1'), time: t('admin.dashboard.activity.1.time') },
    { id: 'act-2', type: 'order', message: t('admin.dashboard.activity.2'), time: t('admin.dashboard.activity.2.time') },
    { id: 'act-3', type: 'promotion', message: t('admin.dashboard.activity.3'), time: t('admin.dashboard.activity.3.time') },
    { id: 'act-4', type: 'order', message: t('admin.dashboard.activity.4'), time: t('admin.dashboard.activity.4.time') },
    { id: 'act-5', type: 'inventory', message: t('admin.dashboard.activity.5'), time: t('admin.dashboard.activity.5.time') },
    { id: 'act-6', type: 'order', message: t('admin.dashboard.activity.6'), time: t('admin.dashboard.activity.6.time') },
    { id: 'act-7', type: 'promotion', message: t('admin.dashboard.activity.7'), time: t('admin.dashboard.activity.7.time') },
    { id: 'act-8', type: 'order', message: t('admin.dashboard.activity.8'), time: t('admin.dashboard.activity.8.time') },
  ];
}
