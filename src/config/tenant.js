/**
 * Tenant configuration for Fruteria del Sol demo.
 * Light-mode, warm, fruit-forward theme for a fruteria/neveria business.
 */
const tenantConfig = {
  id: 'fruteria-del-sol',
  name: 'Fruteria del Sol',
  logo: null,
  theme: {
    palette: {
      mode: 'light',
      primary: {
        main: '#E07830',
        light: '#F09848',
        dark: '#C06020',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#43A047',
        light: '#66BB6A',
        dark: '#2E7D32',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#FFF8F0',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2D1810',
        secondary: '#6B5A4E',
      },
      error: {
        main: '#D32F2F',
      },
      warning: {
        main: '#F9A825',
      },
      success: {
        main: '#43A047',
      },
      info: {
        main: '#E07830',
      },
      divider: 'rgba(45, 24, 16, 0.10)',
    },
    typography: {
      h1: {
        fontSize: 'clamp(2.25rem, 1.5rem + 3vw, 3.75rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 'clamp(1.75rem, 1.15rem + 2.2vw, 2.75rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 600,
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
            fontWeight: 600,
            textTransform: 'none',
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #E07830 0%, #F09848 100%)',
            boxShadow: '0 4px 16px rgba(224, 120, 48, 0.30)',
            '&:hover': {
              background: 'linear-gradient(135deg, #C06020 0%, #E07830 100%)',
              boxShadow: '0 6px 24px rgba(224, 120, 48, 0.40)',
            },
          },
          outlinedPrimary: {
            borderColor: 'rgba(224, 120, 48, 0.5)',
            color: '#E07830',
            '&:hover': {
              borderColor: '#E07830',
              backgroundColor: 'rgba(224, 120, 48, 0.06)',
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
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(45, 24, 16, 0.08)',
            boxShadow: '0 2px 12px rgba(45, 24, 16, 0.06)',
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
    onlineOrdering: true,
    loyalty: true,
    multiLocation: true,
  },
};

export default tenantConfig;
