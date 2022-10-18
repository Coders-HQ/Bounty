/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { toAbsoluteUrl } from '../../../helpers';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Password is required'),
});

const initialValues = {
  email: 'ambassador@codershq.ae',
  password: 'demo',
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      // TODO: process form
    },
  });

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='sign-in-form'
    >
      {/* Heading */}
      <div className='text-center mb-11'>
        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/logo.png')}
          className='h-100px me-3'
        />
        <h1 className='text-dark fw-bolder mb-3 mt-5'>Sign In</h1>
      </div>

      {/* Email Input */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>

      {/* Password Input */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>
          Password
        </label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      {/* Forgot Password Link */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
      </div>

      {/* Form Submit */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='form_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>

      {/* Sign-up Link */}
      <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default Login;
