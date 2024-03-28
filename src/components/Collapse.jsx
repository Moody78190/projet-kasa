import React, { useState } from 'react';
import arrowTop from '../Assets/images/arrow_up.png';
import arrowDown from '../Assets/images/arrow_down.png';

const Collapse = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const description = (data) =>
    Array.isArray(data) ? (
      <ul>
        {data.map((element) => (
          <li key={element}>
            {element}
         </li>
        ))}
      </ul>
    ) : (
      <p>{data}</p>
    )

  return (
    <div className="dropdown-container">
      <div className="dropdown"onClick={() => setIsOpen(!isOpen)}>
        <h3>{item.title}</h3>
        <img className='arrow'
          src={isOpen ? arrowDown : arrowTop }
          alt="arrow"
          
          
        />
      </div>
      {isOpen ? description(item.content) : ''}
    </div>
  )
}

export default Collapse