import { Link } from "react-router-dom";

const Recipes = () => {
    const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
   
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    
  }
];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Recipes
      </h1>

      {/* card */}
      <div className="grid md:grid-cols-2 gap-6">
    
     {recipes.map((recipe) => (
      <Link
        key={recipe.id}
        to={`/recipes/${recipe.id}`}
      className="bg-white shadow-md rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-2">
        {recipe.title}
      </h2>

      <p className="text-gray-600  mb-3">
        {recipe.description}
      </p>

      <span className="inline-block bg-blue-400 text-blue-700 px-3 py-1 rounded-full">
        {recipe.category}
      </span>
    </Link>
    
  ))}
</div>
    </div>
  )
}

export default Recipes
