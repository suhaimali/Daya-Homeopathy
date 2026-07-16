# Daya Homeopathy - Premium Medical UI Web App

Welcome to the official developer guide for the **Daya Homeopathy** web application. This codebase has been redesigned to reflect a state-of-the-art medical and wellness user interface featuring glassmorphic components, tailored HSL color tokens, organic morphing backgrounds, and fully responsive layouts.

---

## 📁 Directory & File Structure

Here is a quick map of the repository to make navigation and component folding straightforward:

```text
Daya-Homeopathy/
├── dist/                        # Production compiled build output
├── node_modules/                # Dependencies
├── public/                      # Static assets
│   ├── doctors/                 # Doctor avatar illustration assets
│   ├── icon/                    # PWA installation and favicon icons
│   ├── images/                  # Speciality cards imagery
│   ├── favicon.svg              # Vector brand logo
│   ├── manifest.webmanifest     # PWA manifest configurations
│   └── hero.jpeg                # Main hero backdrop image
├── src/
│   ├── components/              # Redesigned UI Components
│   │   ├── About.css            # Styles for About section
│   │   ├── About.jsx            # About section layout
│   │   ├── BookingForm.css      # Styles for Booking Form
│   │   ├── BookingForm.jsx      # Form & WhatsApp redirection logic
│   │   ├── Doctors.css          # Styles for Doctors profiles
│   │   ├── Doctors.jsx          # Expert Doctors display
│   │   ├── FloatingWhatsApp.css # Floating WA icon styles
│   │   ├── FloatingWhatsApp.jsx # Floating WA anchor link
│   │   ├── Footer.css           # Styles for Footer
│   │   ├── Footer.jsx           # Brands footer section
│   │   ├── Hero.css             # Styles for Hero page
│   │   ├── Hero.jsx             # Hero section with animated blobs
│   │   ├── Location.css         # Styles for Clinic Hours & Map
│   │   ├── Location.jsx         # Google maps integration
│   │   ├── Navbar.css           # Styles for Navigation Bar
│   │   ├── Navbar.jsx           # Floating header with toggle menu
│   │   ├── Preloader.css        # Styles for Spinner overlay
│   │   ├── Preloader.jsx        # App loader screen
│   │   ├── ScrollToTop.css      # Styles for Scroll indicator
│   │   ├── ScrollToTop.jsx      # Scroll button controller
│   │   ├── Specialties.css      # Styles for Treatments index [Renamed]
│   │   └── Specialties.jsx      # Treatments searchable list & Modal [Renamed]
│   ├── App.css                  # Core App CSS overrides
│   ├── App.jsx                  # Main wrapper orchestrator
│   ├── index.css                # Global Premium Design System CSS
│   └── main.jsx                 # Client entry bootstrap
├── .oxlintrc.json               # Oxlint static analysis rules
├── package.json                 # Project manifest & build triggers
└── vite.config.js               # Vite bundler & PWA plugin configurations
```

---

## 🎨 Design System & HSL Tokens

Our central tokens are defined inside the `:root` pseudo-class in [src/index.css](file:///d:/daya/Daya-Homeopathy/src/index.css). When creating new components or overriding styles, please use these variables to maintain brand consistency:

### 1. Color Palette
- **Primary Mint (`--primary`)**: `#0eb590` (represents healing, health, and freshness)
- **Primary Hover (`--primary-hover`)**: `#0a9677`
- **Primary Background tint (`--primary-light`)**: `#e6fbf6`
- **Accent Coral (`--accent`)**: `#ff6b8b` (used for active buttons and badges)
- **Accent Background tint (`--accent-light`)**: `#fff0f3`
- **Dark Forest Grey (`--text-dark`)**: `#122724` (deep branding color for headings)
- **Body text Sage (`--text-body`)**: `#3a524e` (used for readable body copy)
- **Muted text Sage (`--text-muted`)**: `#688580` (used for captions and descriptions)

### 2. Glassmorphism Utilities
Use the `.glass-card` class for a premium translucent effect:
```css
.glass-card {
  background: var(--bg-glass); /* rgba(255, 255, 255, 0.75) */
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  box-shadow: var(--shadow-glass);
}
```

### 3. Typography Rules
- **Headings (h1, h2, h3)**: Styled with **Outfit** from Google Fonts (for a modern corporate medical feel).
- **Paragraphs & Body text**: Styled with **Plus Jakarta Sans** (for clean spacing and optimal legibility).

---

## 🚀 Development CLI Scripts

Run the following npm scripts in the project root to develop, lint, or compile:

| Command | Action | Description |
| :--- | :--- | :--- |
| `npm run dev` | Dev Server | Launches the local dev server on [localhost:5173](http://localhost:5173) |
| `npm run build`| Build Release | Compiles production assets and generates PWA Service Workers to `/dist` |
| `npm run lint` | Code Lint | Audits files for static analysis errors using Oxlint |
| `npm run preview` | Preview build | Runs the local web server hosting the compiled production bundle |

---

## 👨‍💻 Guidelines for Developers

1. **Illustration Background Blending**: When adding avatar images (like cartoons), make sure their wrappers maintain `background-color: #ffffff` to prevent visible white margins over the page's gradient background.
2. **Smooth Scrolling**: The app implements smooth scroll targeting using section ID fragments. Remember that the main Specialties link in the Navbar points to `#expertise` (the ID defined in `Specialties.jsx`).
3. **PWA Assets**: Any alterations to the service worker cache list should be added directly under the `includeAssets` array inside [vite.config.js](file:///d:/daya/Daya-Homeopathy/vite.config.js).
