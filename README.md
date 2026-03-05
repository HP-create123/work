# T. Hareshjaa Pillay Portfolio

Personal portfolio website built with Astro and TailwindCSS to showcase AI and automation projects, internship experience, and academic background.

## Stack

- Astro
- TailwindCSS
- Markdown content collections for project pages
- GitHub Pages deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content Management

### Add or update project pages

Projects are stored as Markdown files in:

`src/content/projects/`

Each project file includes frontmatter fields like:

- `title`
- `summary`
- `problem`
- `solution`
- `contributions`
- `technologies`
- `impact`
- `learned`
- `nextImprovements` (optional)
- `featured` (true/false)
- `order` (number)

To add a new project, create a new `.md` file in `src/content/projects/` and follow the same structure.

### Personal details

Profile, experience, education, interests, and skills are centralized in:

`src/data/site.ts`

## Pages

- `/` Home
- `/projects` Projects list
- `/projects/[slug]` Project detail pages
- `/experience` Internship and work experience
- `/education` Academic background
- `/contact` Contact links

## GitHub Pages Deployment

This project includes a workflow at:

`.github/workflows/deploy.yml`

To deploy:

1. Push this project to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` to trigger deployment.

The Astro config automatically sets the correct base path for GitHub Actions builds.
