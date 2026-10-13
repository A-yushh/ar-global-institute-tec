# A. R. Global Institute

Official web platform for **A. R. Global Institute**, a premier coaching academy offering specialized academic preparation for students from **Class 6th to 12th**, Board Examinations, Olympiads, NTSE, **JEE Mains**, and **JEE Advanced**.

---

## 🌟 Key Features

- **Interactive Course & Batch Catalog**: Comprehensive batch listings filtered by academic grade (Class 6th–10th Foundation, Class 11th–12th Boards, and JEE Target batches) with dynamic search and real-time availability status.
- **Unified Authentication Flow**: Single-step student onboarding with standard fields (Class, Stream, Date of Birth, Gender), Sign In, and Password Recovery dialogs.
- **Future-Ready IT Division**: Dedicated section previewing the upcoming *A. R. Global Technologies* division with student interest submission.
- **Modern Responsive Design**: Mobile-first responsive layout with custom brand aesthetics, smooth scroll navigation, and micro-interactions.
- **Fast Performance**: Built with React 19 and Vite 8, featuring automated vendor chunk splitting for sub-second page loads.

---

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8 with React Compiler presets
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)
- **Routing**: React Router v7
- **Forms & Validation**: Formik + Yup
- **Icons**: React Icons (FontAwesome)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 1. Installation

Clone the repository and install dependencies in the `web-app` directory:

```bash
git clone https://github.com/A-yushh/ar-global-institute-tec.git
cd global-institute-technologies/web-app
npm install
```

### 2. Run the Development Server

Start the local Vite dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Production Build

To compile TypeScript and generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### 4. Code Quality & Linting

Run ESLint to check for code standards and TypeScript formatting:

```bash
npm run lint
```

---

## 🔌 Backend Configuration

To connect the application to a live backend service:

1. Create a `.env` file in the `web-app/` directory:
   ```env
   VITE_API_BASE_URL=https://api.arglobalinstitute.com/v1
   ```
2. The pre-configured Axios client in `src/apiServices/axiosInstance.ts` automatically attaches JWT authentication tokens from `localStorage` to all outgoing requests and handles automatic token expiration.

---
.github/workflows/ci.yml
## 📄 License

© 2025–2026 A. R. Global Institute. All rights reserved.
