# Tevin — 2D Animator & Visual Artist Portfolio

Personal portfolio website for Tevin, a self-taught 2D animator, illustrator, and founder of The Canvas NFT project. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework** — Next.js (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + inline styles with CSS variables
- **Animations** — Framer Motion
- **Icons** — React Icons (Feather, Phosphor, Font Awesome 6)
- **Fonts** — Bebas Neue, Cormorant Garamond, DM Mono via next/font/google

---

## Project Structure

```
src/
  app/
    globals.css         # CSS variables, base styles, grain overlay, keyframes
    layout.tsx          # Font loading, metadata, root layout
    page.tsx            # Root page assembling all sections
  components/
    Cursor.tsx          # Custom brush cursor (desktop only)
    Navbar.tsx          # Fixed navbar with scroll fill + mobile fullscreen menu
    Hero.tsx            # Hero section with PFP, animated entrance
    About.tsx           # About section with floating art cards
    Work.tsx            # Wrapper combining Showreel and Carousel into one section
      Showreel.tsx      # Full-width video player with custom controls
      Carousel.tsx      # Infinite dual-row art carousel + Enter the Archive button
    NftProject.tsx      # The Canvas NFT section with 3-card carousel
    Collabs.tsx         # Client cards — Monad, Pike Finance, Freelance KOLs
    Contact.tsx         # Contact section with email and socials
    Footer.tsx          # Closing statement footer
  lib/
    animations.ts       # All Framer Motion variants and viewport config

public/
  images/
    pfp.jpg             # Tevin's personal PFP
    nft/
      image1.jpg          # About section images (image1 through image2)
      ...
    nft/
      nft1.jpg          # NFT collection images (nft1 through nft8)
      ...
    carousel/
      1.png             # Art carousel images (1 through 18)
      ...
  videos/
    showreel.mp4        # Main showreel video
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Build for production:

```bash
npm run build
npm start
```

---

## Color Palette

All colors are defined as CSS variables in `globals.css` and pulled directly from Tevin's PFP artwork.

| Variable | Value | Usage |
|---|---|---|
| `--ink` | `#0A0A0F` | Primary background |
| `--ink-2` | `#0F0F18` | Section background variation |
| `--ink-3` | `#13131E` | Section background variation |
| `--ink-4` | `#1A1A2A` | Deepest background |
| `--bone` | `#EDEDE3` | Primary text |
| `--lavender` | `#7B5EA7` | Primary accent |
| `--lavender-2` | `#9470C4` | Accent highlight |
| `--terra` | `#B5514A` | Secondary accent |
| `--parchment` | `#C4A882` | Quote and highlight text |
| `--deep-purple` | `#1E1428` | Footer background |

---

## Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-bebas` | Bebas Neue | Display headings, section titles, logo |
| `--font-cormorant` | Cormorant Garamond | Italic accents, pull quotes, subheadings |
| `--font-dm-mono` | DM Mono | Body text, labels, nav links, tags |

---

## Sections

| Section | Component | ID |
|---|---|---|
| Navigation | `Navbar.tsx` | — |
| Hero | `Hero.tsx` | `#hero` |
| About | `About.tsx` | `#about` |
| Showreel + Carousel | `Work.tsx` | `#showreel` |
| NFT Project | `NftProject.tsx` | `#nft` |
| Collabs | `Collabs.tsx` | `#collabs` |
| Contact | `Contact.tsx` | `#contact` |
| Footer | `Footer.tsx` | — |

---

## Key Features

**Custom Brush Cursor** — A `PiPaintBrushBold` icon that lags behind the mouse with a velocity-based tilt effect. A precision lavender dot snaps instantly to the cursor position. Desktop only, automatically hidden on touch devices.

**Scroll-triggered Animations** — All sections use Framer Motion `whileInView` with custom delay variants exported from `src/lib/animations.ts`. No animation runs until the element enters the viewport.

**Showreel Player** — Custom built video player with play/pause, mute toggle, clickable progress bar and fade-in controls on hover. No third-party player dependency.

**NFT Carousel** — 3-card carousel showing center card large and side cards dimmed. Supports drag/swipe on mobile, auto-advances every 3.5 seconds, and fully responsive with JS-based breakpoint detection.

**Art Carousel** — Dual infinite scrolling rows of art images. Top row moves left, bottom row moves right. Pauses when out of viewport to save performance.

**Mobile Navigation** — Fullscreen slide-in menu with large Bebas Neue links, numbered labels, and staggered entrance animations.

---

## Credits

Designed and developed for **Tevin** — 2D Animator, Visual Artist, and Founder of [The Canvas](https://canvassary.xyz/).