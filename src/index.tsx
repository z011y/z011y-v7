import { hydrateRoot } from 'react-dom/client';

import App from './app';

hydrateRoot(document, <App initialPath={window.location.pathname} />);
