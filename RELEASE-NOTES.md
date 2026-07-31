# Turn the Tide Release Notes

## 3.1.0-dev — navigation and Bar IQ refresh

### Primary navigation
- Rebuilt bottom navigation around five persistent destinations:
  - Home
  - Scan
  - My Bar
  - Taste
  - Bar IQ
- Removed Tonight as a separate tab. It remains the main action on Home.
- Added Home quick actions for Scan Shelf, Shopping List and Choose a Drink.

### Bar IQ
- Replaced non-responsive high-value tiles with direct inline actions.
- Each suggested addition now includes:
  - Already have
  - Shopping list
- No modal is required for these common actions.
- “Already have” adds the ingredient to inventory and recalculates the app.
- “Shopping list” adds the item to the existing Purchase List & Wishlist.

### Hamburger menu
- Bar & Shopping opens by default and includes:
  - My Inventory
  - Scan a Shelf
  - Shopping List
  - Bar IQ
- Strengthened menu navigation if the main application script has not yet fully initialized.

### UI
- Reduced heavy font weights again.
- Improved quick-action and high-value-addition spacing for mobile.
- Retained the inventory row cleanup and reliable Add Item close control.
