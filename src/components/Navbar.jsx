import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  //state to control toggle menu
  const [isOpen, setIsOpen] = useState(false);
  //fb to be called on button to change toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-zinc-50 shadow border-0">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          to={"/"}
          className="block text-green-700 transition hover:text-green-600"
        >
          <span className="flex items-center gap-2 text-lg font-semibold">
            <img width={"40px"} src="./icon.png" alt="recipe icon" />
            FlavorBook
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Desktop Menu */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <Link
                  to={"/"}
                  className="text-zinc-700 transition hover:text-zinc-600"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  to={"/recipes"}
                  className="text-zinc-700 transition hover:text-zinc-600"
                >
                  {" "}
                  All Recipes{" "}
                </Link>
              </li>

              <li>
                <Link
                  to={"/add-recipes"}
                  className="text-zinc-700 transition hover:text-zinc-600"
                >
                  {" "}
                  Add Recipes{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-green-600 shadow border-0 px-5 py-2.5 text-md font-medium text-white transition hover:bg-green-700"
                to={"/"}
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-zinc-50 shadow border-0 px-5 py-2.5 text-md font-medium text-green-600 transition hover:text-green-600/75 sm:block"
                to={"/"}
              >
                Register
              </Link>
            </div>
            <div className="relative md:hidden">
              <button
                onClick={toggleMenu}
                className="block rounded-sm bg-zinc-100 shadow border-0 p-2.5 text-zinc-600 transition hover:text-zinc-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* Mobile Menu */}
              {isOpen && (
                <nav aria-label="Global" className="absolute right-0 mt-4">
                  <ul className="absolute right-0 mt-2 w-38 rounded-md bg-zinc-50 shadow-md z-50 p-4">
                    <li>
                      <Link
                        to={"/"}
                        onClick={() => setIsOpen(false)} 
                        className="text-zinc-500 transition hover:text-zinc-500/75"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/recipes"}
                        onClick={() => setIsOpen(false)} 
                        className="text-zinc-500 transition hover:text-zinc-500/75"
                      >
                        {" "}
                        All Recipes{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/add-recipes"}
                        onClick={() => setIsOpen(false)} 
                        className="text-zinc-500 transition hover:text-zinc-500/75"
                      >
                        {" "}
                        Add Recipes{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/favourites"}
                        onClick={() => setIsOpen(false)} 
                        className="text-zinc-500 transition hover:text-zinc-500/75"
                      >
                        {" "}
                        Favourites{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar