import BeerList from '../components/sections/BeerList';
import Nosotros from '../components/sections/Nosotros';
import Bar from '../components/sections/Bar';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section id="home" className="hero" aria-labelledby="hero-title">
                <div className="hero__content">
                    <h1 id="hero-title" className="hero__title">
                        Taura Birra
                    </h1>
                    <p className="hero__subtitle">
                        Cerveza artesanal con alma argentina
                    </p>
                </div>
            </section>

            <Nosotros />
            <BeerList />
            <Bar />
        </div>
    );
};

export default Home;