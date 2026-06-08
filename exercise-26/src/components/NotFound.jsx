import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="max-w-md mx-auto py-16 text-center">
      <h1 className="text-6xl font-black text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
      <p className="text-sm text-red-400 bg-red-50 px-3 py-1.5 rounded-lg inline-block font-mono mb-4">
        {error?.statusText || error?.message || "Page Not Found"}
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-block px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all shadow-sm"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;