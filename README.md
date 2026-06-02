# William Schertzer Website

Professional personal website for `williamschertzer.com`.

The site is a static React app built with Vite and Tailwind CSS. It includes:

- Bio and professional positioning
- Resume section
- Research and project portfolio cards
- Image gallery
- Downloadable resume at `public/resume.pdf`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Content To Replace

Most personal content lives near the top of `src/main.jsx`.

- Update `profile` if you want to change your email, LinkedIn, location, or bio.
- Update `resumeSections`, `selectedWorks`, `projects`, and `galleryImages` as your resume, papers, repositories, and photos change.
- Replace `public/resume.pdf` whenever you have a newer resume.

## Image Placeholders

The site already uses `public/images/headshot.jpg` for the first panel.

Gallery images live in `public/images/gallery/`. The current site references uploaded files such as:

- `public/images/gallery/IMG_8690.jpeg`
- `public/images/gallery/IMG_1687.jpeg`
- `public/images/gallery/PXL_20240820_152755793.MP.jpeg`
- `public/images/gallery/IMG_2097.jpeg`

To add or remove images, edit the `galleryImages` array in `src/main.jsx`.

## Paper PDFs

The site currently includes:

- `public/papers/ai-driven-fluorine-free-polymers.pdf`
- `public/papers/physics-informed-degradation.pdf`
- `public/papers/copolymer-informatics.pdf`

## Deployment Recommendation

Use Netlify for this static site. Netlify works well for Vite, gives you automatic HTTPS, and supports custom domains.

Build settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Domain: `williamschertzer.com`

## Domain Setup

After deploying to Netlify:

1. Add `williamschertzer.com` as a custom domain in Netlify.
2. In your domain registrar DNS settings, follow the DNS records Netlify gives you.
3. Common Netlify setup is:
   - Apex/root domain `williamschertzer.com`: Netlify DNS or an A record to Netlify's provided IPs.
   - `www.williamschertzer.com`: CNAME to your Netlify site hostname.
4. Enable HTTPS in Netlify after DNS propagation completes.

DNS changes can take a few minutes to several hours to fully propagate.
