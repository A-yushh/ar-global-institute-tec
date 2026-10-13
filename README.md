# A. R. Global Institute – Web Application

Welcome to the official frontend web application for **A. R. Global Institute**, a premier educational coaching academy preparing students for Class 6th to 12th board exams, NTSE, Olympiads, JEE Mains, and JEE Advanced.

This project is built with React (Vite) and modern frontend best practices, taking layout, clean card aesthetics, and student-friendly workflows inspired by top EdTech platforms, while featuring 100% original branding, theme colors, and modular architecture.

---

## 🎨 Color System (`src/theme/colors.js`)

All colors are strictly centralized in `src/theme/colors.js`. **No hardcoded hexadecimal values exist in application stylesheets or components.**
Colors are automatically exported to `:root` CSS custom properties on bootstrap:

- **Primary Brand**: `#aa3bff` (Electric Purple for highlights, CTAs, active indicators, and focus states)
- **Tonal Variations**: `primaryLight` (`#be5efc`), `primaryLighter` (`#dca4ff`), `primaryPale` (`#f7edff`), `primaryDark` (`#8a23d4`), `primaryDarker` (`#6c15a8`)
- **Alternating Section Backgrounds**: `bgWhite` (`#ffffff`) and `bgLight` (`#f8f9fc` / `#f3f4f8`)
- **Typography**: `textPrimary` (`#1f2937`), `textSecondary` (`#4b5563`), `textMuted` (`#6b7280`)
- **Feedback & Status**: `success` (`#10b981`), `error` (`#ef4444`), `warning` (`#f59e0b`), `info` (`#3b82f6`)

---

## 🛠 Tech Stack

- **Core**: React 19 + TypeScript (`.ts`, `.tsx`) + React Compiler (`@vitejs/plugin-react` with `reactCompilerPreset`)
- **Routing**: React Router v6 (`createRoutesFromElements` / `Routes` with `React.lazy` and `Suspense`)
- **Global State Management**: Redux Toolkit (`@reduxjs/toolkit` + `react-redux`) with full TypeScript typing
  - `authSlice.ts`: Student authentication state, tokens, user profile, and async thunks
  - `uiSlice.ts`: Modal visibility, view transitions (`signin`, `signup`, `forgot`), toast alerts, active section tracking
  - `batchSlice.ts`: Course batches catalog, active category filter, search query, and **memoized selectors** (`createSelector`)
- **Local Context**: Context API
  - `ThemeContext.tsx`: Theme tokens and root CSS variable injection
  - `AuthModalContext.tsx`: Contextual modal view transitions and triggers
- **Form Handling & Validation**: Formik + Yup for every form (Single-step Sign Up, Sign In, Forgot Password, and IT Division notification)
- **Component Styling**: CSS Modules with CSS custom properties
- **Date Picker**: `react-datepicker` wrapped inside an accessible, Formik-ready `DatePicker.tsx` component
- **Icons**: `react-icons` (FontAwesome / Feather icons)

---

## 📁 Folder Structure

```text
src/
├── assets/                 # Brand assets, vectors, and imagery
├── theme/
│   └── colors.ts           # Single Source of Truth for all colors and CSS variables
├── utils/
│   ├── constants.ts        # Navigation items, class options, gender options, stats, contact
│   ├── mockData.ts         # Batches, class categories, extra activities, testimonials
│   ├── validationSchemas.ts# Yup validation schemas for all Formik forms
│   └── divisions.ts        # Multi-division architectural configuration
├── apiServices/
│   ├── axiosInstance.ts    # Configured Axios instance with request/response interceptors
│   ├── authService.ts      # Placeholder authentication API methods returning mock promises
│   └── batchService.ts     # Placeholder course & batch API methods
├── components/
│   ├── common/             # Memoized, Formik-compatible design system components
│   │   ├── Button.tsx & Button.module.css
│   │   ├── TextInput.tsx & TextInput.module.css
│   │   ├── Dropdown.tsx & Dropdown.module.css
│   │   ├── RadioGroup.tsx & RadioGroup.module.css
│   │   ├── Checkbox.tsx & Checkbox.module.css
│   │   ├── DatePicker.tsx & DatePicker.module.css
│   │   ├── Modal.tsx & Modal.module.css (Escape key, overlay click, focus trap)
│   │   ├── Card.tsx & Card.module.css
│   │   ├── SectionHeading.tsx & SectionHeading.module.css
│   │   └── Toast.tsx & Toast.module.css
│   ├── layout/
│   │   ├── Navbar.tsx & Navbar.module.css (Sticky, brand logo, scroll links, mobile drawer)
│   │   ├── Footer.tsx & Footer.module.css (Links, contact, social icons, copyright)
│   │   └── MainLayout.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ClassCategories.tsx
│   │   ├── BatchSection.tsx
│   │   ├── BatchCard.tsx
│   │   ├── ExtraActivities.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ComingSoonSection.tsx (IT Company Division teaser + Notify Me form)
│   └── auth/
│       ├── AuthModal.tsx (Unified popup container)
│       ├── SignInForm.tsx
│       ├── SignUpForm.tsx (Simple single-step registration)
│       └── ForgotPasswordForm.tsx
├── pages/
│   ├── Home.tsx            # Main landing page assembling sections in order
│   └── NotFound.tsx        # 404 error page
├── routers/
│   └── AppRouter.tsx       # Lazy-loaded route definitions with Suspense fallback
├── store/
│   ├── store.ts            # Redux store configuration (RootState & AppDispatch)
│   └── slices/
│       ├── authSlice.ts
│       ├── uiSlice.ts
│       └── batchSlice.ts   # Includes createSelector memoization
├── context/
│   ├── ThemeContext.tsx
│   └── AuthModalContext.tsx
├── App.tsx
└── main.tsx
```

---

## 🚀 Setup & Running Instructions

### 1. Installation

From the project root:

```bash
cd web-app
npm install
```

### 2. Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

To test the optimized production build:

```bash
npm run build
npm run preview
```

---

## 🏢 How to Add the IT Company Division Later

The codebase has been designed with multi-division scalability in mind:

1. **Division Registry (`src/utils/divisions.js`)**:
   - The `DIVISIONS` array already registers `it-technologies`:
     ```javascript
     {
       id: 'it-technologies',
       name: 'A. R. Global Technologies (IT Division)',
       status: 'COMING_SOON', // Change to 'ACTIVE' upon launch
       routePrefix: '/it-technologies',
       ...
     }
     ```
   - When the IT division launches, change `status: 'ACTIVE'`.

2. **Add IT Division Pages**:
   - Create `src/pages/ITDivision/` (e.g. `ITHome.jsx`, `Services.jsx`, `Internships.jsx`).

3. **Add Routing**:
   - In `src/routers/AppRouter.jsx`, add lazy-loaded routes:
     ```jsx
     const ITHome = lazy(() => import('../pages/ITDivision/ITHome'));
     // Add route: <Route path="/it-technologies/*" element={<ITHome />} />
     ```

4. **Dedicated State / Slices**:
   - Create `src/store/slices/itSlice.js` for project inquiries, tech internships, and client quote requests, and attach it to `src/store/store.js`.

5. **API Services**:
   - Create `src/apiServices/itService.js` to handle client lead submissions, internship applications, and portfolio items.

---

## 🔌 Connecting to a Real Backend

All backend communication is abstracted into `src/apiServices/`:
- **`axiosInstance.js`**: Set `VITE_API_BASE_URL` in your `.env` file (e.g. `VITE_API_BASE_URL=https://api.yourdomain.com`). The interceptors automatically append JWT authorization tokens from `localStorage`.
- **`authService.js`**: Replace mock delays and dummy promises with calls to `axiosInstance.post('/auth/login', ...)`.
- **`batchService.js`**: Replace mock data returns with `axiosInstance.get('/batches', ...)`.

---

© 2025–2026 A. R. Global Institute. All rights reserved.
