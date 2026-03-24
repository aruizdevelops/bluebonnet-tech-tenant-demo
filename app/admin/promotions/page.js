'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function PromotionsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.promotions.title')} subtitle={t('admin.promotions.subtitle')}>
      <PlaceholderSection
        title={t('admin.promotions.sectionTitle')}
        description={t('admin.promotions.sectionDescription')}
        features={[
          t('admin.promotions.feature1'),
          t('admin.promotions.feature2'),
          t('admin.promotions.feature3'),
          t('admin.promotions.feature4'),
          t('admin.promotions.feature5'),
        ]}
      />
    </PageContainer>
  );
}
