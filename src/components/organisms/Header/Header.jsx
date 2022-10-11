import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";
import './Header.scss';

export const Header = () => {
    const [types, setTypes] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const url = 'https://api.magicthegathering.io/v1/types';
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setTypes(data.types);
            });
    }, [location]);

    const getLinkClassName = ({ isActive }) => classnames('header__link', { header__link_active: isActive });

    return <header className="header">
        <NavLink to="/home" 
            className={getLinkClassName}
        >
            All Cards
        </NavLink>
        {
            types.slice(0, 5).map(
                (type, index) => 
                    <NavLink 
                        to={`/types/${type}`} 
                        key={index}
                        className={getLinkClassName}
                    >
                        {type}
                    </NavLink>
        )}
    </header>;
};