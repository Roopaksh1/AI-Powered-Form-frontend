import { NavLink, Navigate } from 'react-router-dom';
import image from '../../../public/favicon.ico';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../App';
import { API_CLIENT } from '../../utils/api';
import { POST_USER_REGISTER_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
  useTitle('Signup | AI Forms');
  const { user, setUser } = useContext(AuthContext);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const handleSignup = (e) => {
    e.preventDefault();
    if (name.current.value == '') {
      toast.error('Please add an username.', { toastId: 3 });
      return;
    }
    if (name.current.value.match(/\s/)) {
      toast.error('No spaces are allowed in the username', { toastId: 4 });
      return;
    }
    if (email.current.value == '') {
      toast.error('Please add an email.', { toastId: 5 });
      return;
    }
    if (
      !password.current.value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
      ) ||
      password.current.value.length < 8
    ) {
      toast.error('Invalid Password', { toastId: 6 });
      return;
    }
    if (password.current.value != confirmPassword.current.value) {
      toast.error('Password not matching', { toastId: 7 });
      return;
    }
    API_CLIENT.post(POST_USER_REGISTER_URL, {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      'confirm-password': confirmPassword.current.value,
    })
      .then((res) => {
        toast.success('You have signed up.');
        setUser({ auth: true, name: res.data.name });
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  return !user.auth ? (
    <section className='bg-gray-50 flex-grow flex justify-center flex-col'>
      <div className='flex flex-col items-center justify-center px-6 py-8 lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
        >
          <img className='w-8 h-8 mr-2' src={image} alt='logo' />
          AI-Forms
        </a>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Create and account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Username
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  placeholder='username'
                  ref={name}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  placeholder='name@mail.com'
                  ref={email}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Password
                  <br />
                  <span className='font-light text-xs'>
                    Password must be at least 8 characters long and contain one
                    uppercase, one lowercase and a number. Spaces are not
                    allowed.
                  </span>
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  ref={password}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Confirm password
                </label>
                <input
                  type='password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='••••••••'
                  ref={confirmPassword}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full text-white bg-sign-up-color hover:bg-sign-up-hover-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Create an account
              </button>
              <p className='text-sm font-light text-gray-500'>
                Already have an account?{' '}
                <NavLink
                  to={'/login'}
                  className='font-medium hover:underline text-sign-up-color hover:text-sign-up-hover-color'
                >
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Navigate to={'/'} />
  );
};

export default SignUp;
