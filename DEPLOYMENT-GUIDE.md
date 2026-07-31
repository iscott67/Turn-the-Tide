# Turn the Tide MVP — Complete Netlify Deployment Guide

This guide deploys the mobile-first PWA and its AI bottle-scanning function.

## 1. What you need

Before beginning, have:

1. A Netlify account.
2. An OpenAI API account with billing enabled.
3. The unzipped `turn-the-tide-mvp` folder.
4. A modern desktop browser for the first deployment.
5. An iPhone or Android phone for final testing.

The folder you deploy must contain `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `netlify.toml`, `sw.js`, the `assets` folder, the `icons` folder and the `netlify/functions` folder.

## 2. Unzip the package

1. Download `turn-the-tide-mvp.zip`.
2. Open the Downloads folder.
3. Double-click the ZIP file.
4. Confirm that a folder named `turn-the-tide-mvp` appears.
5. Open that folder and confirm that `index.html` is immediately inside it.

Do not deploy the ZIP file itself. Do not deploy a folder that contains another nested `turn-the-tide-mvp` folder.

## 3. Recommended deployment: connect a GitHub repository

Git deployment is the recommended method because future updates can be published safely and rolled back.

### Create the repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `turn-the-tide`.
4. Choose **Private** unless you deliberately want the source code public.
5. Do not add a README or licence because the project already contains documentation.
6. Create the repository.

### Upload the files

The simplest browser method is:

1. Open the new repository.
2. Select **Add file** and then **Upload files**.
3. Drag the contents of the unzipped project folder into the upload area.
4. Confirm that `index.html` will be at the repository root.
5. Enter the commit message `Initial Turn the Tide MVP`.
6. Commit the files.

For ongoing development, using GitHub Desktop is more reliable than repeated browser uploads.

## 4. Create the Netlify project

1. Sign in to Netlify.
2. Select **Add new project**.
3. Choose **Import an existing project**.
4. Choose GitHub.
5. Authorize Netlify if prompted.
6. Select the `turn-the-tide` repository.
7. Leave the build command blank.
8. Set the publish directory to `.`.
9. Netlify should detect the functions directory from `netlify.toml`.
10. Select **Deploy**.

The first deployment will publish the interface, but AI scanning will not work until the environment variable is added.

## 5. Add the OpenAI API key

Never put the API key in `app.js`, HTML, GitHub or any file downloaded to the phone.

1. Open the OpenAI API platform.
2. Create a project for Turn the Tide.
3. Create a restricted API key for that project.
4. Copy the key once and keep it temporarily in a secure password manager.
5. In Netlify, open the Turn the Tide project.
6. Open **Project configuration**.
7. Open **Environment variables**.
8. Select **Add a variable**.
9. Set the key to `OPENAI_API_KEY`.
10. Paste the API key as the value.
11. Ensure the variable is available to Functions.
12. Save it.
13. Trigger a new production deploy.

Optional:

- Add `OPENAI_VISION_MODEL` to override the model named in the function.
- Leave it unset to use the function's default model.

## 6. Confirm the Netlify Function

1. In Netlify, open **Functions**.
2. Confirm that `analyze-bar` appears.
3. Open the deployed site.
4. Select **Scan**.
5. Add two or three overlapping bar photographs.
6. Select **Analyse photo set**.
7. Confirm that candidate bottles appear.
8. Correct any uncertain result before saving.

A 503 error usually means `OPENAI_API_KEY` is missing. A 401 error usually means the key is invalid or revoked. A 429 error usually means the API project has reached a rate or billing limit.

## 7. Set the site name

1. Open **Project configuration** in Netlify.
2. Open the domain settings.
3. Change the Netlify subdomain to an available name such as `turn-the-tide-bar`.
4. Save the change.
5. Test the new address.

## 8. Add a custom domain

This is optional.

1. Purchase or use an existing domain.
2. In Netlify, select **Add a domain**.
3. Enter the domain.
4. Follow Netlify's DNS instructions.
5. Wait for DNS propagation.
6. Confirm that HTTPS is active.
7. Test both the root domain and `www` version.

Do not proceed to public promotion until HTTPS is active.

## 9. Install on iPhone

1. Open the deployed HTTPS site in Safari.
2. Test the site before installation.
3. Tap the Share button.
4. Select **Add to Home Screen**.
5. Confirm the name `Turn the Tide`.
6. Tap **Add**.
7. Open the new home-screen icon.
8. Confirm that the app opens without Safari's normal browser controls.
9. Test portrait scrolling through a full recipe.
10. Test camera access and photo selection.

If an old version appears, delete the home-screen app, clear Safari website data for the site, reopen the site and add it again. The service worker may otherwise retain an earlier cached build.

## 10. Install on Android

1. Open the HTTPS site in Chrome.
2. Open the Chrome menu.
3. Select **Install app** or **Add to Home screen**.
4. Confirm installation.
5. Open Turn the Tide from the app launcher.
6. Test portrait scrolling, navigation, camera access and offline reopening.

## 11. Mobile acceptance test

Complete this test on at least one current iPhone and one current Android device.

### Navigation

- Home, Tonight, Scan, My Bar, Taste and Bar IQ all open.
- Bottom navigation remains reachable.
- Back buttons return to the correct view.
- Dialogs close without trapping the user.

### Recipe pages

- Recipe opens in a single vertical column.
- Ingredient quantities are readable without horizontal scrolling.
- Metric and US measures both appear.
- Preparation steps are numbered.
- Glassware, ice and garnish are visible.
- Substitution guidance wraps correctly.
- Sticky action buttons do not cover content.
- The page scrolls to the final source designation.

### Inventory and scanning

- Multiple photographs can be selected.
- Candidate items can be edited.
- Duplicate bottles are not knowingly added twice.
- Inventory remains after closing and reopening the app.
- Low and replacement states update shopping recommendations.

### Taste learning

- A cocktail can be marked House Favourite, Worth Exploring or Not for Me.
- Quick feedback can be selected.
- Taste profile changes after rating.
- Cocktail history opens.
- Resetting taste does not delete inventory.

### PWA behaviour

- Home-screen icon appears correctly.
- App starts in portrait without broken layout.
- Main interface opens after temporarily disabling the network.
- AI scanning clearly fails gracefully while offline.

## 12. Production safeguards before inviting users

The build is suitable for controlled MVP testing. Before a broader public release, add:

1. User authentication.
2. Encrypted cloud synchronization.
3. Privacy policy and terms.
4. Age confirmation.
5. Responsible-consumption messaging.
6. Image-retention disclosure.
7. Error monitoring.
8. API usage limits and budget alerts.
9. A human sensory test of every house recipe.
10. A content review of every AI-generated recipe image.
11. Accessibility testing.
12. Automated regression tests.

## 13. Updating the app later

With GitHub deployment:

1. Replace or edit the relevant files locally.
2. Commit the change.
3. Push to the production branch.
4. Netlify creates a new deploy automatically.
5. Test the Deploy Preview where available.
6. Publish or roll back from Netlify if required.

Increase the cache version in `sw.js` whenever core front-end files change. Otherwise installed phones may continue displaying an older cached version.

## 14. Rollback

1. Open the Netlify project.
2. Open **Deploys**.
3. Select a previously working production deploy.
4. Choose **Publish deploy**.
5. Test the restored version on mobile.

## 15. Data limitation in this MVP

Inventory, favourites and taste history are stored in the device browser. They do not automatically transfer to another phone and may be lost if browser data is cleared.

Tell every pilot user this before they invest time building a large inventory or history.


## Important: AI scanning and Netlify Drop

The static interface can be deployed with Netlify Drop, but the source file in
`netlify/functions` must be processed and deployed as a Netlify Function.

For reliable AI scanning, use one of these deployment methods:

1. Connect the project to a GitHub repository and let Netlify build and deploy it.
2. Deploy from the project folder with Netlify CLI using `netlify deploy --prod`.

After deployment, confirm that `analyze-bar` appears under **Logs & metrics → Functions**.
If it does not appear there, the scanner cannot work regardless of whether
`OPENAI_API_KEY` has been added.
