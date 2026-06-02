# William Schertzer Website

Professional personal website for `williamschertzer.com`.

The site is a static React app built with Vite and Tailwind CSS. It includes:

- Bio and professional positioning
- Resume section
- Research and project portfolio cards
- Image gallery
- Optional writing/thinking section
- Netlify-ready contact form
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
- Update `experience`, `skills`, and `awards` as your resume changes.
- Replace `portfolio` with real projects and links.
- Replace placeholder Unsplash images with your own images or project screenshots.
- Replace `public/resume.pdf` whenever you have a newer resume.

## Deployment Recommendation

Use Netlify for this static site. Netlify works well for Vite, gives you automatic HTTPS, supports custom domains, and can process the contact form already included in the site.

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
