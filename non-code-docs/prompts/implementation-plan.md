# NanoScanDR — Implementation Plan

> Single-page, scroll-based Angular 21 product website for the RFA-1717DIC flat panel detector.
> Work through each step in order. Check off a step before moving to the next.

---

## Step 1 — Design Tokens & Global Styles

- [x] Create `src/styles/` directory with three partials:
  - `_tokens.scss` — CSS custom properties: `--color-primary`, `--color-primary-dark`, `--color-surface`, `--color-surface-alt`, `--color-text`, `--color-text-muted`, `--color-border`, spacing scale (`--space-*`), border-radius (`--radius-*`), box-shadow (`--shadow-*`)
  - `_reset.scss` — minimal modern CSS reset
  - `_typography.scss` — base `font-family`, heading sizes using `clamp()`, line-height, font-weight tokens
- [x] Update `src/styles.scss` to import all three partials and set:
  - `html { scroll-behavior: smooth }`
  - Base `body` styles (background, color, font) via token variables
- [x] Default primary color: **blue `#2563eb`**; changing `--color-primary` alone re-themes the full app

---

## Step 2 — Move Client Assets to `public/`

- [x] Copy `non-code-docs/resources-from-client/logo.jpeg` → `public/assets/images/logo.jpeg`
- [x] Copy `non-code-docs/resources-from-client/separate-images-in-logo/logo_without_text.png` → `public/assets/images/logo_without_text.png`
- [x] Copy both PDFs into `public/assets/pdfs/`:
  - `product-20210310_RFA-1717S.pdf`
  - `product-in-detail-RFA-1717DIC_Catalogue.pdf`

---

## Step 3 — Product Data Model & Service

- [x] Create `src/app/models/product.model.ts` with typed interfaces:
  - `ProductFeature` — `{ icon: string; title: string; description: string }`
  - `ProductSpec` — `{ label: string; value: string }`
  - `ProductSpecGroup` — `{ category: string; specs: ProductSpec[] }`
  - `ProductPerformanceStat` — `{ value: string; unit: string; label: string; description: string }`
  - `Product` — full product interface (name, tagline, features, specGroups, performanceStats, pdfPaths)
- [x] Create `src/app/services/product.service.ts` (`providedIn: 'root'`):
  - Exposes `product = signal<Product>(RFA_1717DIC_DATA)` populated from `product-detail.md`
  - All spec categories: Imaging, Mechanical, Connectivity, Environmental

---

## Step 4 — App Shell Cleanup & Routing

- [x] Replace `src/app/app.html` with just `<router-outlet />`
- [x] Trim `src/app/app.ts` to only import `RouterOutlet`; remove the `title` signal
- [x] Add a single lazy-loaded `/` route in `src/app/app.routes.ts` pointing to `HomeComponent`
  - Path: `src/app/home/home.ts` (to be created in Step 14)

---

## Step 5 — `NavbarComponent`

**Path:** `src/app/shared/components/navbar/`

- [x] Sticky header (`position: sticky; top: 0; z-index: 1000`)
- [x] Client logo using `NgOptimizedImage` (links to `public/assets/images/logo.jpeg`)
- [x] Hamburger toggle — `isMenuOpen = signal(false)`, toggled on click
- [x] Anchor links: `#carousel`, `#features`, `#performance`, `#specs`, `#download`, `#contact`
- [x] Desktop: horizontal nav; Mobile (`< 768px`): slide-down overlay menu
- [x] Accessibility: `aria-expanded` on toggle button, `aria-label="Main navigation"` on `<nav>`

---

## Step 6 — `CarouselComponent`

**Path:** `src/app/features/carousel/`

- [x] Full-viewport (`100svh`) section with dark scrim overlay (`rgba(0,0,0,0.5)`)
- [x] 3 hardcoded Unsplash radiology/medical-device images (JPEG URLs with `?auto=format&w=1600`)
- [x] `currentIndex = signal(0)` with previous/next arrow buttons
- [x] Dot indicators — `computed()` from slides array
- [x] Auto-advance every 5 seconds using `setInterval`; paused when user interacts
- [x] Headline: *"Advanced Flat Panel Detector Technology"*, sub-copy, CTA button ("View Product") that scrolls to `#features`
- [x] Arrow and dot controls: `aria-label` on each button; `role="region" aria-label="Product images"`

---

## Step 10 — `PdfViewerComponent`

**Path:** `src/app/shared/components/pdf-viewer/`

- [ ] Full-page fixed overlay (`position: fixed; inset: 0; z-index: 9999`)
- [ ] Inputs: `pdfUrl = input<string>('')`, `isOpen = input<boolean>(false)`
- [ ] Output: `closed = output<void>()`
- [ ] Top bar: product name label, "Download" `<a href [download]>` button, "Close ✕" button
- [ ] `<iframe [src]="pdfUrl" title="Product brochure">` fills remaining height
- [ ] `Escape` key triggers close — handled in `host: { '(document:keydown.escape)': 'onEscape()' }`
- [ ] When `isOpen` becomes `true`, focus moves to the close button (`viewChild` + `focus()`)
- [ ] Background scroll locked when overlay is open (`document.body.style.overflow`)

---

## Step 12 — `ContactSectionComponent`

**Path:** `src/app/features/contact/`

- [ ] Two-column layout (stacked on mobile, side-by-side on desktop):
  - **Left:** static contact info (address, phone, email, hours) — values hardcoded from a config object
  - **Right:** Reactive form with `FormBuilder`
    - Fields: Name (required), Email (required, email validator), Message (required, `<textarea>`)
    - Inline validation error messages (shown on `touched && invalid`)
    - Submit: logs form value to console; shows a success message signal; resets form
- [ ] All form controls have associated `<label>` elements and `aria-describedby` for error messages
- [ ] Section heading: *"Contact Us"*

---

## Step 13 — `FooterComponent`

**Path:** `src/app/shared/components/footer/`

- [ ] Single-row footer: small logo + "© 2026 NanoScanDR. All rights reserved."
- [ ] `background: var(--color-text)` (dark); `color: #fff`
- [ ] No additional links needed for v1

---

## Step 14 — `HomeComponent`

**Path:** `src/app/home/`

- [ ] Orchestrates all sections in scroll order:
  ```
  <app-navbar />
  <section id="carousel">   <app-carousel />   </section>
  <section id="features"> <app-feature-grid /> </section>
  <section id="performance"> <app-performance /> </section>
  <section id="specs">  <app-specifications /> </section>
  <section id="download"> <app-download-section /> </section>
  <section id="contact"> <app-contact-section /> </section>
  <app-footer />
  ```
- [ ] `changeDetection: ChangeDetectionStrategy.OnPush`
- [ ] Wire lazy-loaded route in `app.routes.ts`:
  ```ts
  { path: '', loadComponent: () => import('./home/home').then(m => m.HomeComponent) }
  ```

---

## Step 15 — Final Verification

- [ ] `npm start` — site loads at `localhost:4200`; all sections visible; carousel auto-advances; accordion opens/closes; PDF overlay opens full-screen and closes via button or Escape; download anchor downloads the file
- [ ] `npm test` — existing spec passes; no regressions
- [ ] Resize to `< 768px` — hamburger menu works; all sections reflow correctly
- [ ] Run axe DevTools in Chrome — zero accessibility violations

---

## Component Tree (for reference)

```
AppComponent
└── HomeComponent            (lazy, route: /)
    ├── NavbarComponent
    ├── CarouselComponent
    ├── PdfViewerComponent
    ├── ContactSectionComponent
    └── FooterComponent
```

---

## File Structure (target)

```
src/
  styles/
    _tokens.scss
    _reset.scss
    _typography.scss
  styles.scss
  app/
    models/
      product.model.ts
    services/
      product.service.ts
    shared/
      components/
        navbar/
        pdf-viewer/
        footer/
    features/
      carousel/
      contact/
    home/
      home.ts
      home.html
      home.scss
    app.ts
    app.html
    app.routes.ts
    app.config.ts
public/
  assets/
    images/
      logo.jpeg
      logo_without_text.png
    pdfs/
      product-20210310_RFA-1717S.pdf
      product-in-detail-RFA-1717DIC_Catalogue.pdf
```
