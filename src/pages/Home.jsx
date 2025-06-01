import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[url(assets/bg-img.jpg)] bg-cover bg-center bg-opacity-75 p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-zinc-800 mb-4">
          Welcome to <span className='text-green-700'>FlavorBook</span> 🍽️
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Your personal digital cookbook. Add, view, and manage your favorite
          recipes all in one cozy place!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/recipes"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            View Recipes
          </Link>
          <Link
            to="/add-recipes"
            className="bg-white border border-yellow-500 text-yellow-600 px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            Add New Recipe
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home