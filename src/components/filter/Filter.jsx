import { Search } from "lucide-react";
import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="top">
        <h1>
          Search Results for <b>London</b>
        </h1>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="proprty" id="property">
            <option value="any">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">MinPrice</label>
          <input type="text" id="minPrice" name="minPrice" placeholder="any" />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>

        <div className="btn">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Filter;
