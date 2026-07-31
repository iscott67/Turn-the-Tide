# Turn the Tide — Atlantic Edition

**Current development version: 2.0.0-dev**

Turn the Tide is a mobile-first personal AI bartender that combines inventory, context and learned taste to recommend the right drink for the moment.

## Atlantic Edition

Version 2 introduces a cohesive premium interface built around:

- calm hierarchy and generous spacing;
- a restrained Atlantic palette;
- translucent, tactile surfaces;
- editorial typography;
- system dark mode;
- a shelf-by-shelf AI scanning workflow.

## Netlify configuration

Connect the repository's `main` branch to Netlify.

- Build command: leave blank
- Publish directory: `.`
- Functions directory: `netlify/functions`

Required environment variable:

```text
OPENAI_API_KEY
```

Do not store the API key in GitHub.

## Deploying an update with GitHub Desktop

1. Copy the contents of this package into the local repository folder.
2. In GitHub Desktop, review the changed files.
3. Commit with: `Deploy Turn the Tide 2.0.0-dev`
4. Push origin.
5. Netlify deploys automatically.
