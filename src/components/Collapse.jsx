import React, { useState } from 'react';
import arrowTop from '../Assets/images/arrow_up.png';
import arrowDown from '../Assets/images/arrow_down.png'

const Collapse = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const description = (data) =>
    Array.isArray(data) ? (
      <p>
        {data.map((element) => (
          <span key={element}>
            {element}
            <br></br>
          </span>
        ))}
      </p>
    ) : (
      <p>{data}</p>
    )

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <span>{item.title}</span>
        <img
          src={isOpen ? arrowDown : arrowTop}
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? description(item.content) : ''}
    </div>
  )
}

export default Collapse