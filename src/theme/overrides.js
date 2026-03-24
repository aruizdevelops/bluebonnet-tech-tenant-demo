/**
 * Additional tenant-specific component style overrides.
 * These are merged on top of core theme overrides via the tenant config.
 */
const tenantComponentOverrides = {
  MuiButton: {
    styleOverrides: {
      containedPrimary: {
        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5C 100%)',
        boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
        '&:hover': {
          background: 'linear-gradient(135deg, #D45A2D 0%, #FF6B35 100%)',
          boxShadow: '0 6px 28px rgba(255, 107, 53, 0.45)',
        },
      },
    },
  },
};

export default tenantComponentOverrides;
