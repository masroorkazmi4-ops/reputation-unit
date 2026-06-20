# Pre-Launch Checklist

This document outlines the final steps to prepare the Reputation Unit website for production launch.

## 1. Local Setup
- [x] Run `npm install` to ensure all dependencies are resolved.
- [x] Review the `docs/brand-strategy.md` and `docs/visual-system.md` to ensure design fidelity.
- [x] Create `.env.local` locally and set up your initial environment variables.

## 2. Web3Forms Setup
- [ ] Create a destination email address (e.g., `reputationunit.dev@gmail.com` or a Workspace email).
- [ ] Sign up for an Access Key at [Web3Forms](https://web3forms.com/).
- [ ] Select your destination email address during setup.

## 3. Required Environment Variables
Ensure the following are set locally (in `.env.local`) and in Vercel (Project Settings > Environment Variables):
- `WEB3FORMS_ACCESS_KEY`

## 4. Vercel Deployment
- [ ] Push code to GitHub (ensure `.env.local` is ignored).
- [ ] Import the repository into a new Vercel project.
- [ ] Set `WEB3FORMS_ACCESS_KEY` in the Vercel dashboard.
- [ ] Ensure the framework is set to Next.js.
- [ ] Trigger the first production build.

## 5. Domain Connection
- [ ] Add `reputationunit.com` to Vercel Domains in Project Settings.
- [ ] Update your DNS registrar (e.g., Namecheap, Cloudflare, Google Domains) with the Vercel Nameservers or A/CNAME records.
- [ ] Wait for SSL certificate generation.

## 6. SEO Checklist
- [x] Global `<title>` and `<meta name="description">` are set.
- [x] `sitemap.xml` is automatically generated.
- [x] `robots.txt` is automatically generated.
- [x] `manifest.json` is generated with brand colors.
- [x] `opengraph-image` is available for social sharing.
- [x] `icon` and `apple-icon` are configured.

## 7. Manual QA Checklist
- [ ] Click all anchor links in the navbar and footer.
- [ ] Ensure the skip link (`Skip to main content`) works correctly with keyboard navigation (Tab).
- [ ] Verify hover states on portfolio cards and links.
- [ ] Ensure no hydration errors appear in the browser console.

## 8. Mobile QA Checklist
- [ ] Test the mobile navigation menu (open/close, link clicking).
- [ ] Check horizontal scrolling (ensure no elements overflow the viewport width).
- [ ] Verify tap target sizes on mobile (especially the hamburger menu and accordion toggles).

## 9. Contact Form Test
- [ ] Fill out the form with a test submission.
- [ ] Verify the "submitting" state appears.
- [ ] Verify the success state appears.
- [ ] Check your destination email inbox (and spam folder) for the submission.

## 10. Remaining Tasks Before Launch
- [ ] Finalize and confirm the official business email.
- [ ] Update the `contactEmail` variable in `src/data/site.ts`.
- [ ] Replace `href` in social links in `src/data/site.ts` once profiles are created.
- [ ] Update private preview URLs for portfolio projects when client links are ready to be shared.
