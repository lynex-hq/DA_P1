# Site images

Drop your photographs into the folders below, then point `lib/images.js` at them.
Nothing else needs editing — every page and component reads its images from that
one file.

## How to swap an image

1. Save the file here, e.g. `public/images/hero/backdrop.jpg`
2. Open `lib/images.js` and change that entry:

   ```js
   // before
   heroBackdrop: `${U}/photo-1618221195710-...`,
   // after
   heroBackdrop: '/images/hero/backdrop.jpg',
   ```

Files in `public/` are served from the site root, so `public/images/hero/backdrop.jpg`
is requested as `/images/hero/backdrop.jpg` (no `/public` in the path).

## What goes where

| Folder | Used by | Slots |
| --- | --- | --- |
| `hero/` | Home, top of page | 1 — full-bleed backdrop |
| `slider/` | Home, sheet A-05 | 5 — full-screen slider frames |
| `services/` | Home, scope of practice | 3 — residential, office, commercial |
| `process/` | Home, material + lighting | 2 |
| `projects/` | Home gallery + Works page | 5 |
| `details/` | Home, sheet A-07 feed | 12 — close-up detail plates |
| `studio/` | About page | 3 — studio shot + 2 team portraits |
| `blog/` | Blog page | 7 — 1 featured + 6 cards |
| `contact/` | Contact page | 1 — reception |
| `brand/` | Logo, favicon, partner marks | as needed |

**30 images total.** The partner register on the home page currently uses text
wordmarks, not logo files — drop real logos in `brand/` if you want to swap them.

## Suggested sizes

| Use | Longest edge | Notes |
| --- | --- | --- |
| Hero / slider | 2000–2600 px | full-bleed, keep under ~400 KB each |
| Project & section cards | 1200–1600 px | |
| Detail feed plates | 700–900 px | 12 of them load on one screen |
| Team portraits | 600 px | |

Export as JPEG (quality ~80) or WebP. The site desaturates most photography in CSS,
so colour grading matters less than exposure and composition.
