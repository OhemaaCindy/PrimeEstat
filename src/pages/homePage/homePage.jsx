import SearchBar from "../../components/searchBar/SearchBar";
import "./homPage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get your Dream Place</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            tenetur ratione rerum praesentium, non modi quis, deserunt
            consectetur unde eius architecto ducimus sapiente? Animi quibusdam
            fuga ex? Commodi, sit non!
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/14/21/53/building-6467081_1280.jpg"
          alt="bg"
        />
      </div>
    </div>
  );
}
