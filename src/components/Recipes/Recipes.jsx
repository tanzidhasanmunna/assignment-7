import { useEffect, useState } from "react";

import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

export default function Recipes({handelOnclick}) {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch('./fakedata.json')
     .then(response => response.json())
     .then(data => setRecipes(data))
     .catch(error => console.error('Error:', error));

  }, [])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {
        recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe}  handelOnclick ={handelOnclick}/>
        )) 
      }
    </div>
  );
}


Recipes.propTypes = {
  handelOnclick: PropTypes.func.isRequired,
};