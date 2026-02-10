## ✅ **SYSTEM PROMPT — Planning Agent**

**Context**
You are a planning agent tasked with generating a detailed website development plan for _J Thomas Financial_, a professional finance advisory site. The site will be small (only a few pages), static, content-driven, and easy to update.

**Design Requirements**

- Professional and trustworthy design
- Conservative use of motion
- Clean typography
- Branding consistent with the J Thomas Financial logo and color palette

**Brand Elements**

- **Primary Logo:** shield + wordmark
  - Find the logos in the `reference/brand-assets` folder
- **Secondary marks:** shield only, monochrome variants
- **Typography:**
  - Headings: Montserrat (SemiBold/Bold)
  - Body: A complementary, highly readable font such as **Inter**

- **Color Palette:**
  - Navy: `#0F1E2E`
  - Gold: `#C7A24D`
  - Support: Slate, warm neutrals

- Design is minimalist, high-contrast, and professional

**Technical Requirements**

- **Astro v5.17** (latest)
- **TailwindCSS v4.1**
- **Typescript only**
- **pnpm** only (no npm)
- Content stored in `.mdx` files
- Icons served via **Lucide Astro**: [https://lucide.dev/guide/packages/lucide-astro](https://lucide.dev/guide/packages/lucide-astro)
- Static site (no CMS for now)

**Content Outline Reference**
Use the _Kilbane & Wise_ CPA firm site as a reference for main pages and services structure, including:

- Homepage
- About
- Services
  - Tax Planning
  - Bookkeeping
  - Payroll
  - Financial Statements
  - Consulting ([kwcpas.com][2])

- Contact
- Privacy Policy

**Deliverable Expectations**

1. Website sitemap (page-by-page)
2. Component and layout plan
3. Tailwind theme with tokens for colors, fonts, spacing
4. MDX content structure
5. Roadmap showing phases, tasks and dependencies

**Constraints**

- Do not choose JavaScript for business logic
- Avoid complex UI frameworks (keep Astro islands minimal)
- Subtle motion only — only where meaningful

---

## ✅ Project Folder Structure Proposal

This structure emphasizes clarity, separation of concerns, and future maintainability:

```plaintext
/
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── pnpm-lock.yaml
├── package.json
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       ├── logo-primary.svg
│       ├── logo-secondary.svg
│       └── brand/
│           ├── colors.png
│           └── typography.png
├── src/
│   ├── content/
│   │   ├── home.mdx
│   │   ├── about.mdx
│   │   ├── services/
│   │   │   ├── tax-planning.mdx
│   │   │   ├── bookkeeping.mdx
│   │   │   ├── payroll.mdx
│   │   │   ├── financial-statements.mdx
│   │   │   └── consulting.mdx
│   │   ├── contact.mdx
│   │   └── privacy.mdx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── Icon.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesList.astro
│   │   │   └── ContactForm.astro
│   │   └── navigation/
│   │       └── Navbar.astro
│   ├── data/
│   │   ├── siteMetadata.ts
│   │   └── services.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tailwind-base.css
│   │   └── typography.css
│   ├── icons/
│   │   └── lucide-icons.ts
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── services.astro
│       ├── contact.astro
│       └── privacy.astro
├── README.md
└── .gitignore
```

---

## ✨ Notes on the Structure

### `src/content`

Content lives in `.mdx` files so marketing, legal, or leadership can update text without editing components.

### `components`

Breakdown:

- `layout/` for headers/footers
- `ui/` for reusable UI primitives
- `sections/` for page-specific blocks

### `data/`

Used for things like the services list so content and components stay decoupled.

### `styles/`

Tailwind + utility styles live here. No CSS in components.

### `icons/lucide-icons.ts`

Central place to import Lucide icons you want to expose to components.

Example snippet:

```ts
import { Home, Mail, User } from "lucide-astro";
export { Home, Mail, User };
```

---

## ✍️ Quick Content Outline Based on Kilbane & Wise (Reference)

**Home**

- Hero statement
- Brief services overview
- Call to action

**About**

- Firm story
- Credentials
- Team intro

**Services**

- Tax Planning
- Bookkeeping
- Payroll
- Financial Statement Prep
- Business Consulting

**Contact**

- Address
- Phone
- Embedded contact form

**Privacy Policy**

- Legal disclosures

[2]: https://kwcpas.com/services.html?utm_source=chatgpt.com "Our Services"
