'use client';

import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InventoryIcon from '@mui/icons-material/Inventory';

const ICON_MAP = {
  order: <ShoppingCartIcon sx={{ fontSize: 18, color: '#FF6B4A' }} />,
  promotion: <LocalOfferIcon sx={{ fontSize: 18, color: '#FFB830' }} />,
  inventory: <InventoryIcon sx={{ fontSize: 18, color: '#E53E3E' }} />,
};

export default function ActivityFeed({ title, activities }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{title}</Typography>
        <List disablePadding>
          {activities.map((activity) => (
            <ListItem
              key={activity.id}
              disablePadding
              sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { borderBottom: 'none' } }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {ICON_MAP[activity.type] || ICON_MAP.order}
              </ListItemIcon>
              <ListItemText
                primary={activity.message}
                secondary={activity.time}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
