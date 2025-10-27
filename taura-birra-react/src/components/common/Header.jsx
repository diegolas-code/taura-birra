import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`header ${isScrolled ? 'header--scrolled' : ''}`}
            role="banner"
        >
            <div className="header__container">
                <div className="header__logo">
                    <a href="#home" aria-label="Taura Birra - Ir al inicio">
                        <img
                            src="/logo.png"
                            alt="Taura Birra Logo"
                            width="120"
                            height="60"
                        />
                    </a>
                </div>

                <button
                    className="header__menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="main-navigation"
                    aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <span className="header__menu-icon" aria-hidden="true">
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </span>
                </button>

                <Navigation
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>
        </header>
    );
};

export default Header;