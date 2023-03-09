import { StrictMode } from 'react';

import 'public/base.css';
import Router from 'src/components/Router';
import ThemeProvider from 'src/contexts/theme';
import Layout from 'src/layout';

interface AppProps {
  initialPath: string;
}

const App = ({ initialPath }: AppProps) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="app.css" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const getInitialTheme = () => {
                const cachedTheme = localStorage.getItem('theme') ?? '';
                const systemThemeMatchable = window.matchMedia('(prefers-color-scheme: dark)');
            
                switch (true) {
                  case ['light', 'dark'].includes(cachedTheme):
                    return cachedTheme;
                  case systemThemeMatchable.matches:
                    return 'dark';
                  default:
                    return 'light';
                }
              };

              document.documentElement.setAttribute('data-theme', getInitialTheme())
            })()`,
          }}
        />
        <title>z011y</title>
      </head>
      <body>
        <StrictMode>
          <ThemeProvider>
            <Layout>
              <Router initialPath={initialPath} />
            </Layout>
          </ThemeProvider>
        </StrictMode>
      </body>
    </html>
  );
};

export default App;
