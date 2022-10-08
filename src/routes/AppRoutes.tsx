import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { AuthPage } from '../modules/auth';

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='auth/*' element={<AuthPage />} />
          <Route path='*' element={<Navigate to='/auth' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
