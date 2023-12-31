import { useContext, useRef } from 'react';
import { AuthContext } from '../../App';
import image from '../../../public/favicon.ico';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_CLIENT } from '../../utils/api';
import { POST_USER_LOGIN_URL } from '../../utils/constant';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('Login | AI Forms');
  const { user, setUser } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleAuth = async (e) => {
    e.preventDefault();
    API_CLIENT.post(POST_USER_LOGIN_URL, {
      email: email.current.value,
      password: password.current.value,
    })
      .then((res) => {
        toast.success('You have logged in', { toastId: 1 });
        setUser({ auth: true, name: res.data.name, id: res.data._id });
      })
      .catch((err) => toast.error(err.response.data.message, { toastId: 2 }));
  };
  return !user.auth ? (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img className='mx-auto h-10 w-auto' src={image} alt='Logo' />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleAuth}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                required
                ref={email}
                className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              {
                // TODO
                /* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div> */
              }
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                required
                ref={password}
                className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-sign-up-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sign-up-hover-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?
          <NavLink
            to='/signup'
            className='font-semibold leading-6 text-sign-up-color hover:text-sign-up-hover-color'
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  ) : (
    <Navigate to={'/'} />
  );
};

export default Login;
