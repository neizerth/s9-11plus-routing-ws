import { useEffect, useState } from "react";
import { Card, CardsList } from "../..";

export const HomePage = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const url = 'https://api.magicthegathering.io/v1/cards?contains=imageUrl';
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setCards(data.cards);
            });
    }, []);

    return <div className="home">
        <CardsList cards={cards}/>
    </div>
};