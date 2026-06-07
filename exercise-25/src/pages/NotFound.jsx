import { Link } from "react-router-dom";
 
const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-600 mt-2">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;