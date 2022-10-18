/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.height = '100%';
    }
    return () => {
      if (root) {
        root.style.height = 'auto';
      }
    };
  }, []);

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
        </div>
        <div className='d-flex flex-center flex-wrap px-5'>
          <div className='d-flex fw-semibold text-primary fs-base'>
            <a href='#' className='px-5' target='_blank'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
