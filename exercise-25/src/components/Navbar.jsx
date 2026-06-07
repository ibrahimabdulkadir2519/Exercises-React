import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition-colors";

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <h1 className="text-3xl font-bold">
        Recipe Book
      </h1>

      <nav className="flex gap-8">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/Recipes" className={linkStyle}>
          Recipes
        </NavLink>

        <NavLink to="/Categories" className={linkStyle}>
          Categories
        </NavLink>

        
          
        
       
      </nav>
    </header>
  );
};