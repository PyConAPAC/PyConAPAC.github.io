# pycon.asia

Static website for `pycon.asia`, a community-maintained directory of Python conferences and events across Asia-Pacific.

## Terminology

- **pycon.asia** is the event directory and community guide.
- **PythonAsia** is the Asia-wide regional conference formerly known as PyCon APAC. It is co-organized by the host Python community and Python Asia Organization (PAO).
- **PyCon <Country>** conferences remain national events, such as PyCon Japan, PyCon Korea, PyCon Thailand, and PyCon Singapore.
- Local events such as PyCon Busan and PyCon Davao retain their local names.

## Files

```text
├── index.html                    Page structure and content
├── styles.css                    Visual design and responsive layout
├── script.js                     Event data, filtering, search, and mobile navigation
├── assets/                       Images used by the static site
├── .github/workflows/deploy.yml  GitHub Pages deployment workflow
├── CNAME                         Custom domain configuration
├── LICENSE                       MIT license
├── docs/                         Project reviews and documentation
├── archive/legacy-react-site/    Archived React application
└── README.md                     Project and contribution guide
```

The active site is a plain HTML, CSS, and JavaScript site at the repository root. It does not require a build step, package manager, or framework. The older React application is retained under `archive/legacy-react-site/` and is not part of the active deployment.

## Preview Locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Run the command from the repository root. A local HTTP server is recommended because it mirrors static hosting behavior more closely than opening `index.html` directly.

## Adding an Event

Edit the `events` array near the top of `script.js`:

```js
{
  year: 2027,
  date: '12-14 Sep',
  title: 'PyCon Example 2027',
  location: 'Bangkok, Thailand',
  countryCode: 'TH',
  type: 'national',
  link: 'https://example.org'
}
```

Use these `type` values:

- `regional` for PythonAsia events
- `national` for country-wide PyCon events
- `local` for city or community-specific events

The event will automatically appear in the directory, year filters, search results, and total event count.

Use the two-letter ISO 3166-1 country code for `countryCode`. It is used to display the event's country flag, for example `TH` for Thailand, `JP` for Japan, and `SG` for Singapore.

Before submitting an event, verify the date, name, location, event type, and official link with the event organizers.

## Featured PythonAsia Event

The featured PythonAsia 2027 section is in `index.html`. Its artwork is:

```text
assets/event-slide-1.png
```

Do not edit or crop this artwork. The image contains the official PythonAsia 2027 Singapore event messaging. Update the supporting text or link only when the official event information changes.

## Image Guidance

- Keep original event artwork unchanged when it contains official text or branding.
- Use `object-fit: contain` for event artwork so important text is not cropped.
- Use meaningful alt text for informative images.
- Use `alt=""` for decorative collage images.
- Add new assets to `assets/` and reference them with relative paths.

## Pull Requests

1. Fork the repository on GitHub.
2. Create a focused branch, for example `add-pycon-example-2027`.
3. Make changes to the root static-site files: `index.html`, `styles.css`, `script.js`, or `assets/`.
4. Preview the site locally and check desktop and mobile layouts.
5. Confirm all external links point to official destinations.
6. Commit and push the branch.
7. Open a pull request with a short summary and the relevant official event link.

Keep pull requests small and avoid unrelated formatting or design changes.

## Maintainer

- [@codemickeycode](https://github.com/codemickeycode)

## Deployment

GitHub Actions deploys the root static site to the `gh-pages` branch on every push to `main`. The workflow copies `index.html`, `styles.css`, `script.js`, `assets/`, and `CNAME` into the deployment directory. The root `CNAME` file configures `pycon.asia` as the custom domain.

The archived React application is not deployed by this workflow.
