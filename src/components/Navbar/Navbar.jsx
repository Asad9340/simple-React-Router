import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div className="flex justify-between px-3 md:px-10 bg-gray-900 py-2 md:py-4 my-4 text-white">
      <div>
        <h2 className="text-xl md:text-3xl font-bold">Logo</h2>
      </div>
      <div>
        <nav className="flex gap-1 md:gap-3 text-base md:text-xl font-semibold justify-between items-center duration-300">
          <NavLink
            className="hover:bg-orange-500 px-1 md:px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/"
          >
            Posts
          </NavLink>
          <NavLink
            className="hover:bg-orange-500  px-1 md:px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            className="hover:bg-orange-500  px-1 md:px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:bg-orange-500  px-1 md:px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
