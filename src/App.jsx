import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddRecipes from './pages/AddRecipes'
import AllRecipes from './pages/AllRecipes'
import RecipeDetails from './pages/RecipeDetails'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipes" element={<AddRecipes />} />
        <Route path="/edit-recipe/:id" element={<AddRecipes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
