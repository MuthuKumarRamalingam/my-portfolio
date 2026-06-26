# Minimalist, High-Performance Software Engineering Portfolio

A lean, highly optimized single-page professional portfolio engineered for sub-second page loads, near-zero Cumulative Layout Shift (CLS), and full WCAG AA accessibility compliance. 

## ⚡ Performance Architecture & Metrics

This codebase is optimized specifically to achieve a near-perfect Lighthouse score when served over edge networks like GitHub Pages.

* **First Contentful Paint (FCP) & LCP:** Minimized to the absolute floor by stripping third-party render-blocking scripts (Google Analytics) out of the initial HTML head and lazy-loading them exclusively on user interaction.
* **Cumulative Layout Shift (CLS):** Anchored at `0.0` by applying strict CSS `scrollbar-gutter` definitions and declaring explicit native dimension boxes on critical visual assets.
* **Accessibility:** All UI element palettes strictly conform to WCAG AA parameters, with primary text elements hitting an contrast ratio exceeding `14.1:1`.

---

## 🛠️ Tech Stack

* **UI Layer:** React 19 (Lean virtual DOM compilation target)
* **Language:** TypeScript 5.7+ (Strict typing parameters)
* **Build Engine:** Create React App Webpack Bundle Wrapper (`react-scripts` v5)
* **Styling Engine:** Semantic Plain CSS3 using global tokenized custom variables
* **Analytics:** Google Analytics 4 (Deferred event tracking pipeline)

---

## 📁 Repository Map

```text
├── .github/workflows/   # Automated GitHub Actions deployment engine
├── public/
│   ├── index.html       # Optimized document structure with critical inline styles
│   ├── robots.txt       # Search engine routing parameters
│   └── sitemap.xml      # Google Indexed Routing manifest
├── src/
│   ├── components/      # Modular layout components
│   │   ├── Portfolio.tsx # Master container with the smart interaction listener
│   │   ├── Hero.tsx
│   │   └── Experience.tsx
│   ├── styles/
│   │   └── portfolio.css # Style custom properties, token layout rules, & fluid typography
│   └── index.tsx        # Application mount point entry node
├── package.json         # Purged, production-focused package manifest
└── README.md