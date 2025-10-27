import { useEffect, useRef } from 'react';
import './Navigation.css';

const Navigation = ({ isOpen, onClose }) => {
    const navRef = useRef(null);
    const firstFocusableRef = useRef(null);

    const navItems = [
        { id: 'home', label: 'Inicio', href: '#home' },
        { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
        { id: 'cervezas', label: 'Cervezas', href: '#cervezas' },
        { id: 'bar', label: 'El Bar', href: '#bar' },
        { id: 'contacto', label: 'Contacto', href: '#contacto' }
    ];

    useEffect(() => {
        if (isOpen && firstFocusableRef.current) {
            firstFocusableRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            targetElement.focus();
        }

        onClose();
    };

    return (
        <nav
            ref={navRef}
            id="main-navigation"
            className={`navigation ${isOpen ? 'navigation--open' : ''}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <ul className="navigation__list" role="list">
                {navItems.map((item, index) => (
                    <li key={item.id} className="navigation__item">
                        <a
                            ref={index === 0 ? firstFocusableRef : null}
                            href={item.href}
                            className="navigation__link"
                            onClick={handleClick}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;