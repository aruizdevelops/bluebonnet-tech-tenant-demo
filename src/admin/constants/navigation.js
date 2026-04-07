import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CategoryIcon from '@mui/icons-material/Category';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAdminNavItems(t) {
  return [
    { label: t('admin.nav.dashboard'), icon: <DashboardIcon />, path: `${basePath}/admin` },
    { label: t('admin.nav.menu'), icon: <RestaurantMenuIcon />, path: `${basePath}/admin/menu` },
    { label: t('admin.nav.specials'), icon: <AutoAwesomeIcon />, path: `${basePath}/admin/specials` },
    { label: t('admin.nav.categories'), icon: <CategoryIcon />, path: `${basePath}/admin/categories` },
    { label: t('admin.nav.media'), icon: <PhotoLibraryIcon />, path: `${basePath}/admin/media` },
    { label: t('admin.nav.businessInfo'), icon: <StoreIcon />, path: `${basePath}/admin/business` },
    { label: t('admin.nav.promotions'), icon: <LocalOfferIcon />, path: `${basePath}/admin/promotions` },
    { label: t('admin.nav.settings'), icon: <SettingsIcon />, path: `${basePath}/admin/settings` },
  ];
}
