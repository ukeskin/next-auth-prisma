import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import Avatar from "./Avatar";

const NavBar = () => {
  const { data, status } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggle}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">LOGO</div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="/private-page"
                >
                  Private Page
                </Link>
              </div>
            </div>
          </div>
          {status === "authenticated" && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={() => toggleProfileMenu()}
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    ariaExpanded="false"
                    ariaHaspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Avatar user={data.user} />
                  </button>
                </div>
                {isProfileMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    ariaOrientation="vertical"
                    ariaLabelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <button
                      className="block px-4 py-2 text-sm text-red-700 w-full"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {status === "unauthenticated" && (
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="/sign-in"
                >
                  Sign in
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
              href="/private-page"
            >
              Private Page
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
