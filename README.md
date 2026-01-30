# Tekseii Solutions Website

A modern, responsive website for Tekseii Solutions - an IT training and services company.

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with React and Vite
- 📱 Fully Responsive Design
- 🎭 Smooth Animations with Framer Motion
- 🗺️ Google Maps Integration
- 📧 Contact Forms
- 🎓 Comprehensive Course Listings
- 💼 Career Opportunities
- 🛠️ Services Showcase

## Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
tekseii-solutions/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── data/           # Data files (courses, etc.)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Pages

- **Home** - Landing page with carousel, about section, enquiry form, reviews, and map
- **About Us** - Company information, mission, vision
- **Courses** - All available courses with filtering
- **Services** - Services offered by the company
- **Contact** - Contact form and location map
- **Careers** - Job listings and application form

## Customization

### Update Contact Information

Edit the following files:
- `src/components/TopNav.jsx` - Top navigation contact info
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page details
- `src/components/GoogleMap.jsx` - Map location

### Add/Edit Courses

Edit `src/data/courses.js` to add or modify courses.

### Update Services

Edit `src/pages/Services.jsx` to modify services.

## Database & Email Setup

### Supabase Database Setup

Forms save to Supabase database. To set up:

1. Go to Supabase Dashboard → SQL Editor
2. Run the SQL from `SETUP_DATABASE.sql`
3. Verify your API key in `src/config/supabase.js`

See `SUPABASE_SETUP.md` for detailed instructions.

### Email Notifications

Email notifications use Resend via Supabase Edge Functions. See `SUPABASE_SETUP.md` for setup instructions.

## Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## License

© 2024 Tekseii Solutions. All rights reserved.

