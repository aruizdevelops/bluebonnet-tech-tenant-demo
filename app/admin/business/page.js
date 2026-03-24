'use client';

import { Typography } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import BusinessInfoForm from '../../../src/admin/components/BusinessInfoForm';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function BusinessInfoPage() {
  const { t } = useTranslation();
  const { businessInfo, isLoading, updateBusinessInfo } = useAdminData();

  if (isLoading || !businessInfo) {
    return (
      <PageContainer title={t('admin.business.title')}>
        <Typography color="text.secondary">{t('admin.common.loading')}</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={t('admin.business.title')} subtitle={t('admin.business.subtitle')}>
      <MockDataBanner message={t('admin.business.mockBanner')} />
      <BusinessInfoForm businessInfo={businessInfo} onSave={updateBusinessInfo} />
    </PageContainer>
  );
}
