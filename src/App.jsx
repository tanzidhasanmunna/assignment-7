import { useState } from "react";
import "./App.css";
import Coocked from "./components/Coocked/Coocked";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [whatToCoock, setWhatToCoock] = useState([])
  const notify = () => toast("Already added");
  const handelOnclick = (recipe) => {
    if (whatToCoock.includes(recipe)) { 
      notify();
      return;  // Stop the function execution if the recipe is already in the list
    }
    setWhatToCoock([...whatToCoock, recipe])
  };
  return (
    <div className="lg:max-w-[1180px] mx-auto">
      <Header />
      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold mb-4">Our Recipes</h2>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-start">
        <Recipes handelOnclick={handelOnclick} />
        <Coocked whatToCoock={whatToCoock} setWhatToCoock={setWhatToCoock}/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
