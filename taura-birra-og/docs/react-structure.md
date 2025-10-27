# React Project Structure

## Folder Organization

```
taura-birra-react/
├── public/
│ ├── fonts/
│ │ ├── Hudson-NY-Serif.otf
│ │ └── Spartan.ttf
│ ├── images/
│ │ ├── header.png
│ │ ├── bar-bg.png
│ │ ├── beers/
│ │ │ ├── dorada-pampeana.jpg
│ │ │ ├── ginger-ale.jpg
│ │ │ ├── ipa.jpg
│ │ │ ├── ira.jpg
│ │ │ └── stout.jpg
│ │ └── icons/
│ │ ├── social-fb.svg
│ │ └── social-ig.svg
│ └── separators/
│ ├── barley-1.svg
│ └── barley-2.svg
│
├── src/
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ │ ├── Button.jsx
│ │ │ │ ├── Button.module.css
│ │ │ │ └── Button.test.jsx
│ │ │ ├── Separator/
│ │ │ │ ├── Separator.jsx
│ │ │ │ └── Separator.module.css
│ │ │ └── Section/
│ │ │ ├── Section.jsx
│ │ │ └── Section.module.css
│ │ │
│ │ ├── layout/
│ │ │ ├── Navbar/
│ │ │ │ ├── Navbar.jsx
│ │ │ │ ├── Navbar.module.css
│ │ │ │ └── NavLink.jsx
│ │ │ ├── Footer/
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── Footer.module.css
│ │ │ │ ├── FooterColumn.jsx
│ │ │ │ └── SocialLinks.jsx
│ │ │ └── Hero/
│ │ │ ├── Hero.jsx
│ │ │ └── Hero.module.css
│ │ │
│ │ ├── features/
│ │ │ ├── AgeGate/
│ │ │ │ ├── AgeGate.jsx
│ │ │ │ ├── AgeGate.module.css
│ │ │ │ └── useAgeVerification.js (custom hook)
│ │ │ ├── Beers/
│ │ │ │ ├── BeersSection.jsx
│ │ │ │ ├── BeerCard.jsx
│ │ │ │ ├── BeerCard.module.css
│ │ │ │ ├── ComparisonTable.jsx
│ │ │ │ └── ComparisonTable.module.css
│ │ │ ├── Contact/
│ │ │ │ ├── ContactSection.jsx
│ │ │ │ ├── ContactForm.jsx
│ │ │ │ ├── Map.jsx
│ │ │ │ └── Contact.module.css
│ │ │ └── Bar/
│ │ │ ├── BarSection.jsx
│ │ │ └── BarSection.module.css
│ │ │
│ │ └── pages/
│ │ └── HomePage/
│ │ ├── HomePage.jsx
│ │ └── sections/
│ │ ├── AboutSection.jsx
│ │ └── About.module.css
│ │
│ ├── hooks/
│ │ ├── useLocalStorage.js
│ │ ├── useScrollSpy.js (highlight active nav link)
│ │ └── useFocusTrap.js (for modals)
│ │
│ ├── context/
│ │ └── AgeVerificationContext.jsx
│ │
│ ├── utils/
│ │ ├── constants.js (beer data, colors, etc.)
│ │ └── accessibility.js (focus management helpers)
│ │
│ ├── styles/
│ │ ├── global.css
│ │ ├── variables.css (CSS custom properties)
│ │ └── typography.css
│ │
│ ├── services/
│ │ └── api.js (future CMS integration)
│ │
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
│
├── .eslintrc.cjs
├── .prettierrc
├── vite.config.js
├── package.json
└── README.md
```


## Data Structure (constants.js)

```javascript
export const BEERS = [
  {
    id: 'dorada-pampeana',
    name: 'Dorada Pampeana',
    style: 'Blonde Ale',
    abv: 5,
    ibu: 18,
    color: '#fae57f',
    colorName: 'dp',
    image: '/images/beers/dorada-pampeana.jpg',
    description: 'Cerveza dorada de baja amarguitud con leve dulzor final.',
    awards: ['🥉 Medalla de Bronce - Concurso A', '🥉 Medalla de Bronce - Concurso B'],
    altText: 'Vaso de cerveza Dorada Pampeana artesanal de color dorado claro'
  },
  // ... other beers
];

export const COLORS = {
  primary: {
    dark: '#221a14',
    medium: '#3f2b1d',
    light: '#ffe4b5',
    accent: '#ffe8c1'
  },
  hover: '#ffd07d'
};
```

## Component Patterns

Accessibility-First Pattern

```javascript
// Every component includes:
export const BeerCard = ({ beer, index }) => {
  return (
    <article 
      className={styles.card}
      aria-labelledby={`beer-${beer.id}-title`}
      tabIndex="0"
    >
      <img 
        src={beer.image} 
        alt={beer.altText}
        loading="lazy"
      />
      <h3 id={`beer-${beer.id}-title`}>{beer.name}</h3>
      {/* ... */}
    </article>
  );
};
```

CSS Modules Pattern

```css
/* BeerCard.module.css */
.card {
  filter: grayscale(70%);
  transition: filter 0.5s ease;
}

.card:hover,
.card:focus-within {
  filter: grayscale(0%);
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}
```