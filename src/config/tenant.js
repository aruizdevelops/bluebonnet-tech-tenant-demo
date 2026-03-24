const tenantConfig = {
  id: 'demo-tenant',
  name: 'Acme Corp',
  logo: null,
  theme: {
    palette: {
      mode: 'dark',
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
  },
  features: {
    analytics: true,
    userManagement: true,
  },
};

export default tenantConfig;
