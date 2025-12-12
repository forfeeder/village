# Village Digital Development & Election Platform - Setup Guide

## 📋 Project Overview

A complete, production-ready React + Bootstrap 5 application for village elections featuring:
- Development plans tracking
- Skilled villagers showcase
- Government schemes information
- Image gallery with lightbox
- Before/After transformation comparisons
- Village and candidate information
- Contact form with validation
- Dark/Light theme toggle
- Fully responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd Gaon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
Gaon/
├── public/
│   ├── index.html          # HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.js
│   │   │   └── HeroSection.css
│   │   ├── PlanCards/
│   │   │   ├── PlanCards.js
│   │   │   └── PlanCards.css
│   │   ├── VillagerBiodata/
│   │   │   ├── VillagerBiodata.js
│   │   │   └── VillagerBiodata.css
│   │   ├── GovernmentSchemes/
│   │   │   ├── GovernmentSchemes.js
│   │   │   └── GovernmentSchemes.css
│   │   ├── ImageGallery/
│   │   │   ├── ImageGallery.js
│   │   │   └── ImageGallery.css
│   │   ├── BeforeAfter/
│   │   │   ├── BeforeAfter.js
│   │   │   └── BeforeAfter.css
│   │   └── ContactForm/
│   │       ├── ContactForm.js
│   │       └── ContactForm.css
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Plans.js
│   │   ├── SkilledVillagers.js
│   │   ├── Schemes.js
│   │   ├── Gallery.js
│   │   ├── BeforeAfter.js
│   │   ├── AboutVillage.js
│   │   ├── AboutVillage.css
│   │   ├── AboutCandidate.js
│   │   ├── AboutCandidate.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── data/               # Mock JSON data
│   │   ├── villagers.json
│   │   ├── plans.json
│   │   ├── schemes.json
│   │   ├── gallery.json
│   │   └── beforeAfter.json
│   ├── utils/
│   │   └── api.js          # Utility functions
│   ├── App.js              # Main app component
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies
├── README.md              # Documentation
└── .gitignore             # Git ignore rules
```

## 🎨 Features & Components

### Pages
1. **Home** - Village overview with quick navigation
2. **Development Plans** - Progress tracking with filters
3. **Skilled Villagers** - Showcase with search & filters
4. **Government Schemes** - Complete scheme information
5. **Gallery** - Image gallery with lightbox & categories
6. **Before/After** - Interactive comparison sliders
7. **About Village** - History, culture, demographics
8. **About Candidate** - Profile, vision, achievements
9. **Contact** - Form, map, social media links

### Reusable Components
- **Navbar** - Responsive navigation with theme toggle
- **Footer** - Multi-column footer with links
- **HeroSection** - Customizable hero banners
- **PlanCards** - Development plan cards with progress
- **VillagerBiodata** - Profile cards for villagers
- **GovernmentSchemes** - Expandable scheme cards
- **ImageGallery** - Grid gallery with lightbox modal
- **BeforeAfter** - Interactive image slider
- **ContactForm** - Validated contact form

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router v6** - Routing
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components
- **Bootstrap Icons** - Icon library

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions

### 2. Dark/Light Theme
- Toggle between themes
- Persistent theme preference
- Smooth transitions

### 3. Search & Filter
- Real-time search
- Category filters
- Efficient data handling

### 4. Interactive Elements
- Image lightbox viewer
- Before/After slider
- Accordion panels
- Form validation

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators

## 📝 Customization Guide

### Updating Data

All data is stored in JSON files in `src/data/`:

1. **Villagers** (`villagers.json`)
   - Add/edit villager profiles
   - Update achievements
   - Change categories

2. **Plans** (`plans.json`)
   - Modify development plans
   - Update progress percentages
   - Change timelines

3. **Schemes** (`schemes.json`)
   - Add new government schemes
   - Update eligibility criteria
   - Modify application steps

4. **Gallery** (`gallery.json`)
   - Add new images
   - Update categories
   - Change descriptions

5. **Before/After** (`beforeAfter.json`)
   - Add transformation images
   - Update impact details

### Changing Colors

Edit `src/index.css` and `src/App.css`:

```css
:root {
  --color-primary: #2E7D32;    /* Green */
  --color-secondary: #1565C0;   /* Blue */
  --color-tertiary: #8D6E63;    /* Brown */
  --color-accent: #FF6F00;      /* Orange */
}
```

### Replacing Images

1. Update image URLs in JSON files
2. Use local images in `public/images/` folder
3. Reference as `/images/your-image.jpg`

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.js`
3. Add navigation link in `Navbar.js`

Example:
```javascript
// In App.js
import NewPage from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` folder.

### Deployment Options

1. **Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **GitHub Pages**
   ```bash
   npm install gh-pages --save-dev
   # Add to package.json:
   # "homepage": "https://yourusername.github.io/repo-name"
   npm run build
   npx gh-pages -d build
   ```

## 📱 Progressive Web App (PWA)

The app includes PWA manifest. To enable full PWA features:

1. Serve over HTTPS
2. Add service worker
3. Test with Lighthouse

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
PORT=3001 npm start
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions:
- Check documentation
- Review code comments
- Inspect browser console for errors

## 📄 License

MIT License - Free to use and modify

## 🙏 Acknowledgments

- Bootstrap for UI framework
- React team for the library
- Unsplash for placeholder images
- Community contributors

---

**Made with ❤️ for village digital transformation**
