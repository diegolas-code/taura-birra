import './BeerCard.css';

const BeerCard = ({ beer }) => {
    const { name, type, description, image, abv, ibu } = beer;

    return (
        <article className="beer-card">
            <div className="beer-card__image-wrapper">
                <img
                    src={image}
                    alt={`Botella de ${name}`}
                    className="beer-card__image"
                    loading="lazy"
                />
            </div>

            <div className="beer-card__content">
                <h3 className="beer-card__name">{name}</h3>
                <p className="beer-card__type" aria-label={`Tipo: ${type}`}>
                    <span className="visually-hidden">Tipo: </span>
                    {type}
                </p>

                <p className="beer-card__description">{description}</p>

                <dl className="beer-card__specs">
                    <div className="beer-card__spec">
                        <dt>ABV</dt>
                        <dd>{abv}%</dd>
                    </div>
                    <div className="beer-card__spec">
                        <dt>IBU</dt>
                        <dd>{ibu}</dd>
                    </div>
                </dl>
            </div>
        </article>
    );
};

export default BeerCard;