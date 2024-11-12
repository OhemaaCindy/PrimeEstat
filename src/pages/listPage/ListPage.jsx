import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import "./listPage.scss";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

export const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => {
            // console.log("🚀 ~ {data.map ~ item:", item);

            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};
