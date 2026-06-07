import { Link, Outlet } from "react-router-dom";

const categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day right",
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Midday favorites",
  },
  {
    id: "dinner",
    name: "Dinner",
    description: "Evening meals",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats",
  },
];

function Categories() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Categories
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {category.name}
            </h2>

            <p className="text-gray-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Categories;