import { useState } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const initialValues = {
  email: 'ambassador@codershq.ae',
};

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is required'),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      // TODO: process the form
    },
  });

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      {/* Header */}
      <div className='text-center mb-10'>
        <h1 className='text-dark fw-bolder mb-3'>Forgot Password ?</h1>
        <div className='text-gray-500 fw-semibold fs-6'>
          Enter your email to reset your password.
        </div>
      </div>

      {/* Errors */}
      {hasErrors === true && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>
            Sorry, looks like there are some errors detected, please try again.
          </div>
        </div>
      )}

      {hasErrors === false && (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Sent password reset. Please check your email
          </div>
        </div>
      )}

      {/* Email Field  */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
        <input
          type='email'
          placeholder=''
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className='d-flex flex-wrap justify-content-end pb-lg-0'>
        <button
          type='submit'
          id='kt_password_reset_submit'
          className='btn btn-primary me-4'
        >
          <span className='indicator-label'>Submit</span>
          {loading && (
            <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-light'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Cancel
          </button>
        </Link>{' '}
      </div>
    </form>
  );
};

export default ForgotPassword;
