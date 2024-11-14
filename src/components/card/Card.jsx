/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";
import {
  Bath,
  BedDouble,
  MapPinHouse,
  MessageSquareMore,
  Save,
} from "lucide-react";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <MapPinHouse
            style={{ width: "16px", height: "16px", color: "#444" }}
          />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <BedDouble
                style={{ width: "16px", height: "16px", color: "#444" }}
              />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <Bath style={{ width: "16px", height: "16px", color: "#444" }} />
              <span>{item.bathroom}bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <Save style={{ width: "16px", height: "16px", color: "#444" }} />
            </div>
            <div className="icon">
              <MessageSquareMore
                style={{ width: "16px", height: "16px", color: "#444" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
