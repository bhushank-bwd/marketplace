import React, { useState } from "react";
import "boxicons";
const Header = () => {
  const [userDropDown, setuserDropDown] = useState(false);
  return (
    <div className="flex justify-between p-2 h-14 bg-gray-800">
      <div className="text-white flex">
        <img
          src="https://demo.silocloud.org/assets/cloud/images/marketplace//silo-cloud.svg"
          alt=""
          className="h-10 p-1 mx-2 cursor-pointer"
        />
        <input
          type="text"
          className="bg-white rounded-s-sm outline-none text-black ps-1 w-96 ms-4"
          placeholder="search for products here"
        />
        <button className="bg-red-700 rounded-e-sm p-2">
          <box-icon name="search-alt-2" color="white"></box-icon>
        </button>
      </div>
      <div className="text-white flex">
        <span className="mx-1 p-1 cursor-pointer">Become seller</span>
        <div className="mx-1 p-1 relative">
          <span className="p-4">
            <box-icon name="cart" color="white"></box-icon>
          </span>
          <span className="absolute -top-1 right-3 rounded-[50%] bg-red-700 w-5 h-5 text-sm align-middle text-center">
            0
          </span>
        </div>
        <div
          className="relative inline-block text-left mx-1 p-1 cursor-pointer"
          onClick={() => setuserDropDown(!userDropDown)}
        >
          <div>
            <box-icon name="user-detail" type="solid" color="white"></box-icon>
          </div>
          {userDropDown && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
