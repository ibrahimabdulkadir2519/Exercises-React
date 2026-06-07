import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-2">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 text-gray-800 text-center">
        Welcome to Recipes Book 
      </h1>

      <p className="text-gray-600 mb-10 text-center max-w-md">
        Discover delicious recipes and explore different food categories easily.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">

        {/* Recipes Card */}
        <Link
          to="/Recipes"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition "
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Browse Recipes
          </h2>
          <p className="text-gray-600">
            Explore step-by-step recipes for your favorite meals.
          </p>
        </Link>

        {/* Categories Card */}
        <Link
          to="/Categories"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition "
        >
          <h2 className="text-2xl font-semibold mb-2 text-green-600">
            Browse Categories
          </h2>
          <p className="text-gray-600">
            Find recipes organized by food types and categories.
          </p>
        </Link>

      </div>
    </div>
  );
};

export default Home;