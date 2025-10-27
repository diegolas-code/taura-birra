// src/utils/imageConfig.js

// URLs de placeholders temporales
const PLACEHOLDER_BASE = 'https://placehold.co';

export const images = {
    logo: '/logo.png', // Coloca tu logo en public/logo.png

    // Hero
    hero: {
        background: `${PLACEHOLDER_BASE}/1920x1080/8B4513/FFFFFF?text=Hero+Background`,
    },

    // Cervezas
    beers: {
        ipa: `${PLACEHOLDER_BASE}/400x600/D2691E/FFFFFF?text=IPA+Taura`,
        stout: `${PLACEHOLDER_BASE}/400x600/2C1810/FFFFFF?text=Stout+Imperial`,
        pale: `${PLACEHOLDER_BASE}/400x600/FFD700/2C1810?text=Pale+Ale`,
        porter: `${PLACEHOLDER_BASE}/400x600/654321/FFFFFF?text=Porter`,
        lager: `${PLACEHOLDER_BASE}/400x600/F4A460/2C1810?text=Lager`,
        wheat: `${PLACEHOLDER_BASE}/400x600/FFF8DC/8B4513?text=Wheat`,
    },

    // Sobre Nosotros
    about: {
        main: `${PLACEHOLDER_BASE}/800x600/8B4513/FFFFFF?text=Cerveceria`,
    },

    // Bar
    bar: {
        main: `${PLACEHOLDER_BASE}/800x500/654321/FFFFFF?text=Bar+Interior`,
        choperas: `${PLACEHOLDER_BASE}/400x300/8B4513/FFFFFF?text=Choperas`,
        terraza: `${PLACEHOLDER_BASE}/400x300/A0522D/FFFFFF?text=Terraza`,
        evento: `${PLACEHOLDER_BASE}/400x300/D2691E/FFFFFF?text=Evento`,
        comida: `${PLACEHOLDER_BASE}/400x300/FFD700/2C1810?text=Comida`,
    },
};

// Función helper para obtener imagen con fallback
export const getImage = (category, name) => {
    try {
        return images[category]?.[name] || images[category] || '';
    } catch (error) {
        console.error(`Imagen no encontrada: ${category}.${name}`);
        return `${PLACEHOLDER_BASE}/400x300/CCCCCC/333333?text=Sin+Imagen`;
    }
};