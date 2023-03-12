import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '@mui/system/ThemeProvider'
import useDefaultTheme from '@/hooks/useDefaultTheme'

export default function App({ Component, pageProps }: AppProps) {
  const theme = useDefaultTheme()

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
