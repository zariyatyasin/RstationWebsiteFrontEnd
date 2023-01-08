import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../../Redux/UserReducer/UserSlice";

const ProfileDropDown = ({ currentUser }) => {
  const [avater, setAvater] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className=" relative">
      <button
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-prange-600 dark:hover:text-orange-500 md:mr-0   dark:focus:ring-gray-700 dark:text-orange-600"
        type="button"
        onClick={() => setAvater(!avater)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 mr-2 object-cover rounded-full"
          src="/image/bikeBG/bg.jpg"
          alt="user photo"
        />
        {currentUser.username}
        <svg
          className="w-4 h-4 mx-1.5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownAvatarName"
        className={`z-10 ${
          avater && "hidden"
        } absolute top-10 h-46  right-8  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">{currentUser.email}</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <Link
              to={"/profile/userprofile"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Profile
            </Link>
          </li>
          <li>
            <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </div>
          </li>
          <li>
            <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </div>
          </li>
        </ul>
        <div className="py-1">
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={() => dispatch(userLogOut())}
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
