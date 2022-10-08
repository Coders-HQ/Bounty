import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Outlet />
    </Suspense>
  );
}

export default App;
