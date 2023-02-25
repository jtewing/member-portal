import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { env } from "process";
import { string } from "zod";

// const MAINSITE: String = MAINSITE;

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-[#aaaaaa] px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* <a href={MAINSITE} className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RETURN TO MAIN SITE
          </span>
        </a> */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-[#aaaaaa] p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            {/* <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            <li>
              <Auth />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Auth: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <p className="text-center text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name} | </span>}
      </p>
      <button
        className="rounded-full bg-blue-400 px-4 py-2 font-semibold text-black no-underline transition hover:bg-blue-500"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
