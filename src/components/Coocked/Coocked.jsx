import { useState } from "react";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCoocked from "../WantToCoocked/WantToCoocked";
import PropTypes from "prop-types";

export default function Coocked({whatToCoock, setWhatToCoock}) {
  const [currentlyCoocked, setCurrentCooked] = useState([])
  const [time, setTime] = useState(0)
  const [calorie, setCalorie] = useState(0)

  const handelCurrentlyCooking = (recipe) => {
    setCurrentCooked([...currentlyCoocked, recipe])
    const completeCoocked = whatToCoock.filter( rec => rec.recipe_id !== recipe.recipe_id)
    setWhatToCoock(completeCoocked)
    setTime(time + recipe.preparing_time)
    setCalorie(calorie + recipe.calories)
  }
  console.log(whatToCoock)
  return (
    <div className="border-2 border-gray-300 rounded-lg flex-1 p-5">
      <h1 className="text-center text-2xl font-bold mb-4">Want to cook: {whatToCoock.length}</h1>
      <hr />
      <div className="mt-4">
      <table className="w-full text-left mb-4">
        <thead>
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Calories</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 p-2">
          {
            whatToCoock.map((recipe, index) => (
              <WantToCoocked key={index} recipe={recipe} handelCurrentlyCooking={handelCurrentlyCooking} />
            ))
          }
        </tbody>
      </table>
      </div>
      <h1 className="text-center text-2xl font-bold mb-4">
        Currently cooking: {currentlyCoocked.length}
      </h1>
      <table className="w-full text-left mb-4">
        <thead>
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Calories</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 p-2">
          {
            currentlyCoocked.map((recipe, index) => (
              <CurrentlyCooking key={index} recipe={recipe} />
            ))
          }
        </tbody>
      </table>
      <div className="text-gray-600 text-right">
        <p>
          Total Time = <span className="font-bold">{time} minutes</span>
        </p>
        <p>
          Total Calories = <span className="font-bold">{calorie} calories</span>
        </p>
      </div>
    </div>
  );
}

Coocked.propTypes = {
  whatToCoock: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWhatToCoock: PropTypes.func.isRequired
}