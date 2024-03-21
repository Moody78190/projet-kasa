import React, { useState } from 'react';
import arrowTop from '../Assets/images/arrow_top.png';
import arrowDown from '../Assets/images/arrow_down.png'

// const Collapse = ({ menus, containerName = "Collapse-container", buttonClassName = "collapsible", buttonName }) => {
//   const [menuStates, setMenuStates] = useState(
//     Object.fromEntries(menus.map(menu => [menu.id, false]))
//   );

//   const toggleMenu = (menuId) => {
//     setMenuStates({
//       ...menuStates,
//       [menuId]: !menuStates[menuId]
//     });
//   };

//   return (
//     <main>
//       <div className={containerName}>
//         {menus.map((menu, index) => (
//           <div key={`${containerName}-${menu.id}-${index}`}>
//             <button className={buttonClassName}>
//               {buttonName ? buttonName : menu.title}
//               <img className='arrow_top' onClick={() => toggleMenu(menu.id)} src={arrow_top} alt="arrow_top" style={{ transform: menuStates[menu.id] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
//             </button>
//             <div className={menuStates[menu.id] ? 'content active' : 'content'}>
//               <p>{menu.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };


// export default Collapse;

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
          src={isOpen ? arrowTop : arrowDown}
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? description(item.content) : ''}
    </div>
  )
}

export default Collapse