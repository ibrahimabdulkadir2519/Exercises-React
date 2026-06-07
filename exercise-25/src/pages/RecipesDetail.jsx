import { Link, useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Pancakes",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
    ],
    instructions: [
      "Mix ingredients",
      "Cook on pan",
      "Serve",
    ],
  },

  {
    id: 2,
    title: "Omelette",
    ingredients: [
      "Eggs",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Beat eggs",
      "Cook",
      "Serve",
    ],
  },

  {
    id: 3,
    title: "Burger",
    ingredients: [
      "Bun",
      "Meat",
      "Cheese",
    ],
    instructions: [
      "Cook meat",
      "Assemble burger",
      "Serve",
    ],
  },

  {
    id: 4,
    title: "Spaghetti",
    ingredients: [
      "Pasta",
      "Sauce",
    ],
    instructions: [
      "Boil pasta",
      "Add sauce",
      "Serve",
    ],
  },

  {
    id: 5,
    title: "Chocolate Cake",
    ingredients: [
      "Flour",
      "Sugar",
      "Chocolate",
    ],
    instructions: [
      "Mix",
      "Bake",
      "Cool",
    ],
  },
];

function RecipesDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id == id
  );

  if (!recipe) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">
        Recipes Not Found
      </h1>

      <p className="mb-4">
        The user you're looking for doesn't exist.
      </p>

      <Link
        to="/Recipes"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Recipes
      </Link>
    </div>
  );
}

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {recipe.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Ingredients
          </h2>

          <ul className="space-y-2">
            {recipe.ingredients.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Instructions
          </h2>

          <ol className="space-y-2">
            {recipe.instructions.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Link
        to="/Recipes"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Back
      </Link>
    </div>
  );
}

export default RecipesDetail;