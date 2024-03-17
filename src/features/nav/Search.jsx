import { useGetProductSearchMutation } from "@/store/features/product/productApi";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

let keyCounter = 0; // Counter for generating unique keys

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [getProductSearch, { data, isLoading }] = useGetProductSearchMutation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let delaySearch;
    if (searchTerm) {
      delaySearch = setTimeout(() => {
        getProductSearch(searchTerm);
      }, 1000);
    }

    return () => clearTimeout(delaySearch);
  }, [searchTerm, getProductSearch]);

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <form className="md:block mb-4 md:mb-0">
      <div className="relative" ref={dropdownRef}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="search"
          className="outline-none block w-full p-2 pl-10 text-sm gray-500-text-gray-500 bg-gray-100 rounded-2xl focus:border-0"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleInputChange}
          required
        />

        {isLoading || suggestions?.length > 0 ? (
          <ul
            key={`search-suggestions-${keyCounter++}`} // Generate unique key
            className="absolute left-0 mt-2 w-full md:w-[200%] bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          >
            {isLoading ? (
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left">
                Loading...
              </li>
            ) : (
              suggestions?.map((suggestion) => (
                <li
                  key={suggestion._id} // Use index as key since we don't have unique IDs
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                >
                  <Link to={`/product/${suggestion._id}`}>
                    {suggestion.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Search;
