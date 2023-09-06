import { useContext, useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../App';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [burger, setBurger] = useState(false);
  const [userOp, setUserOp] = useState(false);
  const navbar = useRef();
  const userOptions = useRef();
  const toggleUserOption = () => {
    setUserOp((prevState) => !prevState);
  };
  const toggleBarsOption = () => {
    setBurger((prevState) => !prevState);
  };
  const CloseNavbar = (e) => {
    if (userOp && !userOptions.current.contains(e.target)) {
      setUserOp(false);
    }

    if (burger && !navbar.current.contains(e.target)) {
      setBurger(false);
    }
  };

  return (
    <div
      className='overflow-hidden flex flex-col min-h-screen'
      onMouseDown={CloseNavbar}
    >
      <header className=' bg-navbar-bg p-4 flex justify-between text-white font-Roboto'>
        <div ref={userOptions} className='inline-block md:hidden'>
          {!user.auth ? (
            <NavLink
              to={'/login'}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Login
            </NavLink>
          ) : (
            <div>
              <button
                onClick={toggleUserOption}
                className='inline-block w-10 h-10 rounded-full bg-user-option-color text-center align-middle leading-4'
              >
                <i className='fa-solid fa-user'></i>
              </button>
              <div
                className={
                  'z-90 absolute w-28 h-auto rounded-md top-16 left-3 bg-mobile-menu-bg text-base border border-black' +
                  (userOp ? '' : ' hidden')
                }
              >
                <ul className='flex flex-col text-center my-2 text-black text-sm p-2'>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Your Profile
                  </NavLink>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Settings
                  </NavLink>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Sign Out
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>
          <Link to='/'>
            <div className='inline-block w-10 h-10 rounded-full text-center align-middle leading-9 overflow-hidden'>
              <img src='favicon.ico' alt='logo' className='w-10 h-10' />
            </div>
            <span className='text-xl ml-2 font-semibold md:text-2xl'>
              AI-Forms
            </span>
          </Link>
          <div className='hidden md:inline-flex ml-10 text-lg font-light'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-active-link-color '
                  : 'hover:border-b-2 border-active-link-color'
              }
            >
              Home
            </NavLink>
            <NavLink
              to={'/dashboard'}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-active-link-color ml-4'
                  : 'ml-4 hover:border-b-2 border-active-link-color'
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-active-link-color ml-4'
                  : 'ml-4 hover:border-b-2 border-active-link-color'
              }
            >
              About
            </NavLink>
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-active-link-color ml-4'
                  : 'ml-4 hover:border-b-2 border-active-link-color'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className='text-2xl'>
          <div className='inline-block' ref={navbar}>
            <button onClick={toggleBarsOption}>
              <i className='fa-solid fa-bars md:hidden'></i>
            </button>
            <div
              className={
                'z-90 absolute w-28 h-auto rounded-md top-16 right-12 float-right bg-slate-200 text-base' +
                (burger ? '' : ' hidden')
              }
            >
              <ul className='flex flex-col text-start p-2 text-slate-950'>
                <NavLink to={'/'} className={'my-1'} onClick={toggleBarsOption}>
                  Home
                </NavLink>
                <NavLink
                  to={'/dashboard'}
                  className={'my-1'}
                  onClick={toggleBarsOption}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={'my-1'}
                  onClick={toggleBarsOption}
                >
                  About
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className={'my-1'}
                  onClick={toggleBarsOption}
                >
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div ref={userOptions} className='hidden md:inline-block'>
          {!user.auth ? (
            <NavLink
              to={'/login'}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Login
            </NavLink>
          ) : (
            <div>
              <button
                onClick={toggleUserOption}
                className='inline-block w-10 h-10 rounded-full bg-user-option-color text-center align-middle leading-4'
              >
                <i className='fa-solid fa-user'></i>
              </button>
              <div
                className={
                  'z-90 absolute w-28 h-auto rounded-md top-16 right-3 bg-mobile-menu-bg text-base border border-black' +
                  (userOp ? '' : ' hidden')
                }
              >
                <ul className='flex flex-col text-center my-2 text-black text-sm p-2'>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Your Profile
                  </NavLink>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Settings
                  </NavLink>
                  <NavLink
                    to={'/'}
                    className='p-1 cursor-pointer'
                    onClick={toggleUserOption}
                  >
                    Sign Out
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
