# Vercel deployment

This Expo project exports a static web site to `dist/`.

Vercel settings:
- Framework: Other
- Install command: `npm install`
- Build command: `npm run web:export`
- Output directory: `dist`

These settings are also stored in the root `vercel.json`.

After importing the GitHub repository into Vercel, each new commit pushed to the connected branch can trigger a new deployment.

The Vercel configuration deploys the web frontend only. It does not deploy the optional Python backend or create an Android APK.
