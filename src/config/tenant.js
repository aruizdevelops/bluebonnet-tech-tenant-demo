/**
 * Tenant configuration for Tropikala Smoothie Co.
 * Light-mode, vibrant, tropical smoothie brand palette.
 * All placeholder content — does not copy any real business.
 */
const tenantConfig = {
  id: 'tropikala-smoothie',
  name: 'Tropikala Smoothie Co.',
  logo: null,
  theme: {
    palette: {
      mode: 'light',
      primary: {
        main: '#FF6B4A',
        light: '#FF8F73',
        dark: '#E5502D',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00B4A0',
        light: '#33C3B3',
        dark: '#008F7D',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#FFF9F5',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#1A1A2E',
        secondary: '#5C5C70',
      },
      error: {
        main: '#E53E3E',
      },
      warning: {
        main: '#FFB830',
      },
      success: {
        main: '#38A169',
      },
      info: {
        main: '#4299E1',
      },
      accent: {
        main: '#FFB830',
        light: '#FFD166',
        dark: '#E5A020',
        contrastText: '#1A1A2E',
      },
      divider: 'rgba(26, 26, 46, 0.08)',
    },
    typography: {
      h1: {
        fontSize: 'clamp(2.25rem, 1.5rem + 3vw, 3.75rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      h2: {
        fontSize: 'clamp(1.75rem, 1.15rem + 2.2vw, 2.75rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      h3: {
        fontSize: 'clamp(1.35rem, 1rem + 1.2vw, 2rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      h4: {
        fontWeight: 700,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      h5: {
        fontWeight: 600,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      h6: {
        fontWeight: 600,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      body1: {
        fontSize: '1.0625rem',
        lineHeight: 1.7,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.6,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      button: {
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.02em',
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            padding: '10px 28px',
            fontWeight: 600,
            textTransform: 'none',
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FF8F73 100%)',
            boxShadow: '0 4px 16px rgba(255, 107, 74, 0.30)',
            '&:hover': {
              background: 'linear-gradient(135deg, #E5502D 0%, #FF6B4A 100%)',
              boxShadow: '0 6px 24px rgba(255, 107, 74, 0.40)',
            },
          },
          containedSecondary: {
            background: 'linear-gradient(135deg, #00B4A0 0%, #33C3B3 100%)',
            boxShadow: '0 4px 16px rgba(0, 180, 160, 0.25)',
            '&:hover': {
              background: 'linear-gradient(135deg, #008F7D 0%, #00B4A0 100%)',
              boxShadow: '0 6px 24px rgba(0, 180, 160, 0.35)',
            },
          },
          outlinedPrimary: {
            borderColor: 'rgba(255, 107, 74, 0.4)',
            color: '#E5502D',
            '&:hover': {
              borderColor: '#FF6B4A',
              backgroundColor: 'rgba(255, 107, 74, 0.06)',
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
            border: '1px solid rgba(26, 26, 46, 0.06)',
            boxShadow: '0 2px 16px rgba(26, 26, 46, 0.05)',
            borderRadius: 16,
            transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: '0 8px 32px rgba(26, 26, 46, 0.08)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backdropFilter: 'blur(12px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  },
  features: {
    ordering: true,
    cart: true,
    promotions: true,
    nutrition: true,
  },
};

export default tenantConfig;
