import { useState } from 'react';
import './AgeVerification.css';

const AgeVerification = ({ onVerify }) => {
    const [error, setError] = useState('');

    const handleVerify = (isAdult) => {
        if (isAdult) {
            onVerify(true);
        } else {
            setError('Debes ser mayor de 18 años para acceder a este sitio.');
            setTimeout(() => {
                window.location.href = 'https://www.google.com';
            }, 2000);
        }
    };

    return (
        <div
            className="age-verification"
            role="dialog"
            aria-labelledby="age-verification-title"
            aria-describedby="age-verification-description"
            aria-modal="true"
        >
            <div className="age-verification__content">
                <h1 id="age-verification-title" className="age-verification__title">
                    Verificación de Edad
                </h1>
                <p id="age-verification-description" className="age-verification__description">
                    ¿Eres mayor de 18 años?
                </p>

                {error && (
                    <div
                        className="age-verification__error"
                        role="alert"
                        aria-live="assertive"
                    >
                        {error}
                    </div>
                )}

                <div className="age-verification__buttons">
                    <button
                        onClick={() => handleVerify(true)}
                        className="age-verification__button age-verification__button--yes"
                        autoFocus
                    >
                        Sí, soy mayor de 18
                    </button>
                    <button
                        onClick={() => handleVerify(false)}
                        className="age-verification__button age-verification__button--no"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;