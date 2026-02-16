# Website Portfolio

Personal portfolio website for **Marco Bonifacio**, built as a static site to showcase projects, experience, education, and role-specific CVs.

## Live Site
- Production: <https://rinq123.github.io/WebsitePortfolio/>

## Overview
This project is a single-page portfolio focused on junior software developer applications, while still supporting QA and admin applications through separate downloadable CVs.

It includes:
- Hero section with profile image and role statement
- CV download actions (Software Dev primary, QA/Admin secondary)
- Skills chips
- Project cards with external repo links
- Experience and education sections styled as compact CV blocks
- Contact section with email and profile links
- Light/Dark mode with preference persistence
- Scroll reveal animations for key content blocks
- Mobile hamburger navigation + desktop nav

## Tech Stack
- `HTML5`
- `CSS3` (custom properties, responsive layout, dark-mode theming)
- `Vanilla JavaScript` (navigation toggle, theme persistence, reveal observer)
- `GitHub Pages` for hosting

No framework and no build step.

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
      +- marco-qa-cv.pdf
      +- marco-admin-cv.pdf
```

## Core Features

### 1) Theme Toggle (Light/Dark)
- Toggle button in nav updates `body.dark-mode`
- Preference saved in `localStorage` under key: `theme`
- If no saved preference, uses system `prefers-color-scheme`

### 2) Scroll Reveal Animations
- Uses one `IntersectionObserver` in `main.js`
- Targets: hero, sections, cards, CV entries, skill chips, contact links
- Adds staggered delays for cleaner entry sequence
- Respects reduced-motion users (`prefers-reduced-motion` fallback)

### 3) Responsive Navigation
- Mobile: hamburger menu toggles nav visibility
- Desktop: inline nav links
- Keyboard support:
  - `Enter`/`Space` toggles
  - `Escape` closes menu

### 4) CV Integration
- Primary CTA: Software Developer CV
- Secondary links: QA CV and Admin CV
- Files served from `assets/cv/`

## Run Locally
Any static server works.

### Option A: VS Code Live Server
1. Open the folder in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**

### Option B: Python HTTP server
```bash
python -m http.server 5500
```
Then open:
- <http://127.0.0.1:5500/>

## Deployment (GitHub Pages)
Configured for branch deployment from:
- Branch: `main`
- Folder: `/ (root)`

Site URL:
- <https://rinq123.github.io/WebsitePortfolio/>

If deployment ever fails:
1. Confirm `index.html` exists in repository root
2. Check `Settings > Pages` branch/folder config
3. Push a new commit to trigger rebuild

## Content Maintenance Guide

### Update Profile Photo
- Replace `profile.jpg` in project root
- Fallback is already configured to `avatar-placeholder.svg`

### Update CV Files
- Replace PDFs in `assets/cv/`
- Keep filenames the same to avoid HTML changes

### Update Projects
- Edit cards in `index.html` under `#projects`
- Keep one-line summary + tech stack consistent for scanning

## Accessibility and UX Notes
- Semantic sections and headings
- Focus-visible outlines for interactive elements
- Reduced-motion support for reveal effects
- Color contrast handled for both light and dark themes

## Current Known Gaps
- `Project Three` is placeholder content (`TBD`)
- LinkedIn automated checks may return anti-bot status even when link works in browser

## Validation Checklist (Pre-Update)
Before pushing changes:
1. Check nav links scroll to correct sections
2. Check all CV and project links
3. Test light/dark toggle and persistence
4. Test mobile menu behavior
5. Test at common widths (`375`, `768`, `1920`)

## Author
Marco Bonifacio
- GitHub: <https://github.com/rinq123>
- LinkedIn: <https://www.linkedin.com/in/sean-marco-bonifacio-538286253/>
- Email: `seanmarcobonifacio@gmail.com`
