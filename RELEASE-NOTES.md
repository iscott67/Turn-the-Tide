# Turn the Tide Release Notes

## 2.0.0-dev — Atlantic Edition

This build introduces a cohesive premium visual system and a rebuilt mobile scanning workflow.

### Experience

- Introduced the Atlantic Edition design system: warm ivory, deep Atlantic teal, restrained gold, translucent surfaces and softer depth.
- Reworked typography, spacing, buttons, cards, dialogs and bottom navigation.
- Added automatic system dark mode.
- Simplified the home experience around one conversational question and one primary action.

### Shelf scanning

- Moved the photo interface above the guidance.
- Reframed scanning around one shelf at a time.
- Limited each shelf to three overlapping photos.
- Reduced uploaded images to 1,024 pixels at lower JPEG weight.
- Added a 45-second client timeout.
- Added a working Cancel action.
- Added stage-specific progress: preparing, uploading and identifying.
- Converted guidance into a collapsible panel below the interface.
- Clears completed shelf photos after confirmed bottles are added, ready for the next shelf.

### Deployment

- Updated visible, JavaScript and service-worker versions to 2.0.0-dev.
- Retained the GitHub-connected Netlify function and environment-variable architecture.
