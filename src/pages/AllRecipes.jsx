import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../baseURL";

const AllRecipes = () => {
  //Recipes array & navigate 
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  //Fetch all recipes from db.json
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await axios.get(`${baseURL}/recipes`)
        setRecipes(result.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  //Delete a recipe based on id
  const handleDelete = async (id) => {
    alert("This recipe will be permanently deleted!")
    try {
      await axios.delete(`${baseURL}/recipes/${id}`);//Delete recipe of id
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));//Update recipes array with data otherthan deleted recipe
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete the recipe.");
    }
  };

  //Edit a recipe: navigate to Add recipes page
  const handleEdit = (id) => {
    navigate(`/edit-recipe/${id}`);
  };

  return (
    <div className="min-h-screen bg-[url(assets/recipe-img.jpg)] bg-cover bg-center p-6 flex flex-col items-center justify-center text-center pb-20">
      <h1 className="text-3xl font-bold text-center max-w-sm lg:max-w-full border-0 shadow-md px-8 py-3 rounded-2xl m-4 bg-white ">
        🍽️ All Recipes
      </h1>
      <div className="flex flex-wrap justify-center px-10">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="max-w-sm w-100 lg:max-w-full border-0 px-8 py-8 m-4 bg-white/87 rounded-lg shadow-lg  transition-transform hover:scale-101 text-justify"
          >
            <Link to={`/recipes/${recipe.id}`}>
              {/* Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              {/* Title */}
              <h2 className="text-gray-900 font-bold text-xl mb-2 text-center">
                {recipe.title}
              </h2>
              {/* Description */}
              <p className="text-zinc-800 text-base mb-2">
                {recipe.description}
              </p>
            </Link>

            {/* Edit & Delete Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => handleEdit(recipe.id)}
                className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
