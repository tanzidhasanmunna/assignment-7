import PropTypes from "prop-types";

export default function WantToCoocked({ recipe, handelCurrentlyCooking }) {
  console.log(recipe);
  const { recipe_name, preparing_time, calories } = recipe;
  return (
    <tr>
      <td className="py-2">{recipe_name}</td>
      <td className="py-2">{preparing_time} minutes</td>
      <td className="py-2">{calories} calories</td>
      <td className="py-2 text-white">
        <button onClick={() => handelCurrentlyCooking(recipe) } className="btn bg-green-500 p-2 rounded-lg">Preparing</button>
      </td>
    </tr>
  );
}


WantToCoocked.propTypes = {
  recipe: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
  handelCurrentlyCooking: PropTypes.func.isRequired,
}