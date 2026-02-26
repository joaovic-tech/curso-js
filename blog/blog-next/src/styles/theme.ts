export type AppTheme = {
  fonts: {
    primary: string;
  };
  colors: {
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    textHeading: string;
    textBlack: string;
    textWhite: string;
    border: string;
    primary: string;
    accent: string;
    social: {
      github: string;
      linkedin: string;
      x: string;
      instagram: string;
    };
  };
};

export const lightTheme: AppTheme = {
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    background: '#F8F6F0',
    surface: '#FFFFFF',
    textPrimary: '#2D3436',
    textSecondary: '#636E72',
    textHeading: '#2D3436',
    textBlack: '#1A1A1A',
    textWhite: '#FFFFFF',
    border: '#DDD8CE',
    primary: '#00C853',
    accent: '#7C3AED',
    social: {
      github: '#4a4a4a',
      linkedin: '#7a9eb1',
      x: '#333333',
      instagram: '#c18c8c',
    },
  },
};

export const darkTheme: AppTheme = {
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    background: '#1A1B26',
    surface: '#24283B',
    textPrimary: '#C9D1D9',
    textSecondary: '#8B949E',
    textHeading: '#E6EDF3',
    textBlack: '#E6EDF3',
    textWhite: '#C9D1D9',
    border: '#30363D',
    primary: '#4ADE80',
    accent: '#A78BFA',
    social: {
      github: '#6E7681',
      linkedin: '#94B8C9',
      x: '#6E7681',
      instagram: '#D4A5A5',
    },
  },
};
