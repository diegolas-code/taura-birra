import BeerCard from './BeerCard';
import { images } from '../../utils/imageConfig';
import './BeerList.css';

const BeerList = () => {
    // Datos temporales - En etapa 3 vendrán del CMS
    const beers = [
        {
            id: 1,
            name: 'IPA Taura',
            type: 'India Pale Ale',
            description: 'Cerveza con intenso amargor y aroma a lúpulo. Notas cítricas y florales que explotan en cada sorbo.',
            image: images.beers.ipa,
            abv: 6.5,
            ibu: 65
        },
        {
            id: 2,
            name: 'Stout Imperial',
            type: 'Imperial Stout',
            description: 'Cerveza negra con notas a café y chocolate. Cuerpo robusto y final dulce.',
            image: images.beers.stout,
            abv: 9.0,
            ibu: 45
        },
        {
            id: 3,
            name: 'Pale Ale',
            type: 'American Pale Ale',
            description: 'Balance perfecto entre malta y lúpulo. Refrescante y aromática.',
            image: images.beers.pale,
            abv: 5.5,
            ibu: 40
        },
        {
            id: 4,
            name: 'Porter Ahumada',
            type: 'Smoked Porter',
            description: 'Cerveza oscura con toques ahumados y maltas tostadas.',
            image: images.beers.porter,
            abv: 6.0,
            ibu: 35
        },
        {
            id: 5,
            name: 'Golden Lager',
            type: 'Premium Lager',
            description: 'Cerveza dorada, suave y refrescante. Perfecta para cualquier momento.',
            image: images.beers.lager,
            abv: 4.8,
            ibu: 20
        },
        {
            id: 6,
            name: 'Wheat Beer',
            type: 'Hefeweizen',
            description: 'Cerveza de trigo con notas de banana y clavo de olor.',
            image: images.beers.wheat,
            abv: 5.2,
            ibu: 15
        }
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