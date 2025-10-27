import { images } from '../../utils/imageConfig';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <section
            id="nosotros"
            className="about"
            aria-labelledby="about-title"
        >
            <div className="about__container">
                <div className="about__content">
                    <h2 id="about-title" className="about__title">
                        Sobre Nosotros
                    </h2>

                    <div className="about__text">
                        <p className="about__paragraph about__paragraph--highlight">
                            Taura Birra nace de la pasión por la cerveza artesanal y el deseo
                            de compartir sabores únicos con nuestra comunidad.
                        </p>

                        <p className="about__paragraph">
                            Desde nuestros inicios, nos hemos dedicado a crear cervezas de
                            calidad premium, utilizando ingredientes seleccionados y técnicas
                            artesanales que resaltan lo mejor de cada estilo.
                        </p>

                        <p className="about__paragraph">
                            Cada lote es elaborado con dedicación, cuidando cada detalle del
                            proceso de fermentación para lograr el balance perfecto entre sabor,
                            aroma y cuerpo. Nuestra filosofía es simple: cerveza honesta, sin
                            atajos, con alma argentina.
                        </p>
                    </div>

                    <div className="about__features">
                        <div className="about__feature">
                            <div className="about__feature-icon" aria-hidden="true">
                                🍺
                            </div>
                            <h3 className="about__feature-title">Artesanal</h3>
                            <p className="about__feature-description">
                                Elaborada con métodos tradicionales y pasión por el detalle
                            </p>
                        </div>

                        <div className="about__feature">
                            <div className="about__feature-icon" aria-hidden="true">
                                🌾
                            </div>
                            <h3 className="about__feature-title">Ingredientes Premium</h3>
                            <p className="about__feature-description">
                                Seleccionamos los mejores maltas y lúpulos para cada receta
                            </p>
                        </div>

                        <div className="about__feature">
                            <div className="about__feature-icon" aria-hidden="true">
                                ❤️
                            </div>
                            <h3 className="about__feature-title">Con Alma</h3>
                            <p className="about__feature-description">
                                Cada cerveza refleja nuestra identidad y compromiso
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about__image">
                    <img
                        src={images.about.main}
                        alt="Interior de la cervecería Taura Birra mostrando el proceso artesanal"
                        loading="lazy"
                    />
                    <div className="about__image-overlay">
                        <p className="about__image-text">
                            Elaborando cerveza con pasión desde 2020
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;