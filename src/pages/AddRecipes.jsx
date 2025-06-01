import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const AddRecipes = () => {
  //Recipe array data as object
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  //To handle modal controls
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  //To redirect to homepage
  const navigate = useNavigate();

  //To get id as params from url
  const { id } = useParams();

  //To render data on pageload
  useEffect(() => {
    if (id) {
      //If id is recieved as params, load data of that id from recipes array (for editing)
      axios.get(`http://localhost:3000/recipes/${id}`).then((res) => {
        const recipeData = res.data;
        setRecipeData({
          title: recipeData.title,
          description: recipeData.description,
          image: recipeData.image,
          ingredients: recipeData.ingredients || [],
          steps: recipeData.steps || [],
        });
      });
    }
  }, [id]);

  //To update recipe data with input data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //To submit form data
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent loss of data on button click dom updation
    const formattedData = {
      //Formatting ingredients, steps as array items
      ...recipeData,
      ingredients: recipeData.ingredients.split(",").filter((item) => item),
      steps: recipeData.steps.split(".").filter((item) => item),
    };

    //If id recieved as params - edit data, else add formatted data to recipes array
    if (id) {
      await axios.put(`http://localhost:3000/recipes/${id}`, formattedData);
      alert("Recipe updated successfully");
    } else {
      await axios.post("http://localhost:3000/recipes", formattedData);
      alert("Recipe added successfully");
    }

    handleCloseModal();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen bg-[url(assets/add-img.jpg)] bg-cover bg-center p-6 flex flex-col items-center justify-center text-center">
      <div className="bg-zinc-50 p-8 rounded-xl max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">
          🍳 Add Your Flavor to the Book!
        </h1>
        <p className="mb-6 text-gray-600">
          Got a go-to dish that always wins hearts? Or maybe a quirky experiment
          that turned out surprisingly delicious? Fill out the form below with
          your mouthwatering masterpiece.
        </p>
        <button
          onClick={handleOpenModal}
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellow-600 "
        >
          {id ? "Edit Recipe ✏️" : "Add New Recipe 🍲"}
        </button>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full min-w-xl rounded-lg bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl mb-4">
                New Recipe
              </h2>

              {["title", "description", "ingredients", "steps", "image"].map(
                //Updating input based on each key of recipeData obj instead of writing separately
                (field) => (
                  <div key={field} className="mt-4">
                    <label className="block font-medium mb-1 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      name={field}
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={recipeData[field]}
                      onChange={handleChange}
                      required
                    />
                    {/* For user info */}
                    {field === "ingredients" && (
                      <p className="text-gray-500 text-sm">
                        Separate each item with a comma (,)
                      </p>
                    )}
                    {field === "steps" && (
                      <p className="text-gray-500 text-sm">
                        Separate each item with a period (.)
                      </p>
                    )}
                  </div>
                )
              )}

              <footer className="mt-6 flex justify-end gap-2">
                <button
                  onClick={handleCloseModal} //Close btn
                  type="button"
                  className="rounded bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit} //Done btn
                  type="button"
                  className="rounded bg-green-800 px-4 py-2 text-sm font-medium text-white hover:bg-green-900"
                >
                  Done
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecipes;
