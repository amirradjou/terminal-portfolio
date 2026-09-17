# amirradjou.com

Amirreza Radjou's personal site: a terminal-style portfolio where visitors type
commands such as `about`, `experience`, `projects`, `cv` and `socials` to read
about me. Built with React, TypeScript, styled-components and Vite, and
deployed to [amirradjou.com](https://amirradjou.com) on Netlify.

The site is built on [satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio)
(MIT). The terminal engine, theming, hero layout (including the ASCII art)
and test setup come from that template; the content, hero text and links,
`cv`/`experience` commands, metadata and icons are my own.

## Commands

| Command      | What it does                                    |
| ------------ | ----------------------------------------------- |
| `about`      | short professional summary                      |
| `experience` | work history from the CV                        |
| `education`  | degrees and dates                               |
| `projects`   | selected projects (`projects go <n>` opens one) |
| `cv`         | opens the CV PDF (`resume` is an alias)         |
| `socials`    | LinkedIn, GitHub, ... (`socials go <n>`)        |
| `email`      | opens a mail draft                              |
| `themes`     | switch colour theme (`themes set <name>`)       |
| `help`       | list everything, including keyboard shortcuts   |

Tab / Ctrl+i autocompletes, Up/Down walk the history, Ctrl+l clears.

## Running locally

```bash
npm install
npm run dev          # http://localhost:5173
```

Quality gates (all must pass before a push; CI runs the same set):

```bash
npm run lint         # eslint
npm run format:check # prettier
npm run test:once    # vitest + testing-library
npm run build        # tsc + vite build -> dist/
```

## Updating content

Everything the site says about me lives in one place:
[`src/data/profile.ts`](src/data/profile.ts) (name, headline, links, socials,
projects, education, experience). The commands, the hero, the tab-completion
hints and the tests all read from it, so a new job or project is a one-file
edit plus a look at the tests in `src/test/Terminal.spec.tsx`.

To publish a new CV, replace `public/CV.pdf` and bump `cvUpdated` in
`profile.ts`. The public copy is built from the CV source with the phone
number removed from the header line (keep it that way: the site publishes
email only, no phone or address). The share image is `public/og.png`
(1200x630) and the Open Graph / Twitter tags and JSON-LD snippet are in
`index.html`.

## Deployment

Netlify builds `main` with `npm run build` and publishes `dist/`
(see `netlify.toml`). Every push to `main` goes live, so changes land through
pull requests once the CI workflow is green.

## License

MIT. See [LICENSE](LICENSE) for the template author's copyright notice and mine.
