
import PropTypes from "prop-types";
export default function CurrentlyCooking({recipe}) {
  const { recipe_name, preparing_time, calories } = recipe;
  return (
    <tr>
      <td className="py-2">{recipe_name}</td>
      <td className="py-2">{preparing_time} minutes</td>
      <td className="py-2">{calories} calories</td>
    </tr>
  );
}

CurrentlyCooking.propTypes = {
  recipe: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
}