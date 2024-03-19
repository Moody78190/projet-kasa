import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import { useParams } from 'react-router-dom';
import Data from '../../Assets/Data/data.json';
import Error404 from '../../components/Error404';
import Collapse from '../../components/Collapse';



function Rentals() {
  const menus = [
    { id: 'menu1', title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { id: 'menu2', title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  ];

  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(null);

  useEffect(() => {
    const slide = Data.findIndex(item => item.id === id);
    setCurrentSlide(slide);
  }, [id]);

  if (currentSlide === null) {
    return <Error404 />;
  }

  return (
    <div>
      {Data && <Slider data={Data} />}
      <section>
        <Collapse menus={menus} customClass="about-collapse" />
      </section>
      <section>
      
      </section>
    </div>
  );
}

export default Rentals;
