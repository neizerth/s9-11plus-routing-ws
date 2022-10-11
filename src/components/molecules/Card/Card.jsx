import classNames from "classnames";
import "./Card.scss";

export const Card = ({ name, imageUrl, ...props }) => {
    const className = classNames('card__image', props.className);
    // console.log({props})
    return <figure className="card">
        {imageUrl && <img src={imageUrl} className={className} alt="" />}
        <figcaption className="card__title">{name}</figcaption>
    </figure>;
};