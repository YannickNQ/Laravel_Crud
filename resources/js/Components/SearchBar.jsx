import React, {} from "react";

function SearchBar ({ placeholder, data }){
    return (
        <div className="w-6/12 flex items-center">
            <div className="flex w-full space-x-2">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-gray-500 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder={placeholder}
                />
                <button className="px-4 text-white bg-gray-800 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}


export default SearchBar