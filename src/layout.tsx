import { ReactNode } from 'react';
import Header from 'src/components/Header';

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="base-container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
