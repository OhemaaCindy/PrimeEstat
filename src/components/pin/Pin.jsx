/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "lucide-react";

function Pin({ item }) {
  console.log("🚀 ~ Pin ~ item:", item);

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            {/* <p>{item.title}</p> */}
            <span>{item.bedroom}bedroom</span>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
