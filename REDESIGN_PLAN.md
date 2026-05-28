# Portfolio Redesign Plan

## Purpose
This file is the working plan for the next portfolio redesign pass.

The goal is to move the current site from a clean functional portfolio into a more intentional, premium-looking product-style portfolio, taking inspiration from:
- `21st.dev` component styling
- `Starfall portfolio landing`

This is **inspiration only**, not a copy.

The redesign should still feel like:
- a junior full-stack / software developer portfolio
- readable and recruiter-safe
- usable in both light and dark mode
- maintainable in plain `HTML`, `CSS`, and `JavaScript`

---

## Design Intent

### Target Feel
- modern
- slightly atmospheric
- layered and polished
- premium without becoming flashy
- technically credible, not “AI template” looking

### What We Want To Borrow
- soft glow depth
- spacious hero layout
- layered surfaces
- stacked showcase cards
- refined hover states
- cleaner visual hierarchy

### What We Do Not Want
- heavy particle effects
- noisy starfield animation
- purple sci-fi visuals
- unreadable blur/glass overload
- gimmicky motion
- clone-like reproduction of the reference

---

## Current Site Problems

### 1. Hero is too plain
Current hero is structurally correct but visually underdeveloped.

Problems:
- centered content is too simple
- weak visual hierarchy
- image feels detached from layout
- lacks a strong first impression

### 2. About and Skills feel disconnected
They work, but they read like separate default sections rather than a designed block.

Problems:
- too linear
- not enough layout contrast
- not enough visual grouping

### 3. Projects are too generic
The current card layout is fine but common.

Problems:
- every project has equal visual weight
- no featured project emphasis
- does not create a memorable showcase moment

### 4. Contact section is functional but weak
It ends the page without much design intention.

Problems:
- no real closing visual
- feels like leftover utility content

### 5. Overall page rhythm needs stronger structure
The page works, but the sections do not yet feel like one coherent system.

---

## Redesign Goals

### Primary Goals
1. Create a stronger hero/landing section
2. Make projects feel like a real showcase
3. Merge About and Skills into a cleaner support section
4. Improve visual cohesion across the whole page
5. Keep the site fast, readable, and maintainable

### Secondary Goals
1. Keep dark mode working properly
2. Preserve mobile usability
3. Avoid adding unnecessary dependencies
4. Keep the code understandable for future edits

---

## Scope

### In Scope
- nav polish
- hero redesign
- about + skills redesign
- projects redesign
- contact redesign
- CSS cleanup / reorganization
- light and dark mode refinement
- motion refinement

### Out of Scope
- full framework migration
- React/Tailwind conversion
- WebGL / canvas star backgrounds
- heavy animation systems
- additional sections such as Experience/Education
- new backend features

---

## Content Direction

The portfolio is now focused on:
- junior full-stack roles
- junior software developer roles

The content should support:
- practical systems building
- full-stack project delivery
- APIs, data handling, deployment-oriented work
- clean implementation and steady improvement

The site should **not** present QA as a primary track anymore.

---

## Final Section Structure

The page should be organized as follows:

1. `nav`
2. `hero`
3. `about-skills`
4. `projects`
5. `contact`

There should be no `Experience` or `Education` sections in this redesign pass.

---

## Phase 1: HTML Restructure

### Objective
Reshape the markup so the layout can support the new design properly.

### Tasks
1. Keep current semantic anchors:
- `#about`
- `#skills`
- `#projects`
- `#contact`

2. Merge About and Skills visually:
- either one shared section with two internal panels
- or two sections wrapped in one larger layout container

3. Rebuild the hero structure into two main columns:
- `hero-copy`
- `hero-visual`

4. Add decorative wrapper elements needed for styling:
- `hero-bg`
- `hero-glow`
- `hero-photo-card`
- `projects-shell`
- `project-stack`

5. Keep links and content readable in raw HTML before styling

### Deliverable
A cleaner HTML structure that supports layered visuals without hacks.

---

## Phase 2: Hero Redesign

### Objective
Turn the hero into the strongest part of the page.

### Layout Direction
Desktop:
- 2-column grid
- left column = text + actions
- right column = photo + ambient decorative treatment

Mobile:
- stacked single-column layout
- keep content centered and readable

### Hero Content Structure
Recommended structure:

```html
<header class="hero">
  <div class="hero-bg"></div>
  <div class="hero-glow hero-glow--one"></div>
  <div class="hero-glow hero-glow--two"></div>

  <div class="hero-copy">
    <p class="hero-eyebrow">Junior Full-Stack Developer</p>
    <h1>...</h1>
    <p class="hero-description">...</p>
    <div class="cv-actions">...</div>
  </div>

  <div class="hero-visual">
    <div class="hero-photo-card">
      <img ... />
    </div>
  </div>
</header>
```

### Hero Styling Goals
- stronger spacing
- richer surface treatment
- better typography hierarchy
- intentional image placement
- subtle glow background
- soft depth, not loud animation

### Hero CSS Requirements
- use grid for layout
- use layered gradients for glow
- use border + shadow + blur carefully
- make the photo feel framed, not floating randomly
- ensure light mode still looks clean, not washed out

### Hero Acceptance Criteria
- immediately stronger first impression
- readable in both themes
- not too decorative
- CV and GitHub actions remain obvious

---

## Phase 3: About + Skills Redesign

### Objective
Make this section feel like a designed information band instead of default stacked sections.

### Layout Direction
Use a 2-panel layout:
- panel 1 = summary / strengths
- panel 2 = skill chips / current focus

### Structure Option

```html
<section id="about" class="about-skills">
  <article class="info-card about-card">...</article>
  <article class="info-card skills-card" id="skills">...</article>
</section>
```

### Content Direction

#### About Card
Keep:
- short summary
- bullet list

Improve:
- spacing
- grouping
- card hierarchy

#### Skills Card
Keep:
- chips

Add:
- optional `Current Focus` row
- better grouping of stack areas if needed

Possible focus tags:
- Full-stack development
- APIs
- SQL
- Firebase
- Deployment workflows

### Styling Goals
- same visual language as hero
- softer panels
- better spacing
- more cohesion
- still simpler than hero/projects

### Acceptance Criteria
- looks intentionally grouped
- not overcrowded
- chips remain readable
- strong desktop layout, clean mobile stacking

---

## Phase 4: Projects Redesign

### Objective
Turn the projects section into the visual centerpiece after the hero.

### Design Direction
Use a stacked showcase inspired by the reference component:
- front card fully readable
- second and third cards offset behind
- subtle layered depth

### Content Order
Front / featured:
1. `FundNest`

Second:
2. `Eclipse Invitational Scoring System`

Third:
3. `CatGallery Web App`

### Desktop Layout
- cards overlap slightly
- use `z-index`
- use transform offsets
- front card gets strongest emphasis

### Hover Behavior
On hover:
- cards spread slightly
- shadows deepen slightly
- front card remains dominant

Do not:
- rotate aggressively
- animate too much
- hide content

### Mobile Layout
Disable the stack effect on smaller screens:
- return to vertical cards
- full readability
- no overlap

### Project Card Structure
Each card should keep:
- title
- summary
- stack
- impact

Optional additions:
- a small label such as `Featured`, `Real-time`, `Full-stack`

### CSS Requirements
- card layering via transform
- controlled shadow system
- consistent padding
- subtle borders
- clean dark-mode contrast

### Acceptance Criteria
- projects feel like a showcase, not a default grid
- hover feels premium but restrained
- mobile remains practical

---

## Phase 5: Contact Redesign

### Objective
Give the page a better ending.

### Direction
Wrap contact in a deliberate panel:
- cleaner surface
- slightly elevated
- compact but intentional

### Suggested Structure

```html
<footer id="contact" class="contact-panel">
  <div class="contact-panel__content">
    ...
  </div>
</footer>
```

### Styling Goals
- consistent with hero/about/project surfaces
- stronger close to the page
- direct contact access remains easy

### Acceptance Criteria
- feels like a designed conclusion
- not oversized
- email remains easy to read

---

## Phase 6: Navigation Polish

### Objective
Make nav feel more integrated with the hero.

### Keep
- sticky behavior
- dark mode toggle
- mobile hamburger

### Improve
- spacing
- border subtlety
- hover states
- transparency / blur balance
- alignment of links and action button

### Acceptance Criteria
- nav feels premium, not generic
- still works cleanly on mobile
- remains readable over hero background

---

## Phase 7: Motion and Interaction

### Objective
Use motion to support polish, not to dominate the page.

### Keep
- existing scroll reveal system

### Add or Refine
- hero card/photo micro-float if subtle
- stacked project hover separation
- refined hover lift for interactive cards/buttons

### Do Not Add
- looping background particle system
- constant dramatic movement
- large scale transforms
- motion that hurts readability

### Accessibility
- all motion must still respect `prefers-reduced-motion`

---

## CSS Architecture Plan

The CSS should be reorganized and kept structured during this redesign.

### Recommended Order
1. root variables
2. reset/base/global typography
3. shared layout/container/section spacing
4. nav
5. hero
6. about-skills
7. projects
8. contact
9. utilities
10. media queries
11. dark mode overrides

### Rule
Do not append random styles at the bottom without grouping.

This redesign will get messy quickly if CSS organization is not controlled.

---

## Implementation Sequence

Follow this order exactly:

### Step 1
Rewrite the HTML structure
- no styling perfection yet
- just get the right wrappers/classes in place

### Step 2
Build the hero
- layout first
- then styling

### Step 3
Build the About + Skills section
- visual grouping
- panel styling

### Step 4
Build the project stack
- desktop first
- mobile fallback second

### Step 5
Build the contact panel

### Step 6
Polish the nav

### Step 7
Final visual pass
- light mode
- dark mode
- mobile
- spacing
- motion

---

## Testing Checklist

### Visual
1. Check at `1920x1080`
2. Check at `1440px`
3. Check at `768px`
4. Check at `375px`

### Functional
1. Nav links still scroll correctly
2. Dark mode still toggles correctly
3. CV links still open correctly
4. GitHub / LinkedIn links still work
5. Scroll reveal still works once per element

### Design Quality
1. Hero feels stronger than current version
2. Projects look like a showcase
3. Light mode is not washed out
4. Dark mode is not muddy
5. Mobile is not broken by layered desktop effects

---

## Definition of Done

The redesign is complete when:
- the page feels visually coherent
- the hero has a clear identity
- the projects section feels premium and intentional
- the site still feels like a software developer portfolio
- the page is clean in both light and dark mode
- the code remains understandable enough for future edits

---

## First Working Task

When starting implementation, begin with:

1. rewriting the `index.html` layout for:
- hero
- merged about/skills structure
- projects shell
- contact panel

Do **not** start by tweaking colors or shadows.

The structure must come first.

