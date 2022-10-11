import { useLoaderData } from "react-router-dom";
import { Card, CardsList } from "../..";

export async function loader() {
    const url = 'https://api.magicthegathering.io/v1/cards?contains=imageUrl';
    const response = await fetch(url)
    const json = await response.json();
    return json.cards;
}

export const HomePage = () => {
    const cards = useLoaderData();
    
    return <div className="home">
        <div className="container">
            <CardsList cards={cards}/>
        </div>
    </div>
};