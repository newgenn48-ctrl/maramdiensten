# Maram Diensten

Professionele website voor Maram Diensten - Snelle & Betrouwbare Koeriersdiensten in Nederland.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS 4
- Jest & React Testing Library

## Aan de slag

### Vereisten

- Node.js 18+ (LTS aanbevolen)
- npm

### Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Productie build

```bash
# Maak productie build
npm run build

# Start productie server
npm start
```

### Tests draaien

```bash
# Draai alle tests
npm test

# Draai tests in watch mode
npm run test:watch
```

## Projectstructuur

```
maram-diensten/
├── app/
│   ├── layout.tsx          # Root layout met SEO & structured data
│   ├── page.tsx             # Homepage (single-page)
│   ├── contact/
│   │   ├── page.tsx         # Contactpagina
│   │   └── actions.ts       # Server Actions voor formulier
│   ├── privacy/page.tsx     # Privacybeleid
│   └── voorwaarden/page.tsx # Algemene voorwaarden
├── components/
│   ├── Header.tsx           # Navigatie met scroll-functionaliteit
│   ├── Hero.tsx             # Hero sectie
│   ├── Services.tsx         # Diensten overzicht
│   ├── WhyUs.tsx            # Waarom Maram Diensten
│   ├── Workflow.tsx         # Werkwijze stappen
│   ├── Reviews.tsx          # Klantreviews
│   ├── CTASection.tsx       # Call-to-action sectie
│   ├── Footer.tsx           # Footer met contactinfo
│   └── ContactForm.tsx      # Contactformulier component
├── tests/unit/              # Unit tests
├── public/images/           # Afbeeldingen
└── styles/                  # CSS bestanden
```

## Features

- Single-page homepage met smooth scroll navigatie
- Responsive mobile-first design
- SEO geoptimaliseerd met meta tags en structured data (LocalBusiness)
- Contactformulier met Server Actions
- Juridisch correcte privacy- en voorwaardenpagina's
- WCAG AA toegankelijkheid

## Deployment

Deze website is geoptimaliseerd voor Vercel:

```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy naar Vercel
vercel
```

## Configuratie

Pas de volgende gegevens aan in de code:
- Telefoonnummer: zoek naar `+31612345678`
- E-mail: zoek naar `info@maramdiensten.nl`
- KvK & BTW nummer: in `Footer.tsx`
- Website URL: in `layout.tsx` metadata

## Licentie

Alle rechten voorbehouden - Maram Diensten
