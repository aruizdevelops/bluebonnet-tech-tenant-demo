'use client';

import { Box, Card, CardContent, Typography, Grid, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { translateCategory } from '../../../src/constants/smoothies';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { categories, smoothies } = useAdminData();

  return (
    <PageContainer title={t('admin.categories.title')} subtitle={t('admin.categories.subtitle')}>
      <MockDataBanner />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />}>{t('admin.categories.addCategory')}</Button>
      </Box>

      <Grid container spacing={2}>
        {categories.map((rawCat) => {
          const cat = (() => { try { return translateCategory(rawCat, t); } catch { return rawCat; } })();
          const count = smoothies.filter((s) => s.category === cat.id).length;
          return (
            <Grid key={cat.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{cat.name || cat.id}</Typography>
                    <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>{cat.description || ''}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {t('admin.categories.smoothieCount', { count })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </PageContainer>
  );
}
