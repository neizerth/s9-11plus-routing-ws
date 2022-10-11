import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardsList } from "../..";

export const HomePage = () => {
    const [cards, setCards] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const url = 'https://api.magicthegathering.io/v1/cards?contains=imageUrl';
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setCards(data.cards);
            });
    }, [location]);

    return <div className="home">
        <CardsList cards={cards}/>
    </div>
};