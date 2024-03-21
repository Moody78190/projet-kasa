import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import { useParams } from 'react-router-dom';
import Data from '../../Assets/Data/data.json';
import Error404 from '../../components/Error404';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Host from '../../components/Host'; 


function Rentals() {
  
  const { id } = useParams();
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const slideData = Data.find(item => item.id === id);
    setData(slideData);
  }, [id]);

  if (!data) {
    return <Error404 />;
  }
 
  return (
    <div>
      {data && <Slider data={data} />}
      <section>
      <Collapse menus={[
          { title: 'Description', content: data.description },
          { title: 'Équipements', content: data.equipments }
        ]} customClass="about-collapse" />
      </section>
      <section>
        <Tags currentSlide={data} />
      </section>
      <section>
        <Rating currentSlide={data} /> 
      </section>
      <Host currentSlide={data} /> 
      <section>
       

      </section>
    </div>
  );
}

export default Rentals;
