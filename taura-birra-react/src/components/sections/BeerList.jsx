import BeerCard from './BeerCard';
import './BeerList.css';

const BeerList = () => {
    // Datos temporales - En etapa 3 vendrán del CMS
    const beers = [
        {
            id: 1,
            name: 'IPA Taura',
            type: 'India Pale Ale',
            description: 'Cerveza con intenso amargor y aroma a lúpulo',
            image: '../../assets/images/taura-ipa.jpg',
            abv: 6.5,
            ibu: 65
        },
        {
            id: 2,
            name: 'Stout Imperial',
            type: 'Imperial Stout',
            description: 'Cerveza negra con notas a café y chocolate',
            image: '../../images/taura-stout.jpg',
            abv: 9.0,
            ibu: 45
        }
        // Agregar más cervezas según tu sitio original
    ];

    return (
        <section
            id="cervezas"
            className="beer-list"
            aria-labelledby="beer-list-title"
        >
            <div className="beer-list__container">
                <h2 id="beer-list-title" className="beer-list__title">
                    Nuestras Cervezas
                </h2>

                <div className="beer-list__grid" role="list">
                    {beers.map((beer) => (
                        <BeerCard key={beer.id} beer={beer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeerList;