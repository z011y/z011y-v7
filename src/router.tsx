import { createContext, useState } from 'react';

import Layout from 'src/layout';
import Home from 'src/routes/Home';
import Blog from 'src/routes/Blog';
import Projects from 'src/routes/Projects';
import NotFound from 'src/routes/NotFound';

interface RouterProps {
  initialPath: string;
}

interface IPathContext {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>> | null;
}

export const PathContext = createContext<IPathContext>({
  currentPath: '/not-found',
  setCurrentPath: null,
});

const Router = ({ initialPath }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const routes = new Map([
    ['/', <Home />],
    ['/blog', <Blog />],
    ['/projects', <Projects />]
  ]);

  return (
    <PathContext.Provider
      value={{
        currentPath,
        setCurrentPath,
      }}
    >
      <Layout>
        {routes.get(currentPath) ?? <NotFound />}
      </Layout>
    </PathContext.Provider>
  );
};

export default Router;
