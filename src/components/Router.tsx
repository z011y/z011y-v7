import { createContext, useState } from 'react';

import Home from 'src/routes/Home';
import Page from 'src/routes/Page';
import NotFound from 'src/routes/NotFound';

interface RouterProps {
  initialPath: string;
}

interface IPathContext {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>> | (() => {});
}

export const PathContext = createContext<IPathContext>({
  currentPath: '/not-found',
  setCurrentPath: () => {},
});

const Router = ({ initialPath }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const routes = new Map([
    ['/', <Home />],
    ['/page', <Page />],
  ]);

  return (
    <PathContext.Provider
      value={{
        currentPath,
        setCurrentPath,
      }}
    >
      {routes.get(currentPath) ?? <NotFound />}
    </PathContext.Provider>
  );
};

export default Router;
