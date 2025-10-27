import './Nosotros.css';

const Nosotros = () => {
    return (
        <section
            id="nosotros"
            className="nosotros"
            aria-labelledby="nosotros-title"
        >
            <div className="nosotros__container">
                <div className="nosotros__content">
                    <h2 id="nosotros-title" className="nosotros__title">
                        Sobre Nosotros
                    </h2>

                    <div className="nosotros__text">
                        <p className="nosotros__paragraph nosotros__paragraph--highlight">
                            Taura Birra nace de la pasión por la cerveza artesanal y el deseo
                            de compartir sabores únicos con nuestra comunidad.
                        </p>

                        <p className="nosotros__paragraph">
                            Desde nuestros inicios, nos hemos dedicado a crear cervezas de
                            calidad premium, utilizando ingredientes seleccionados y técnicas
                            artesanales que resaltan lo mejor de cada estilo.
                        </p>

                        <p className="nosotros__paragraph">
                            Cada lote es elaborado con dedicación, cuidando cada detalle del
                            proceso de fermentación para lograr el balance perfecto entre sabor,
                            aroma y cuerpo. Nuestra filosofía es simple: cerveza honesta, sin
                            atajos, con alma argentina.
                        </p>
                    </div>

                    <div className="nosotros__features">
                        <div className="nosotros__feature">
                            <div className="nosotros__feature-icon" aria-hidden="true">
                                🍺
                            </div>
                            <h3 className="nosotros__feature-title">Artesanal</h3>
                            <p className="nosotros__feature-description">
                                Elaborada con métodos tradicionales y pasión por el detalle
                            </p>
                        </div>

                        <div className="nosotros__feature">
                            <div className="nosotros__feature-icon" aria-hidden="true">
                                🌾
                            </div>
                            <h3 className="nosotros__feature-title">Ingredientes Premium</h3>
                            <p className="nosotros__feature-description">
                                Seleccionamos los mejores maltas y lúpulos para cada receta
                            </p>
                        </div>

                        <div className="nosotros__feature">
                            <div className="nosotros__feature-icon" aria-hidden="true">
                                ❤️
                            </div>
                            <h3 className="nosotros__feature-title">Con Alma</h3>
                            <p className="nosotros__feature-description">
                                Cada cerveza refleja nuestra identidad y compromiso
                            </p>
                        </div>
                    </div>
                </div>

                <div className="nosotros__image">
                    <img
                        src="/images/nosotros/cerveceria.jpg"
                        alt="Interior de la cervecería Taura Birra mostrando el proceso artesanal"
                        loading="lazy"
                    />
                    <div className="nosotros__image-overlay">
                        <p className="nosotros__image-text">
                            Elaborando cerveza con pasión desde 2020
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;