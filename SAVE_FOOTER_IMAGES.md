# Quick Fix: Save Footer Images Manually

## The Problem
The Figma server returns "Error getting image" for the 9 footer brand logos. They can't be downloaded programmatically.

## Solution: Save from Browser (5 minutes)

If you can **see** the footer logos in your browser right now:

### Steps:
1. **Open your website** at http://localhost:5181
2. **Scroll to the footer** at the bottom
3. **For each logo**, right-click and select "Save image as..."
4. **Save to**: `C:\Users\IrfanSaeed\programs\UBCON\public\assets\`

### Save with these EXACT filenames:

| Logo | Filename |
|------|----------|
| Unleashed Brands (UB) Logo | `ub-logo.png` |
| Urban Air | `urban-air.png` |
| Sylvan Learning | `sylvan-learning.png` |
| The Little Gym | `little-gym.png` |
| WW | `ww.png` |
| Premier Martial Arts | `premier-martial-arts.png` |
| Snapology | `snapology.png` |
| Class 101 | `class-101.png` |
| XP League | `xp-league.png` |

### After Saving:
Let me know and I'll update the code to use the local paths!

---

## Alternative: Can't See the Images?

If the footer logos are NOT visible in your browser, we'll need to:
1. Export them directly from Figma Design file
2. Or use placeholder images temporarily

