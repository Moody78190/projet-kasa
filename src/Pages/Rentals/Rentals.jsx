import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import { useParams } from "react-router-dom";
import Data from "../../Assets/Data/data.json";
import Error404 from "../../components/Error404";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";

function Rentals() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const slideData = Data.find((item) => item.id === id);
    setData(slideData);
  }, [id]);

  if (!data) {
    return <Error404 />;
  }

  return (
    <section id="lodging">
      <Slider data={data} />
      <div className="container">
        <div className="header">
          <div className="title">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <Tags tags={data.tags} />
          </div>
          <div className="sub-header">
            <div className="host">
              <span>{data.host.name}</span>
              <img src={data.host.picture} alt={data.host.name} />
            </div>
            <Rating rating={data.rating} />
          </div>
        </div>
        <div className="dropdowns">
          <Collapse
            item={{ title: "Description", content: data.description }}
          />
          <Collapse item={{ title: "Équipements", content: data.equipments }} />
        </div>
      </div>
    </section>
  );
}

export default Rentals;
