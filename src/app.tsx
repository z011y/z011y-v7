import { StrictMode } from 'react';

import 'public/styles/base.css';
import ThemeProvider from 'src/contexts/theme';
import Router from 'src/router';

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
            <Router initialPath={initialPath} />
          </ThemeProvider>
        </StrictMode>
      </body>
    </html>
  );
};

export default App;
