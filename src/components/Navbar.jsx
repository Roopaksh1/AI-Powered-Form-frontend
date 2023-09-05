import { Link, NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  const openUserOption = () => {};

  const openBarsOption = () => {};

  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <header className=" bg-navbar-bg p-4 flex justify-between text-white font-Roboto">
        <div>
          <Link to="/">
            <div className="inline-block w-10 h-10 rounded-full text-center align-middle leading-9 overflow-hidden">
              <img src="favicon.ico" alt="logo" className="w-10 h-10" />
            </div>
            <span className="text-xl ml-2 font-semibold md:text-2xl">
              AI-Forms
            </span>
          </Link>
          <div className="hidden md:inline-flex ml-10 text-lg font-light">
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
        <div className="text-2xl">
          <button onClick={openBarsOption}>
            <i className="fa-solid fa-bars md:hidden"></i>
          </button>
          <button
            onClick={openUserOption}
            className="ml-5 inline-block w-10 h-10 rounded-full bg-user-option-color text-center align-middle leading-4"
          >
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
