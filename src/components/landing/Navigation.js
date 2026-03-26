'use client';

import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';
import { NAV_ITEMS, NAV_CTA, NAV_BRAND } from '../../constants/navigation';
import { useCart } from '../../context/CartContext';
import LanguagePicker from '../LanguagePicker';

export default function Navigation({ onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const { t } = useTranslation();
  const { itemCount } = useCart();

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 249, 245, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26, 26, 46, 0.08)' : '1px solid transparent',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: 72 }}>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: scrolled ? 'text.primary' : '#FFFFFF',
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 6 },
                transition: 'color 300ms',
                fontSize: '1.35rem',
              }}
            >
              {NAV_BRAND}
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, flexGrow: 1, justifyContent: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.labelKey}
                  href={item.href}
                  onClick={handleNavClick}
                  sx={{
                    color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    px: 2,
                    transition: 'color 300ms',
                    '&:hover': { color: scrolled ? 'text.primary' : '#FFFFFF', backgroundColor: 'transparent' },
                  }}
                >
                  {t(item.labelKey)}
                </Button>
              ))}
            </Box>

            <LanguagePicker
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1.5,
                '& .MuiToggleButton-root': {
                  color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                  borderColor: scrolled ? 'divider' : 'rgba(255,255,255,0.3)',
                  '&.Mui-selected': { bgcolor: 'primary.main', color: 'primary.contrastText', '&:hover': { bgcolor: 'primary.dark' } },
                },
              }}
            />

            {onCartOpen && (
              <IconButton
                onClick={onCartOpen}
                sx={{
                  mr: { xs: 1, md: 1.5 },
                  color: scrolled ? 'text.primary' : '#FFFFFF',
                  transition: 'color 300ms',
                }}
              >
                <Badge badgeContent={itemCount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}

            <Button variant="contained" color="primary" component={Link} href={NAV_CTA.href} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {t(NAV_CTA.labelKey)}
            </Button>

            <IconButton
              aria-label="Open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: scrolled ? 'text.primary' : '#FFFFFF', transition: 'color 300ms' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 300, backgroundColor: 'background.paper', backgroundImage: 'none' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.labelKey} disablePadding>
              <ListItemButton component="a" href={item.href} onClick={handleNavClick} sx={{ borderRadius: 2, mb: 0.5 }}>
                <ListItemText primary={t(item.labelKey)} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" fullWidth component={Link} href={NAV_CTA.href} onClick={handleNavClick}>
              {t(NAV_CTA.labelKey)}
            </Button>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <LanguagePicker />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
