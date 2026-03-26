'use client';

import { Box, Card, CardContent, Typography, Grid, Button, TextField, Divider } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';

export default function SettingsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.settings.title')} subtitle={t('admin.settings.subtitle')}>
      <MockDataBanner />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{t('admin.settings.businessInfo')}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label={t('admin.settings.businessName')} defaultValue={t('admin.settings.defaultBusinessName')} fullWidth />
                <TextField label={t('admin.settings.email')} defaultValue={t('admin.settings.defaultEmail')} fullWidth />
                <TextField label={t('admin.settings.phone')} defaultValue={t('admin.settings.defaultPhone')} fullWidth />
                <TextField label={t('admin.settings.address')} defaultValue={t('admin.settings.defaultAddress')} fullWidth />
              </Box>
              <Button variant="contained" sx={{ mt: 3 }}>{t('admin.common.saveChanges')}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{t('admin.settings.operatingHours')}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label={t('admin.settings.weekdays')} defaultValue={t('admin.settings.defaultWeekdayHours')} fullWidth />
                <TextField label={t('admin.settings.saturday')} defaultValue={t('admin.settings.defaultSaturdayHours')} fullWidth />
                <TextField label={t('admin.settings.sunday')} defaultValue={t('admin.settings.defaultSundayHours')} fullWidth />
              </Box>
              <Button variant="contained" sx={{ mt: 3 }}>{t('admin.common.saveChanges')}</Button>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{t('admin.settings.dangerZone')}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{t('admin.settings.dangerDescription')}</Typography>
              <Button variant="outlined" color="error">{t('admin.settings.resetData')}</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
