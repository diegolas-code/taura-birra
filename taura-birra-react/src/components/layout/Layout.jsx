import { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AgeVerification from '../features/AgeVerification';
import './Layout.css';

const Layout = ({ children }) => {
    const [isAgeVerified, setIsAgeVerified] = useState(
        localStorage.getItem('ageVerified') === 'true'
    );

    const handleAgeVerification = (verified) => {
        setIsAgeVerified(verified);
        if (verified) {
            localStorage.setItem('ageVerified', 'true');
        }
    };

    if (!isAgeVerified) {
        return <AgeVerification onVerify={handleAgeVerification} />;
    }

    return (
        <div className="layout">
            <a href="#main-content" className="skip-link">
                Saltar al contenido principal
            </a>
            <Header />
            <main id="main-content" tabIndex="-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;