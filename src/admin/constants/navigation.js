import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BarChartIcon from '@mui/icons-material/BarChart';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAdminNavItems(t) {
  return [
    { label: t('admin.nav.dashboard'), icon: <DashboardIcon />, path: `${BASE_PATH}/admin` },
    { label: t('admin.nav.smoothies'), icon: <LocalDrinkIcon />, path: `${BASE_PATH}/admin/smoothies` },
    { label: t('admin.nav.categories'), icon: <CategoryIcon />, path: `${BASE_PATH}/admin/categories` },
    { label: t('admin.nav.orders'), icon: <ShoppingCartIcon />, path: `${BASE_PATH}/admin/orders` },
    { label: t('admin.nav.promotions'), icon: <LocalOfferIcon />, path: `${BASE_PATH}/admin/promotions` },
    { label: t('admin.nav.analytics'), icon: <BarChartIcon />, path: `${BASE_PATH}/admin/analytics` },
    { label: t('admin.nav.media'), icon: <PhotoLibraryIcon />, path: `${BASE_PATH}/admin/media` },
    { label: t('admin.nav.settings'), icon: <SettingsIcon />, path: `${BASE_PATH}/admin/settings` },
  ];
}
