/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  // console.log("🚀 ~ Card ~ item:", item);

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgontainer">
        <img src={item.images[0]} alt="" />
        <p>{item.address}</p>
      </Link>
      <div className="textContainer">
        hi
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
      </div>
    </div>
  );
}

export default Card;
