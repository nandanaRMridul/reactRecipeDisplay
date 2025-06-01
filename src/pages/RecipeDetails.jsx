import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  //Fetching each recipe based on id param
  useEffect(() => {
    const fetchRecipe = async () => {
      //Async fetch fn with try catch
      try {
        const result = await axios.get(`${baseURL}/recipes/${id}`);
        setRecipe(result.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };

    fetchRecipe(); //Calling fetch fn
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe... 🍳</p>; //Display loader for when data hasn't been recieved yet

  return (
    <div className="min-h-screen bg-[url(assets/view-img.jpg)] bg-cover bg-center p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto my-10 p-10 bg-white rounded-lg shadow-lg">
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {recipe.title}
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🛒 Ingredients:
          </h2>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>🔸 {item}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-2xl text-gray-800 mt-4 font-semibold">
            📃Steps:
          </h2>
          <ol className="list-decimal list-inside">
            {recipe.steps.map((step, index) => (
              <li key={index}> {step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
