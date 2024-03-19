import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div className="flex justify-between px-10 bg-gray-900 py-4 my-4 text-white">
      <div>
        <h2 className="text-3xl font-bold">Logo</h2>
      </div>
      <div>
        <nav className="flex gap-3 text-xl font-semibold justify-between items-center duration-300">
          <NavLink
            className="hover:bg-orange-500 px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-orange-500 px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:bg-orange-500 px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="hover:bg-orange-500 px-3 py-2 rounded-lg hover:text-white duration-300"
            to="/footer"
          >
            Footer
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
