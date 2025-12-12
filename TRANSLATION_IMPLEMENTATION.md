# Translation Implementation Guide

## ✅ Completed Files

### Core Files
- ✅ `src/translations/en.json` - Complete English translations
- ✅ `src/translations/hi.json` - Complete Hindi translations  
- ✅ `src/context/LanguageContext.js` - Language context and hooks
- ✅ `src/index.js` - Wrapped with LanguageProvider
- ✅ `src/components/Navbar/Navbar.js` - Added language toggle button
- ✅ `src/components/Footer/Footer.js` - Fully translated
- ✅ `src/pages/Home.js` - Fully translated

## 🔄 Remaining Pages to Update

To complete the translation, update each page component by:

1. Import the useLanguage hook:
```javascript
import { useLanguage } from '../context/LanguageContext';
```

2. Use the t() function:
```javascript
const { t } = useLanguage();
```

3. Replace hardcoded text with translation keys:
```javascript
<h1>{t('plans.heroTitle')}</h1>
```

### Pages Needing Updates:

#### **Plans.js** - Translation Keys Available:
- `plans.heroTitle`
- `plans.heroSubtitle`
- `plans.filterLabel`
- `plans.allPlans`
- `plans.infrastructure`, `plans.education`, etc.
- `plans.showing`, `plans.plan`, `plans.plans`
- `plans.progress`, `plans.keyBenefits`
- `plans.status.completed`, etc.

#### **SkilledVillagers.js** - Translation Keys:
- `villagers.heroTitle`, `villagers.heroSubtitle`
- `villagers.searchPlaceholder`
- `villagers.allCategories`
- `villagers.government`, `villagers.private`, etc.
- `villagers.found`, `villagers.villager`
- `villagers.experience`, `villagers.achievements`

#### **Schemes.js** - Translation Keys:
- `schemes.heroTitle`, `schemes.heroSubtitle`
- `schemes.alertTitle`, `schemes.alertText`
- `schemes.filterLabel`, `schemes.allSchemes`
- `schemes.showing`, `schemes.scheme`
- `schemes.eligibility`, `schemes.documents`
- `schemes.howToApply`, `schemes.helpline`

#### **Gallery.js** - Translation Keys:
- `gallery.heroTitle`, `gallery.heroSubtitle`
- `gallery.browseLabel`, `gallery.allPhotos`
- `gallery.nature`, `gallery.events`, `gallery.publicPlaces`
- `gallery.photo`, `gallery.photos`

#### **BeforeAfter.js** - Translation Keys:
- `beforeAfter.heroTitle`, `beforeAfter.heroSubtitle`
- `beforeAfter.infoText`
- `beforeAfter.allTransformations`
- `beforeAfter.environment`, `beforeAfter.cleanliness`
- `beforeAfter.before`, `beforeAfter.after`
- `beforeAfter.impact`

#### **AboutVillage.js** - Translation Keys:
- `aboutVillage.heroTitle`, `aboutVillage.heroSubtitle`
- `aboutVillage.historyBadge`, `aboutVillage.historyTitle`
- `aboutVillage.historyText1`, `aboutVillage.historyText2`, etc.
- `aboutVillage.demographicsBadge`
- `aboutVillage.totalPopulation`, `aboutVillage.literacyRate`
- `aboutVillage.facilitiesBadge`, `aboutVillage.economyBadge`

#### **AboutCandidate.js** - Translation Keys:
- `aboutCandidate.heroTitle`, `aboutCandidate.heroSubtitle`
- `aboutCandidate.introBadge`, `aboutCandidate.candidateName`
- `aboutCandidate.tagline`, `aboutCandidate.introText1`
- `aboutCandidate.qualificationsBadge`, `aboutCandidate.experienceBadge`
- `aboutCandidate.visionBadge`, `aboutCandidate.messageTitle`

#### **Contact.js** - Translation Keys:
- `contact.heroTitle`, `contact.heroSubtitle`
- `contact.infoBadge`, `contact.infoTitle`
- `contact.officeAddress`, `contact.phoneNumbers`
- `contact.form.name`, `contact.form.email`
- `contact.form.submit`, `contact.form.successMessage`
- `contact.form.errors.nameRequired`, etc.

## Quick Implementation Pattern

For each page, follow this pattern:

```javascript
import { useLanguage } from '../context/LanguageContext';

const PageName = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeroSection
        title={t('page.heroTitle')}
        subtitle={t('page.heroSubtitle')}
      />
      <h2>{t('page.sectionTitle')}</h2>
      <p>{t('page.description')}</p>
    </div>
  );
};
```

## Testing

After updating each page:
1. Start the app: `npm start`
2. Click the language toggle button (हिं / EN) in the navbar
3. Navigate to each page and verify all text changes language
4. Check that the language preference persists on page reload

## Notes

- All translation keys are already defined in `en.json` and `hi.json`
- The language preference is saved in localStorage
- Common translations are in `common.*` keys
- The `t()` function handles nested keys with dot notation
