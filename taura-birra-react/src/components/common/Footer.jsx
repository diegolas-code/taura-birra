import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__container">
                <div className="footer__section">
                    <h3 className="footer__title">Taura Birra</h3>
                    <p className="footer__description">
                        Cerveza artesanal con alma argentina
                    </p>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Contacto</h3>
                    <address className="footer__address">
                        <p>
                            <a href="tel:+5491234567890" className="footer__link">
                                +54 9 123 456 7890
                            </a>
                        </p>
                        <p>
                            <a href="mailto:info@taurabirra.com" className="footer__link">
                                info@taurabirra.com
                            </a>
                        </p>
                    </address>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Redes Sociales</h3>
                    <nav aria-label="Redes sociales">
                        <ul className="footer__social" role="list">
                            <li>
                                <a
                                    href="https://facebook.com/taurabirra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label="Facebook (se abre en nueva pestaña)"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/taurabirra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label="Instagram (se abre en nueva pestaña)"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; {currentYear} Taura Birra. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;