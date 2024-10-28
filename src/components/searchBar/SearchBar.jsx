import { Search } from "lucide-react";
import "./searchBar.scss";
import { useState } from "react";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchTypes = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchTypes(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
        />
        <button>
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
