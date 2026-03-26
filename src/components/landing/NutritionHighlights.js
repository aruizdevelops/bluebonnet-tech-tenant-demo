'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TuneIcon from '@mui/icons-material/Tune';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useTranslation } from '../../i18n/useTranslation';
import { getBenefits } from '../../constants/content';

const ICON_MAP = { Eco: SpaIcon, FitnessCenter: FitnessCenterIcon, Tune: TuneIcon, FlashOn: FlashOnIcon };

export default function NutritionHighlights() {
  const { t } = useTranslation();
  const content = getBenefits(t);

  return (
    <Box component="section" id="nutrition" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
            {content.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            {content.headline}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {content.items.map((item) => {
            const Icon = ICON_MAP[item.icon] || SpaIcon;
            return (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 28, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
