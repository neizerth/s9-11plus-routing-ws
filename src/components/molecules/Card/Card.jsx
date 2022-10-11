import classNames from "classnames";
import "./Card.scss";

export const Card = ({ name, imageUrl, ...props }) => {
    const className = classNames('card', props.className);
    // console.log({props})
    return <figure className={className}>
        {imageUrl && <img src={imageUrl} className="card__image" alt="" />}
        <figcaption className="card__title">{name}</figcaption>
    </figure>;
};