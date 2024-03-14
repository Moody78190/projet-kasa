import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
     
        <main>
        <section className='Not_Found'>   
          <h1 className='Not_Found-title'>404</h1>
          <h2 className='Not_Found-alert'>Oups! La page que vous demandez n'existe pas..</h2>
          <p className='Not_Found-link'> <Link to="/">Retournez à la page d'accueil</Link>.</p>
         
      </section>
     </main>
  );
}

export default NotFoundPage;