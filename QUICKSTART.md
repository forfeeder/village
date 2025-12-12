# 🚀 Quick Start Guide

## Installation & Running

```bash
# 1. Navigate to project folder
cd Gaon

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm start

# 4. Open browser to:
http://localhost:3000
```

## 📦 What's Included

✅ **9 Complete Pages:**
- Home (Landing page with overview)
- Development Plans (with progress tracking)
- Skilled Villagers (searchable directory)
- Government Schemes (detailed information)
- Gallery (image gallery with lightbox)
- Before/After (transformation comparisons)
- About Village (history & demographics)
- About Candidate (profile & vision)
- Contact (form + map + social links)

✅ **9 Reusable Components:**
- Navbar (with theme toggle)
- Footer (multi-column)
- HeroSection
- PlanCards
- VillagerBiodata
- GovernmentSchemes
- ImageGallery
- BeforeAfter (slider)
- ContactForm (validated)

✅ **5 Data Files:**
- villagers.json (10 profiles)
- plans.json (10 development plans)
- schemes.json (10 government schemes)
- gallery.json (18 images)
- beforeAfter.json (8 transformations)

✅ **Features:**
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🔍 Search & filter functionality
- ✨ Smooth animations
- ♿ Accessibility features
- 🎨 Modern UI with Bootstrap 5

## 🎯 Main Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/plans` | Development Plans |
| `/skilled-villagers` | Skilled Villagers |
| `/schemes` | Government Schemes |
| `/gallery` | Image Gallery |
| `/before-after` | Before & After |
| `/about-village` | About Village |
| `/about-candidate` | About Candidate |
| `/contact` | Contact Us |

## 📝 Customize Content

All content is in JSON files at `src/data/`:

```bash
src/data/
├── villagers.json      # Edit villager profiles
├── plans.json         # Edit development plans
├── schemes.json       # Edit government schemes
├── gallery.json       # Edit gallery images
└── beforeAfter.json   # Edit transformations
```

Simply open these files and modify the data!

## 🎨 Change Colors

Edit `src/index.css`:

```css
:root {
  --color-primary: #2E7D32;    /* Main green */
  --color-secondary: #1565C0;   /* Blue */
  --color-tertiary: #8D6E63;    /* Brown */
  --color-accent: #FF6F00;      /* Orange */
}
```

## 🏗️ Build for Production

```bash
npm run build
```

Creates optimized files in `build/` folder ready for deployment.

## 📱 Key Technologies

- React 18
- React Router v6
- Bootstrap 5
- React Bootstrap
- Bootstrap Icons

## 🔥 Pro Tips

1. **Theme Toggle**: Click moon/sun icon in navbar
2. **Search**: Type in search boxes for instant filtering
3. **Gallery**: Click images to open lightbox viewer
4. **Before/After**: Drag slider to compare images
5. **Responsive**: Works perfectly on mobile devices

## 🆘 Common Issues

**Port 3000 busy?**
```bash
PORT=3001 npm start
```

**Dependencies error?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build not working?**
```bash
npm cache clean --force
npm install
npm run build
```

## 📚 Documentation

- Full setup guide: `SETUP_GUIDE.md`
- Project overview: `README.md`
- Code comments: Available in all files

## ✅ Testing Checklist

After starting the app, verify:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Theme toggle switches colors
- [ ] Search filters work
- [ ] Images display properly
- [ ] Forms validate correctly
- [ ] Mobile responsive
- [ ] No console errors

---

**Need Help?** Check `SETUP_GUIDE.md` for detailed documentation!

**Made with ❤️ for village development**
