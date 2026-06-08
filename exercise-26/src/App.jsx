import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  // Habka ay u ekaanayso NavLink-yada marka la riixo (Active) iyo marka kale
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-blue-600">My<span className="text-gray-900">Blog</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            
            {isAuthenticated ? (
              <>
                <NavLink to="/create" className={navLinkClass}>Create Post</NavLink>
                <button 
                  onClick={logout}
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;