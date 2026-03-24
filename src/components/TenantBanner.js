'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import { useTenant } from '@bluebonnet-tech/core/providers';

export function TenantBanner() {
  const tenant = useTenant();

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 212, 170, 0.1) 100%)',
        border: '1px solid rgba(255, 107, 53, 0.2)',
        mb: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to {tenant.name}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Your personalized dashboard is ready. Explore your data and manage your account.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}

export default TenantBanner;
