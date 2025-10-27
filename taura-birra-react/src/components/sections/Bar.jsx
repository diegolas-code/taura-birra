import './Bar.css';

const Bar = () => {
    const schedule = [
        { day: 'Lunes a Miércoles', hours: 'Cerrado' },
        { day: 'Jueves y Viernes', hours: '18:00 - 01:00' },
        { day: 'Sábados', hours: '12:00 - 02:00' },
        { day: 'Domingos', hours: '12:00 - 00:00' }
    ];

    const amenities = [
        {
            icon: '🍺',
            title: 'Choperas',
            description: '8 líneas de cerveza tirada rotativa'
        },
        {
            icon: '🎵',
            title: 'Música en Vivo',
            description: 'Shows todos los fines de semana'
        },
        {
            icon: '🍕',
            title: 'Gastronomía',
            description: 'Menú pensado para maridar con cerveza'
        },
        {
            icon: '📺',
            title: 'Pantallas',
            description: 'Para disfrutar eventos deportivos'
        },
        {
            icon: '♿',
            title: 'Accesible',
            description: 'Espacio adaptado para todos'
        },
        {
            icon: '🅿️',
            title: 'Estacionamiento',
            description: 'Zona de parking disponible'
        }
    ];

    return (
        <section
            id="bar"
            className="bar"
            aria-labelledby="bar-title"
        >
            <div className="bar__container">
                <h2 id="bar-title" className="bar__title">
                    Nuestro Bar
                </h2>

                <p className="bar__intro">
                    Un espacio único donde la cerveza artesanal se encuentra con la
                    buena compañía. Vení a disfrutar de nuestras cervezas tiradas
                    directamente desde nuestros tanques.
                </p>

                <div className="bar__content">
                    {/* Galería de imágenes */}
                    <div className="bar__gallery">
                        <div className="bar__gallery-main">
                            <img
                                src="/images/bar/interior-principal.jpg"
                                alt="Interior principal del bar Taura Birra con mesas y barra"
                                loading="lazy"
                            />
                        </div>
                        <div className="bar__gallery-grid">
                            <img
                                src="/images/bar/choperas.jpg"
                                alt="Sistema de choperas con nuestras cervezas tiradas"
                                loading="lazy"
                            />
                            <img
                                src="/images/bar/terraza.jpg"
                                alt="Terraza del bar con mesas al aire libre"
                                loading="lazy"
                            />
                            <img
                                src="/images/bar/evento.jpg"
                                alt="Evento de música en vivo en el bar"
                                loading="lazy"
                            />
                            <img
                                src="/images/bar/comida.jpg"
                                alt="Platos de comida para maridar con cerveza"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Información del bar */}
                    <div className="bar__info">
                        {/* Horarios */}
                        <div className="bar__info-section">
                            <h3 className="bar__info-title">
                                <span aria-hidden="true">🕐</span>
                                Horarios
                            </h3>
                            <ul className="bar__schedule" role="list">
                                {schedule.map((item, index) => (
                                    <li key={index} className="bar__schedule-item">
                                        <span className="bar__schedule-day">{item.day}</span>
                                        <span className="bar__schedule-hours">{item.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Servicios */}
                        <div className="bar__info-section">
                            <h3 className="bar__info-title">
                                <span aria-hidden="true">✨</span>
                                Servicios
                            </h3>
                            <div className="bar__amenities">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="bar__amenity">
                                        <span className="bar__amenity-icon" aria-hidden="true">
                                            {amenity.icon}
                                        </span>
                                        <div className="bar__amenity-content">
                                            <h4 className="bar__amenity-title">{amenity.title}</h4>
                                            <p className="bar__amenity-description">
                                                {amenity.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ubicación */}
                        <div className="bar__info-section">
                            <h3 className="bar__info-title">
                                <span aria-hidden="true">📍</span>
                                Ubicación
                            </h3>
                            <address className="bar__address">
                                <p className="bar__address-line">
                                    <strong>Dirección:</strong> Av. Cervecera 1234
                                </p>
                                <p className="bar__address-line">
                                    <strong>Barrio:</strong> Palermo, Buenos Aires
                                </p>
                                <p className="bar__address-line">
                                    <strong>Teléfono:</strong>
                                    <a href="tel:+5491123456789"> +54 9 11 2345 6789</a>
                                </p>
                            </address>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bar__map-link"
                            >
                                Ver en Google Maps
                                <span aria-hidden="true"> →</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bar;