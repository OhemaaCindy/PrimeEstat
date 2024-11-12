import "./singlePage.scss";
import Slider from "./../../components/slider/Slider";
import Map from "./../../components/map/Map";

import { singlePostData, userData } from "../../lib/dummydata";
import {
  Bath,
  BedDouble,
  Bus,
  ChefHat,
  HandCoins,
  MapPinHouse,
  MessageSquareText,
  PawPrint,
  Save,
  School,
  SquareArrowOutDownLeft,
  Swords,
} from "lucide-react";
// import Map from "../../components/map/Map";

const SinglePage = () => {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <MapPinHouse style={{ width: "16px", height: "16px" }} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <Swords
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter Responisble</p>
              </div>
            </div>

            <div className="feature">
              <PawPrint
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>

            <div className="feature">
              <HandCoins
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <SquareArrowOutDownLeft
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                }}
              />
              <span>80sqft</span>
            </div>

            <div className="size">
              <BedDouble
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                }}
              />
              <span>2 beds</span>
            </div>

            <div className="size">
              <Bath
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                }}
              />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <School
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#444",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>

              <div className="feature">
                <Bus
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#444",
                    backgroundColor: "rgba(254, 205, 81, 0.209)",
                  }}
                />
                <div className="featureText">
                  <span>Bus Stop</span>
                  <p>100m away</p>
                </div>
              </div>

              <div className="feature">
                <ChefHat
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#444",
                    backgroundColor: "rgba(254, 205, 81, 0.209)",
                  }}
                />
                <div className="featureText">
                  <span>Resturant</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <MessageSquareText
                style={{ width: "16px", height: "16px", color: "#444" }}
              />
              <p>Send a Message</p>
            </button>

            <button>
              <Save style={{ width: "16px", height: "16px", color: "#444" }} />
              <p>Save the Place</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
