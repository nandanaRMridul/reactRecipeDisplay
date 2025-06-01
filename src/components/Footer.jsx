import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-50">
      <div className="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8 lg:pt-10">
        <div className="absolute end-4 top-2 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-green-600 p-2 text-white shadow-sm transition hover:bg-green-500 sm:p-3 lg:p-4"
            href="#"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="flex mx-5 mt-6 max-w-lg text-center gap-2">
            <img
              style={{ width: "50px", height: "50px" }}
              src="/icon.png"
              alt=""
            />
            <p className=" leading-relaxed text-zinc-500 lg:text-justify">
              FlavorBook is more than just a recipe app — it's your personal
              cookbook, memory box, and creativity booster all in one. We're on
              a mission to turn everyday cooking into a flavorful adventure.
            </p>
          </div>

          <ul className="mt-0 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-zinc-700 transition hover:text-zinc-700/75"
                href="#"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-zinc-700 transition hover:text-zinc-700/75"
                href="#"
              >
                {" "}
                Services{" "}
              </a>
            </li>

            <li>
              <a
                className="text-zinc-700 transition hover:text-zinc-700/75"
                href="#"
              >
                {" "}
                Projects{" "}
              </a>
            </li>

            <li>
              <a
                className="text-zinc-700 transition hover:text-zinc-700/75"
                href="#"
              >
                {" "}
                Blog{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500 lg:text-right">
          Copyright &copy; FlavorBook 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer