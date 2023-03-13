import useDefaultTheme from '../hooks/useDefaultTheme'
import ThemeProvider from '@mui/system/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
    <ThemeProvider theme={useDefaultTheme()}>
      <Story />
    </ThemeProvider>
    );
  },
]