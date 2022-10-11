import { Card } from "../Card/Card";
import "./CardsList.scss";

export const CardsList = ({ cards }) => {
    return <div className="cards-list">
        {
            cards.slice(0, 20).map(
                (card, index) => <Card {...card} key={index} className="cards-list__item"/>
            )
        }
    </div>
}