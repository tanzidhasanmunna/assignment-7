import { CiClock1} from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Recipe({recipe, handelOnclick}) {
    const {recipe_name,recipe_image,ingredients, preparing_time,short_description, calories} = recipe;
   
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[350px]">
    <img
      src={recipe_image}
      alt="Spaghetti Bolognese"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{recipe_name}</h3>
      <p className="text-gray-600 mb-4">
        {short_description}
      </p>
      <hr />
      <p className="font-bold mb-2">Ingredients: {ingredients.length}</p>
      <ul className="text-gray-600 mb-4">
        <li>• {ingredients[0]}</li>
        <li>• {ingredients[1]}</li>
        <li>• {ingredients[2]}</li>
      </ul>
      <hr />
      <div className="flex justify-between items-center text-gray-600 mb-4 mt-2">
        <span className="flex gap-3 items-center">
          <CiClock1 /><p>{preparing_time} min</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaFire /><p>{calories} calories</p>
        </span>
      </div>
      <button onClick={() => handelOnclick(recipe)} className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
        Want to Cook
      </button>
    </div>
  </div>
  )
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handelOnclick: PropTypes.func.isRequired,
  
}