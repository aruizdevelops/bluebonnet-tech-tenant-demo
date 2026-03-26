'use client';

import {
  Drawer, Box, Typography, IconButton, Button, Divider, Stack, Badge,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { t } = useTranslation();
  const { items, updateQuantity, removeFromCart, clearCart, itemCount, subtotal } = useCart();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          maxWidth: '100vw',
          bgcolor: 'background.paper',
          backgroundImage: 'none',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Badge badgeContent={itemCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {t('cart.title')}
            </Typography>
          </Box>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        {/* Cart Items */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2.5 }}>
          {items.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography sx={{ fontSize: '4rem', mb: 2 }}>🥤</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 600 }}>
                {t('cart.empty')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {t('cart.emptySubtitle')}
              </Typography>
              <Button variant="contained" component={Link} href="/menu" onClick={onClose} sx={{ mt: 3 }}>
                {t('cart.browseSmoothies')}
              </Button>
            </Box>
          ) : (
            <Stack spacing={2}>
              {items.map(({ smoothie, quantity }) => (
                <Box
                  key={smoothie.id}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: smoothie.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ fontSize: '1.5rem' }}>{smoothie.emoji}</Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} noWrap>
                        {smoothie.name}
                      </Typography>
                      <IconButton size="small" onClick={() => removeFromCart(smoothie.id)} sx={{ ml: 1, color: 'text.secondary' }}>
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                      ${(smoothie.price * quantity).toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(smoothie.id, quantity - 1)}
                        sx={{ border: '1px solid', borderColor: 'divider', width: 28, height: 28 }}
                      >
                        <RemoveIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                      <Typography variant="body2" sx={{ fontWeight: 600, minWidth: 20, textAlign: 'center' }}>
                        {quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(smoothie.id, quantity + 1)}
                        sx={{ border: '1px solid', borderColor: 'divider', width: 28, height: 28 }}
                      >
                        <AddIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                      <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
                        ${smoothie.price.toFixed(2)} {t('cart.each')}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Footer */}
        {items.length > 0 && (
          <Box sx={{ p: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{t('cart.subtotal')}</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                ${subtotal.toFixed(2)}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
              {t('cart.taxNote')}
            </Typography>
            <Button variant="contained" fullWidth size="large" sx={{ mb: 1 }}>
              {t('cart.checkout')}
            </Button>
            <Button variant="text" fullWidth size="small" onClick={clearCart} color="error">
              {t('cart.clearCart')}
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
