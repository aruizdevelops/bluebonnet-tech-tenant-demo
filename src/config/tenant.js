/**
 * Tenant-specific configuration for the demo app.
 * Overrides core theme palette, typography, and component styles.
 * Replace these values when customizing for a specific business.
 */
const tenantConfig = {
  id: 'demo-tenant',
  name: 'Acme Corp',
  logo: null,
  theme: {
    palette: {
      primary: {
        main: '#FF6B35',
        light: '#FF8A5C',
        dark: '#D45A2D',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00D4AA',
        light: '#33DDBB',
        dark: '#00A888',
        contrastText: '#000000',
      },
      background: {
        default: '#0B0B12',
        paper: '#13131D',
      },
    },
    typography: {
      h1: {
        fontSize: 'clamp(2.5rem, 1.5rem + 3.5vw, 4rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 'clamp(2rem, 1.25rem + 2.5vw, 3rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
      },
      body1: {
        fontSize: '1.0625rem',
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 50,
            padding: '10px 28px',
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5C 100%)',
            boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #D45A2D 0%, #FF6B35 100%)',
              boxShadow: '0 6px 28px rgba(255, 107, 53, 0.45)',
            },
          },
          outlinedPrimary: {
            borderColor: 'rgba(255, 107, 53, 0.5)',
            '&:hover': {
              borderColor: '#FF6B35',
              backgroundColor: 'rgba(255, 107, 53, 0.08)',
            },
          },
          sizeLarge: {
            padding: '14px 36px',
            fontSize: '1rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#13131D',
            transition:
              'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  features: {
    analytics: true,
    userManagement: true,
  },
};

export default tenantConfig;
