import React, { useState } from 'react';
import'../Assets/Styles/main.scss';

const Collapse = () => {
    const [menuStates, setMenuStates] = useState({
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false
    });
  
    const toggleMenu = (menu) => {
      setMenuStates({
        ...menuStates,
        [menu]: !menuStates[menu]
      });
    };
  
    return (
      <main>
      <div className="Collapse-container">
        <button className="collapsible" onClick={() => toggleMenu('menu1')}>Fiabilité</button>
        <div className={menuStates.menu1 ? 'content active' : 'content'}>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements,et
            toutes les informations sont regulièrement vérifiées  par nos équipes.
          </p>
        </div>
  
        <button className="collapsible" onClick={() => toggleMenu('menu2')}>Respect </button>
        <div className={menuStates.menu2 ? 'content active' : 'content'}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement
            discriminatoire ou de perturbation du vosinage entrainera une exclusion de notre plateforme.    </p>
        </div>
  
        <button className="collapsible" onClick={() => toggleMenu('menu3')}>Service</button>
        <div className={menuStates.menu3 ? 'content active' : 'content'}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement
            discriminatoire ou de perturbation du vosinage entrainera une exclusion de notre plateforme.</p>
        </div>
  
        <button className="collapsible" onClick={() => toggleMenu('menu4')}>Sécurité</button>
        <div className={menuStates.menu4 ? 'content active' : 'content'}>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs,chaque logement
            correspond aux critères établis par nos services. En laissant une note aussi bien à l'hote qu'au 
            locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.
          </p>
        </div>
      </div>
      </main>
    );
  };
  
  export default Collapse;
