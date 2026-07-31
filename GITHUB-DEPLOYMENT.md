# GitHub Desktop and Netlify Workflow

## First setup

1. Install GitHub Desktop.
2. Sign in using the GitHub account that owns the Turn-the-Tide repository.
3. Choose **File → Clone Repository**.
4. Select **Turn-the-Tide**.
5. Choose a local folder and click **Clone**.

## Load this version

1. Unzip `turn-the-tide-v1.0.0-dev.zip`.
2. Copy all files and folders from inside the unzipped package.
3. Paste them into the cloned `Turn-the-Tide` folder.
4. Keep the `.git` folder created by GitHub Desktop. Do not delete it.
5. In GitHub Desktop, review the listed changes.
6. Enter the summary: `Deploy Turn the Tide 1.0.0-dev`
7. Click **Commit to main**.
8. Click **Push origin**.

Netlify should detect the push and deploy automatically.

## Confirm the AI function

In Netlify, open:

**Logs & metrics → Functions**

Confirm that this function appears:

```text
analyze-bar
```

The Netlify environment variable must be named:

```text
OPENAI_API_KEY
```
