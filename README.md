# UBCON26 Registration Website

An exact replica of the UBCON26 Registration Website built from Figma design specifications.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop and mobile devices
- **Multiple Pages**: 
  - Home
  - About UBCON
  - Agenda
  - Speakers
  - Pricing
  - Travel & Hotel
  - Sponsorship & Vendors
- **Exact Design System**: Uses the official UBCON26 color palette
  - Pink: #e0198f
  - Yellow: #eeee22
  - Blue: #38c5f3
  - Purple: #6c3794
- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd UBCON
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header component
│   ├── Footer.tsx      # Footer with brand logos
│   └── CTA.tsx         # Call-to-action section
├── pages/
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About UBCON page
│   ├── Agenda.tsx      # Event agenda page
│   ├── Speakers.tsx    # Keynote speakers page
│   ├── Pricing.tsx     # Registration pricing page
│   ├── TravelHotel.tsx # Travel & hotel information
│   └── Sponsorship.tsx # Sponsors and vendors page
├── App.tsx             # Main app with routing
└── index.css           # Global styles with Tailwind
```

## Design System

### Colors

The application uses the official UBCON26 color palette defined in `tailwind.config.js`:

- `ubcon-pink`: #e0198f
- `ubcon-yellow`: #eeee22
- `ubcon-blue`: #38c5f3
- `ubcon-purple`: #6c3794

### Fonts

- **Oswald**: Used for headings and buttons
- **Work Sans**: Used for body text

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Figma**: Source of design specifications

## Notes

- All images and assets are served from the Figma localhost server
- Video backgrounds are included in the hero sections
- The design is pixel-perfect according to Figma specifications
- All interactive elements (buttons, links) are functional

## License

© 2025 All rights reserved by Unleashed Brands Group.
