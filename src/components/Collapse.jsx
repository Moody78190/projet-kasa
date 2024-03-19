import React, { useState } from 'react';
import'../Assets/Styles/main.scss';

const Collapse = ({ menus }) => {
    const [menuStates, setMenuStates] = useState(
        Object.fromEntries(menus.map(menu => [menu.id, false]))
    );

    const toggleMenu = (menuId) => {
        setMenuStates({
            ...menuStates,
            [menuId]: !menuStates[menuId]
        });
    };

    return (
        <main>
            <div className="Collapse-container">
                {menus.map(menu => (
                    <div key={menu.id}>
                        <button className="collapsible" onClick={() => toggleMenu(menu.id)}>{menu.title}</button>
                        <div className={menuStates[menu.id] ? 'content active' : 'content'}>
                            <p>{menu.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Collapse;
