# BrandPath: from CSE graduate to Brand Manager

A free, open-source learning hub for fresh CSE graduates who want a clear path into brand management over roughly 15 years. It is a static site (HTML, CSS, vanilla JS) with no build step.

## What is inside

- **First 90 days** plan with checkable steps (progress saved in the browser)
- **Learning tracks:** marketing foundations, performance marketing, affiliate marketing, YouTube and the Partner Programme, Instagram and short-form content, SEO and copywriting, marketing analytics and automation, brand strategy
- **15-year roadmap** from associate to brand leader
- **Opportunities:** getting hired, earning independently, building an audience
- **Portfolio projects** and a weekly habit tracker
- Search, level filter, dark mode, mobile friendly

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Create a repository and push these files to `main`.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/pages.yml`) deploys on every push.

## Customise

All content lives in `js/data.js`. Add a track by copying an object in `DATA.tracks`. No other file needs changing.

## Structure

```
index.html
css/style.css
js/data.js     # content
js/app.js      # rendering, filters, progress
.github/workflows/pages.yml
```

## Important notes

- Resource links are third-party. Check them before sharing with students.
- Programme rules (for example YouTube Partner Programme thresholds, affiliate terms, ad policies) change. Always confirm on the official page.
- Follow disclosure rules when posting affiliate or sponsored content.
- Earnings are never guaranteed. Treat income tracks as skill-building first.

## License

MIT
