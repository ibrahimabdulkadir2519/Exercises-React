import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryRecipes from "./pages/CategoriesRecipes";
import RecipesDetail from "./pages/RecipesDetail";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "Recipes/:id",
        element: <RecipesDetail />,
      },
      {path: "recipes",
        element: <Recipes />,
        
      },

      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            path: ":categoryId",
            element: <CategoryRecipes />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
]);

export default router;
