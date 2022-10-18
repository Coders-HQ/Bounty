import { createRoot } from 'react-dom/client';
import axios from 'axios';

import './styles/style.scss';
import './styles/plugins.scss';
import './styles/style.react.scss';

import { setupAxios } from './modules/auth';
import { AppRoutes } from './routes/AppRoutes';

setupAxios(axios);

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<AppRoutes />);
}
