# Website Portfolio

Personal portfolio website for **Marco Bonifacio**, built as a static site to support junior **full-stack** and **software development** applications.

## Live Site
- Production: <https://rinq123.github.io/WebsitePortfolio/>

## Overview
This is a single-page portfolio focused on clear recruiter scanning rather than heavy visual complexity.

It currently includes:
- Hero section with profile image, role statement, and CV links
- About section aligned to current software CV positioning
- Skills chips covering the main stack and supporting tools
- Selected project cards linking to GitHub repositories
- Contact section with direct email, LinkedIn, and GitHub
- Light/Dark mode with preference persistence
- Scroll reveal animations for key content blocks
- Mobile hamburger navigation and desktop nav

The site deliberately keeps the content tighter than a full CV. The portfolio is the project showcase; the downloadable CV carries the formal experience and education detail.

## Current Role Focus
- Junior Full-Stack Developer
- Junior Software Developer

The portfolio no longer targets QA as a primary path.

## CV Links
The live site exposes:
- `Software CV` as the primary download
- `Admin CV` as a secondary link

Files are served from:
- `assets/cv/marco-software-dev-cv.pdf`
- `assets/cv/marco-admin-cv.pdf`

## Selected Projects

### FundNest
Multi-tenant donation platform with:
- public charity donation pages
- tenant admin login and branding controls
- Stripe test payments
- webhook-driven status updates
- Docker-based local setup

Stack:
- `Vue 3`
- `Node.js`
- `Express`
- `SQL Server`
- `Stripe`
- `JWT`
- `Docker Compose`
- `Vitest`

### Eclipse Invitational Scoring System
Live gymnastics competition scoring system with:
- secure admin access
- score entry and editing
- public scoreboard views
- stream display modes
- CSV export

Stack:
- `HTML`
- `CSS`
- `JavaScript`
- `Firebase Authentication`
- `Cloud Firestore`
- `Firebase Hosting`

### CatGallery Web App
Full-stack cat gallery with:
- infinite scroll browsing
- favourites
- lightbox navigation
- random cat facts
- account-based features

Stack:
- `HTML`
- `CSS`
- `JavaScript`
- `Node.js`
- `Express`
- `MongoDB`
- `express-session`
- `bcryptjs`

## Tech Stack
- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- `GitHub Pages`

No framework or build step is used for the portfolio site itself.

## Project Structure
```text
WebsitePortfolio/
+- index.html
+- style.css
+- main.js
+- profile.jpg
+- avatar-placeholder.svg
+- banner1.jpg
+- assets/
   +- cv/
      +- marco-software-dev-cv.pdf
      +- marco-admin-cv.pdf
```

## Core Features

### 1) Theme Toggle
- Nav button toggles `body.dark-mode`
- Preference stored in `localStorage` under `theme`
- Falls back to system `prefers-color-scheme` if no preference exists

### 2) Scroll Reveal
- Uses a single `IntersectionObserver` in `main.js`
- Targets hero, sections, cards, CV buttons, skill chips, and contact links
- Adds staggered delays for card/skills/link groups
- Respects `prefers-reduced-motion`

### 3) Responsive Navigation
- Mobile hamburger menu
- Desktop inline nav
- Keyboard support for `Enter`, `Space`, and `Escape`

### 4) CV Integration
- Primary hero CTA links to the software CV PDF
- Secondary hero link exposes the admin CV
- GitHub profile is linked directly from the hero and contact section

## Run Locally
Any static server works.

### Option A: VS Code Live Server
1. Open the folder in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**

### Option B: Python HTTP Server
```bash
python -m http.server 5500
```

Then open:
- <http://127.0.0.1:5500/>

## Deployment
GitHub Pages is configured from:
- Branch: `main`
- Folder: `/ (root)`

Site URL:
- <https://rinq123.github.io/WebsitePortfolio/>

If deployment fails:
1. Confirm `index.html` exists in repository root
2. Check `Settings > Pages`
3. Push a new commit to trigger a rebuild

## Content Maintenance

### Update Profile Photo
- Replace `profile.jpg`
- Fallback image is `avatar-placeholder.svg`

### Update CV Files
- Replace the PDFs in `assets/cv/`
- Keep filenames stable unless you also update `index.html`
- Keep editable source docs outside the website repo unless you intentionally want them versioned here

### Update Projects
- Edit the project cards in `index.html`
- Keep the structure consistent:
  - summary
  - stack
  - impact

## Accessibility and UX Notes
- Semantic sections and headings
- Focus-visible outlines for interactive elements
- Reduced-motion support for reveal effects
- Light and dark theme contrast handled in CSS

## Validation Checklist
Before pushing:
1. Check nav links scroll to `About`, `Skills`, `Projects`, and `Contact`
2. Check both CV links open correctly
3. Check all project repo links
4. Test light/dark toggle and persistence
5. Test mobile menu behavior
6. Test at common widths such as `375`, `768`, and `1920`

## Author
Marco Bonifacio
- GitHub: <https://github.com/rinq123>
- LinkedIn: <https://www.linkedin.com/in/sean-marco-bonifacio-538286253/>
- Portfolio: <https://rinq123.github.io/WebsitePortfolio/>
- Email: `seanmarcobonifacio@gmail.com`
