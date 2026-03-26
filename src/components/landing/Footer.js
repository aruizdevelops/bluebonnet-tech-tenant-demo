'use client';

import { Box, Container, Typography, Grid, Link as MuiLink, Divider } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import { getFooter } from '../../constants/content';

export default function Footer() {
  const { t } = useTranslation();
  const content = getFooter(t);

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#1A1A2E', color: '#F5F5F7' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#FF6B4A' }}>
              {content.brand}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(245,245,247,0.6)', maxWidth: 280 }}>
              {content.tagline}
            </Typography>
          </Grid>
          {content.columns.map((col) => (
            <Grid key={col.title} size={{ xs: 6, sm: 4, md: 2.67 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#F5F5F7' }}>
                {col.title}
              </Typography>
              {col.links.map((link) => (
                <Box key={link.label} sx={{ mb: 1 }}>
                  {link.href ? (
                    <MuiLink
                      href={link.href}
                      underline="none"
                      sx={{
                        color: 'rgba(245,245,247,0.6)',
                        fontSize: '0.875rem',
                        '&:hover': { color: '#FF6B4A' },
                        transition: 'color 200ms',
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ) : (
                    <Typography variant="body2" sx={{ color: 'rgba(245,245,247,0.6)' }}>
                      {link.label}
                    </Typography>
                  )}
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(245,245,247,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(245,245,247,0.4)' }}>
            {content.copyright}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {content.legalLinks.map((link) => (
              <MuiLink
                key={link.label}
                href={link.href}
                underline="none"
                sx={{ color: 'rgba(245,245,247,0.4)', fontSize: '0.75rem', '&:hover': { color: '#FF6B4A' } }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
