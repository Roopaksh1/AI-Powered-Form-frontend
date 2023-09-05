import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  const [burger, setBurger] = useState(false);
  const [userOp, setUSerOp] = useState(false);
  const openUserOption = () => {
    setUSerOp((prevState) => !prevState);
  };
  const openBarsOption = () => {
    setBurger((prevState) => !prevState);
  };

  return (
    <div className='overflow-hidden flex flex-col min-h-screen'>
      <header className=' bg-navbar-bg p-4 flex justify-between text-white font-Roboto'>
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
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active-link-color "
                  : "hover:border-b-2 border-active-link-color"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active-link-color ml-4"
                  : "ml-4 hover:border-b-2 border-active-link-color"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active-link-color ml-4"
                  : "ml-4 hover:border-b-2 border-active-link-color"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active-link-color ml-4"
                  : "ml-4 hover:border-b-2 border-active-link-color"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className='text-2xl'>
          <button onClick={openBarsOption}>
            <i className='fa-solid fa-bars md:hidden'></i>
          </button>
          <button
            onClick={openUserOption}
            className='ml-5 inline-block w-10 h-10 rounded-full bg-user-option-color text-center align-middle leading-4'
          >
            <i className='fa-solid fa-user'></i>
          </button>
        </div>
      </header>
      <div
        className={
          "z-90 absolute w-28 h-auto rounded-md top-16 right-4 float-right md:hidden bg-slate-200" +
          (userOp ? "" : " hidden")
        }
      >
        <ul className='flex flex-col text-center my-2 text-slate-950'>
          <li className='p-1 cursor-pointer m-2'>Your Profile</li>
          <li className='p-1 cursor-pointer m-2'>Settings</li>
          <li className='p-1 cursor-pointer m-2'>Sign Out</li>
        </ul>
      </div>
      <div
        className={
          "bg-slate-100 text-slate-800 w-full md:hidden flex flex-col items-center" +
          (burger ? "" : " hidden")
        }
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-navbar-bg my-1"
              : " hover:scale-110 transition-transform my-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-navbar-bg my-1 "
              : " hover:scale-110 transition-transform my-1"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-navbar-bg my-1 "
              : " hover:scale-110 transition-transform my-1"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-navbar-bg my-1"
              : " hover:scale-110 transition-transform my-1"
          }
        >
          Contact
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
