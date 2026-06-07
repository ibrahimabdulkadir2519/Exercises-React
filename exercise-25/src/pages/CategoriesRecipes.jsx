import { Link, useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Pancakes",
    category: "breakfast",
  },
  {
    id: 2,
    title: "Omelette",
    category: "breakfast",
  },
  {
    id: 3,
    title: "Burger",
    category: "lunch",
  },
  {
    id: 4,
    title: "Spaghetti",
    category: "dinner",
  },
  {
    id: 5,
    title: "Chocolate Cake",
    category: "desserts",
  },
];

function CategoryRecipes() {
  const { categoryId } = useParams();

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 capitalize">
        {categoryId} Recipes
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-blue-50 p-4 rounded-xl"
          >
            {recipe.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryRecipes;