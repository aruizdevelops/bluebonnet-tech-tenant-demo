import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CategoryIcon from '@mui/icons-material/Category';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';

export function getAdminNavItems(t) {
  return [
    { label: t('admin.nav.dashboard'), icon: <DashboardIcon />, path: '/admin' },
    { label: t('admin.nav.menu'), icon: <RestaurantMenuIcon />, path: '/admin/menu' },
    { label: t('admin.nav.specials'), icon: <AutoAwesomeIcon />, path: '/admin/specials' },
    { label: t('admin.nav.categories'), icon: <CategoryIcon />, path: '/admin/categories' },
    { label: t('admin.nav.media'), icon: <PhotoLibraryIcon />, path: '/admin/media' },
    { label: t('admin.nav.businessInfo'), icon: <StoreIcon />, path: '/admin/business' },
    { label: t('admin.nav.promotions'), icon: <LocalOfferIcon />, path: '/admin/promotions' },
    { label: t('admin.nav.settings'), icon: <SettingsIcon />, path: '/admin/settings' },
  ];
}
