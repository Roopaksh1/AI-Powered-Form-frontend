import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const openUserOption = () => {};

  const openBarsOption = () => {};

  return (
    <header className=" bg-[#23bcff] p-2 flex justify-between text-white">
      <div>
        <Link to="/">
          <div className="inline-block w-10 h-10 rounded-full text-center align-middle leading-9 overflow-hidden">
            <img src="favicon.ico" alt="logo" className="w-10 h-10" />
          </div>
          <span className="text-xl ml-2 font-semibold md:text-2xl">
            AI-Forms
          </span>
        </Link>
        <div className="hidden md:inline-flex ml-10 text-lg">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-red-400 '
                : 'hover:scale-110 transition-transform'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/dashboard'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-red-400 scale-110 ml-4'
                : 'ml-4 hover:scale-110 transition-transform'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-red-400 scale-110 ml-4'
                : 'ml-4 hover:scale-110 transition-transform'
            }
          >
            About
          </NavLink>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-red-400 scale-110 ml-4'
                : 'ml-4 hover:scale-110 transition-transform'
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
          className="ml-5 inline-block w-10 h-10 rounded-full bg-[#bdbdbd] text-center align-middle leading-4"
        >
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
