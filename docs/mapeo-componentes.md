# Taura Birra - Component Analysis

## Current HTML Structure → React Components

### Navigation
- **Current:** `<nav>` with Bootstrap classes
- **React Component:** `<Navbar />` (reusable)
- **Props:** `links[]`, `logo`, `isFixed`

### Header/Hero
- **Current:** `<header>` with background image
- **React Component:** `<Hero />` 
- **Props:** `title`, `subtitle`, `backgroundImage`

### Main Sections
1. **Inicio** → `<HomePage />`
   - Reusable: `<Section />` wrapper

2. **Nosotros** → `<AboutSection />`
   - Reusable: `<TextBlock />`, `<Separator />`

3. **Cervezas** → `<BeersSection />`
   - Reusable: `<BeerCard />` (x5)
   - Reusable: `<ComparisonTable />`
   - Props per card: `{name, style, abv, ibu, image, description, awards}`

4. **Bar** → `<BarSection />`
   - Reusable: `<ImageTextOverlay />`

5. **Contacto** → `<ContactSection />`
   - Reusable: `<ContactForm />`
   - Reusable: `<Map />`

### Footer
- **Current:** Multiple `<div>` sections
- **React Components:** 
  - `<Footer />` (container)
  - `<FooterColumn />` (reusable)
  - `<SocialLinks />`

### Modals/Overlays
- **Current:** Age verification
- **React Component:** `<AgeGate />`
- **State:** localStorage + Context API

## Component Hierarchy

```
App
├── AgeGate (conditional)
├── Navbar
├── Hero
├── main
│ ├── HomePage
│ ├── AboutSection
│ ├── BeersSection
│ │ ├── BeerCard (x5)
│ │ └── ComparisonTable
│ ├── BarSection
│ └── ContactSection
│ ├── ContactForm
│ └── Map
└── Footer
├── FooterColumn (x3)
└── SocialLinks
```

## Dynamic Content (CMS candidates)

| Content Type | Fields | Priority |
|--------------|--------|----------|
| Beers | name, style, abv, ibu, color, description, image, awards | HIGH |
| About Text | title, paragraphs[], images[] | MEDIUM |
| Bar Info | schedule, address, reservationText | HIGH |
| Contact | phone, email, address, mapCoords | HIGH |
| Social Links | platform, url, icon | LOW |

## State Management Needs

- **Local State:** Form inputs, modal visibility, mobile menu
- **Context:** Age verification status, language (future i18n)
- **External:** CMS data (fetch on mount)