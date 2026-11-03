# Vercel build fix

This update adds the Expo Router runtime and a minimal root route required by Expo's static web rendering pipeline. It also keeps the existing `App.tsx` as the app's home screen.

## Important Vercel settings

When importing or editing this project in Vercel, set:

- **Framework Preset:** Other (not FastAPI)
- **Install Command:** `npm install`
- **Build Command:** `npm run web:export`
- **Output Directory:** `dist`

The repository contains an optional Python FastAPI folder, but this Vercel project is deploying the Expo website, not the Python backend. Choosing FastAPI as the framework preset can configure the wrong build behavior.

## Replace the project files

Upload the contents of this ZIP's `MathVerseAI` folder to the root of your existing GitHub repository and commit the changes. Then in Vercel, open the MathVerse AI project → Settings → Build and Development Settings, update the settings above, save, and redeploy.

