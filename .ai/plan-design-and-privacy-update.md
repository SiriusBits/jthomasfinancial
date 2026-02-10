# Plan: Design Refresh & Privacy/SMS Policy

This plan addresses the flat/boxy feel, header layout, navigation, icon usage, imagery, and the missing Privacy + SMS policy content. Reference: [Kilbane & Wise Privacy Policy](https://kwcpas.com/privacy.html).

---

## 1. Header: Logo and navigation in one bar

**Current:** Logo in `Header.astro`, nav in separate `Navbar.astro` below (two stacked sections).

**Change:**

- **Single header bar:** One horizontal bar with logo on the left and navigation on the right (same row).
- **Implementation options:**
  - **A (recommended):** Merge into one component (e.g. `Header.astro`) that contains both logo and nav in a single `max-w-6xl` flex row: `justify-between`, logo left, `<nav>` right.
  - **B:** Keep `Header.astro` and `Navbar.astro` but render both inside one wrapper in `BaseLayout` with `flex items-center justify-between` so they sit on one line (and ensure the wrapper has one border-bottom, not two).

**Acceptance:** One header strip; logo and nav links visible side-by-side on desktop; on mobile, nav can collapse to a hamburger or stacked below logo if needed.

---

## 2. Remove “Home” from navigation

**Current:** Nav links include Home, About, Services, Contact, Privacy.

**Change:**

- Remove the link with `href="/"` and label “Home”. Keep: About, Services, Contact, Privacy.
- The logo already links to `/` and will remain the way to get “home”; no separate Home nav item.

**Acceptance:** Nav shows only About, Services, Contact, Privacy. Logo is the only route to home in the nav area.

---

## 3. Use Lucide icons in navigation and buttons

**Current:** Nav is text-only; buttons are text-only (no icons).

**Change:**

- **Navigation:** Add a Lucide icon next to (or before) each nav label:
  - About → `Users` (or `UserCircle`)
  - Services → `Briefcase` (or `LayoutGrid`)
  - Contact → `Mail` (or `Phone`)
  - Privacy → `FileText` (or `Shield`)
  Use small, consistent size (e.g. 18–20px) and `currentColor` so they match link color and active state.
- **Buttons:** Use Lucide icons in CTAs:
  - Primary CTAs (e.g. “Get in touch”, “View all services”, “Learn more”): add `ArrowRight` (or `ChevronRight`) after the label, or an optional icon slot on `Button.astro`.
  - Buttons that go to Contact could use `Mail` or `Phone` where it makes sense.
- **Button component:** Extend `Button.astro` to accept an optional `icon` slot or `iconPosition` (“left” | “right”) so pages/sections can pass an icon (e.g. from `@/icons/lucide-icons`) without duplicating markup.

**Icon barrel:** Add to `src/icons/lucide-icons.ts`: `Users`, `Briefcase`, `Shield` (and any others used). Keep existing exports (`Mail`, `Phone`, `FileText`, `ArrowRight`, etc.).

**Acceptance:** Every nav link has an icon; primary/CTA buttons use an icon (e.g. arrow or mail) where appropriate; icons are from Lucide via the barrel and look consistent.

---

## 4. Add imagery

**Current:** No photos or illustrations anywhere; layout feels flat and boxy.

**Change:**

- **Hero (home):**
  - Option A: Subtle background image (e.g. office, desk, or abstract professional) behind the headline/subtext, with overlay so text stays readable (e.g. dark overlay + existing navy/gold).
  - Option B: Split layout — headline/CTA on one side, image on the other (e.g. right side on desktop).
- **About:** One or two images: team/office or person-at-desk. Place next to or above/below the main copy (e.g. image left, text right on desktop).
- **Contact (optional):** Small image (office exterior or interior) near the contact info or form.
- **Assets:** No brand imagery is in the repo beyond logos. Plan should assume:
  - Placeholder images (e.g. from a placeholder service or simple SVG/pattern) for layout and design, **or**
  - You will supply real photos; we add clear slots/placeholders and document recommended specs (e.g. hero ~1200×600, about ~600×400).

**Implementation:** Use `<img>` or Astro’s `<Image>` (if you add `@astrojs/image`) for photos; keep aspect ratios and loading (e.g. `loading="lazy"` where appropriate). Avoid making the design depend on external URLs; prefer `public/` or `src/assets/` so the build stays self-contained.

**Acceptance:** Hero and About clearly use imagery; Contact can be optional. Layout feels less flat; image placement is responsive and accessible (alt text, no images for critical info only).

---

## 5. Privacy and SMS policy content

**Current:** `src/content/privacy.mdx` has a short placeholder. There is no SMS policy.

**Reference:** [Kilbane & Wise Privacy Policy](https://kwcpas.com/privacy.html) — full privacy policy plus a dedicated “SMS Terms & Conditions” section.

**Change:**

- **Single page, two main sections:** Keep one “Privacy” route (e.g. `/privacy`) and structure the MDX as:
  1. **Privacy Policy** (main body)
  2. **SMS Terms & Conditions** (clearly separated, e.g. H2 “SMS Terms & Conditions”)

- **Privacy Policy sections to include (adapted for J Thomas and Associates):**
  - **Intro:** Why we care about privacy; that we use PII to tailor services; by providing information you agree to this policy.
  - **Obtaining client information:** That we need certain personal information to perform services; examples of sources (calls, emails, tax returns, financial documents, questionnaires, etc.).
  - **Types of information collected:** e.g. name, dependents, email, physical address, phone, SSN/TIN/EIN, DOB, driver’s license, etc., as needed for authorized services.
  - **Communicating with clients:** Use of email, phone, fax, SMS; statement that by default you permit SMS for appointment scheduling, reminders, filing instructions, billing; message frequency varies; message and data rates may apply; we don’t share contact info for marketing; link to full policy.
  - **Automatically collected information:** Whether the site collects visit/cookie data (e.g. “We do not collect data on how you visit this site” and “Our website does not use cookies to enhance its functionality” — or adjust if you add analytics/cookies later).
  - **Children’s privacy:** We do not knowingly collect information from anyone under 13; if we learn we have, we will delete it.
  - **We will not share PII without consent:** We don’t buy or sell PII; we may share with service providers, for legal/compliance, merger/sale, subpoena, safety; examples (services on your behalf, payment processing, support, communications); we won’t disclose to other third parties without affirmative consent.
  - **How we keep your information secure:** Restrict access, physical/electronic/procedural safeguards, compliance with laws; no guarantee against all threats; limit access to need-to-know.
  - **How long we store your information:** Minimal period required by law (or as needed for use).
  - **Your privacy rights:** Access/data portability, deletion, opt-out, correction, non-discrimination (adapt to your jurisdiction).
  - **Privacy policy changes:** We may update; updates posted on this page.
  - **Contact:** Firm name, address, phone (or “see Contact page”).

- **SMS Terms & Conditions (must be on same page or clearly linked):**
  - **SMS consent:** Phone numbers obtained for SMS consent will not be shared with third parties for marketing.
  - **Types of SMS communications:** e.g. appointment reminders, follow-up, billing, promotions (if applicable).
  - **Message frequency:** e.g. varies; example “up to X per week” if applicable.
  - **Fees:** Standard message and data rates may apply; may vary by carrier and domestic/international.
  - **Opt-in method:** e.g. verbally, or via form/checkbox (specify).
  - **Opt-out:** Reply “STOP” to any SMS or contact us to be removed.
  - **Help:** Reply “HELP” or contact us (e.g. link to Contact or privacy page).

**Implementation:** One `privacy.mdx` with the above structure (H1 “Privacy Policy”, then H2s for each section, then H2 “SMS Terms & Conditions” and its subsections). Use your firm name (“J Thomas and Associates” / “we”, “us”, “our”) and contact details from `siteMetadata` or hardcode in the MDX. No code changes required beyond ensuring the privacy page has enough typography (prose) for long-form reading; optional “Table of contents” at the top with anchor links to each H2.

**Acceptance:** `/privacy` contains a full privacy policy and a full SMS policy; structure and topics match the reference; firm name and contact info are correct; no placeholder or “TBD” text.

---

## 6. Order of work (suggested)

1. **Header + nav (1 + 2):** Single header bar, logo left / nav right, remove Home from nav.
2. **Icons (3):** Add Lucide icons to nav and to Button/CTAs; extend Button if needed.
3. **Imagery (4):** Add hero image (or split hero), about image(s), optionally contact; use placeholders or your assets.
4. **Privacy + SMS (5):** Rewrite `privacy.mdx` with full Privacy and SMS sections per above.

This order gets structure and content in place first, then deepens design with imagery.

---

## 7. Out of scope for this plan

- Adding analytics or cookies (only document “we do not use cookies” if that’s the case).
- Contact form backend or SMS signup flow (form remains presentational until you add a backend).
- Monochrome logo variants or new brand assets beyond existing SVGs.

---

## Summary

| Item | Action |
|------|--------|
| Header | One bar: logo left, nav right (merge or single wrapper). |
| Nav | Remove Home; keep About, Services, Contact, Privacy. |
| Icons | Lucide in every nav link and in primary/CTA buttons; extend Button for optional icon. |
| Imagery | Hero + About (required); Contact optional; placeholders or your images. |
| Privacy/SMS | One `/privacy` page with full Privacy Policy + SMS Terms & Conditions based on KW reference. |

Once you confirm this plan (or note changes), the next step is to implement it in the codebase.
