import { createRoot } from 'react-dom/client';
import axios from 'axios';

import { setupAxios } from './modules/auth';
import { AppRoutes } from './routes/AppRoutes';

setupAxios(axios);

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<AppRoutes />);
}
