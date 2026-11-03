# MathVerse AI — Android + Website starter

This project is prepared for **Android development and website deployment** from one Expo + React Native + TypeScript codebase.

## What is included

- MathVerse AI dashboard
- Geometry demonstration board (perpendicular bisector, circle and equilateral triangle)
- Scientific calculator
- 2D function graphing screen
- Optional Python FastAPI + SymPy backend starter
- Expo web static-export configuration
- Vercel deployment configuration (`vercel.json`)
- Basic web-app manifest
- Beginner-friendly instructions

**Please note:** This is the current starter version, not the finished ten-stage product. The AI tutor, full interactive geometry tools, 3D engine, user accounts, cloud sync and production services still need to be built and tested in later updates. No APK is included in this ZIP.

---

# Easiest way to publish the website with Vercel

You do not need to write code for this part.

1. Extract this ZIP on your computer.
2. Open your GitHub repository: `https://github.com/shekhussainbasha1103-lgtm/MathVerse-AI`
3. Upload the **contents inside the `MathVerseAI` folder** to the repository (not the outer folder itself if it creates an unwanted nested folder).
4. Commit the changes.
5. Open https://vercel.com/ and sign in using GitHub.
6. Choose **Add New → Project**.
7. Import `shekhussainbasha1103-lgtm/MathVerse-AI`.
8. Check these settings:
   - Framework Preset: Other
   - Build Command: `npm run web:export`
   - Output Directory: `dist`
   - Install Command: `npm install`
9. Click **Deploy**.
10. When deployment finishes, Vercel gives you a website address. Open it to use MathVerse AI.

The included `vercel.json` already contains the build and output settings, so Vercel may fill them automatically.

## Updating the website later

Whenever you upload a new version of the project to the same GitHub repository and commit the changes, Vercel can automatically build and deploy the updated website.

---

# Android: try the app on your phone

This source project can run on Android using Expo Go.

1. Install Expo Go from Google Play.
2. On your Windows computer, install Node.js LTS from https://nodejs.org/.
3. Download this repository to your computer (GitHub Desktop is an easy option: https://desktop.github.com/).
4. Open the project folder in VS Code.
5. Open Terminal → New Terminal.
6. Run:

```bash
npm install
npx expo start
```

7. Scan the QR code with Expo Go. Your phone and computer should normally be on the same Wi-Fi. If needed, run `npx expo start --tunnel`.

## Building an Android APK later

A standalone installable APK requires an Expo Application Services cloud build and an Expo account. Follow the guide in `docs/ANDROID_AND_WEB.md`; this ZIP does not contain a prebuilt APK.

---

# Optional Python mathematics backend

The current frontend starter works independently for its included local tools. The Python backend is optional and is not automatically deployed by the Vercel frontend configuration.

See `backend/README.md` (or `docs/ANDROID_AND_WEB.md`) for local backend setup.

# Project roadmap

1. Foundation — included
2. Interactive Geometry Studio
3. Mathematics Engine
4. Advanced Graphing
5. AI Mathematics Tutor
6. 3D Mathematics and Animation
7. Learning Management System
8. Advanced Features
9. Testing and Security
10. Launch and Publishing

We will add these capabilities in tested, incremental ZIP updates. Do not publish API keys or passwords in this repository.
