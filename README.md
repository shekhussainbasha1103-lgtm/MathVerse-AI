# MathVerse AI — Android + Website starter

This single Expo + React Native + TypeScript project targets **Android and Web** from one codebase.

## What is included now (Stage 1)

- Premium blue-and-white dashboard
- Geometry demonstration screen
- Scientific calculator
- Basic 2D graph plotter
- Optional FastAPI + SymPy backend starter
- Roadmap and architecture documentation

**Important:** This ZIP is the Stage 1 starter foundation for Android and the website. It is not the complete final product, does not contain all ten planned stages, and is not yet a published Android app or deployed website. We will implement and test the remaining features stage by stage.

## Requirements

- Windows 10/11
- Node.js LTS (npm included)
- Android phone with Expo Go, or Android Studio emulator
- Python 3.10+ only if you want to run the optional backend

## Run the website locally

Open PowerShell in this `MathVerseAI` folder:

```powershell
npm install
npm run web
```

Expo will show a local URL. Open it in your browser.

## Run on an Android phone

1. Install **Expo Go** from Google Play on your Android phone.
2. Connect your phone and computer to the same Wi-Fi.
3. In PowerShell, run:

```powershell
npm install
npx expo start
```

4. Scan the QR code using Expo Go.

If the connection does not work, try:

```powershell
npx expo start --tunnel
```

## Run using an Android emulator

Install Android Studio and create/start an Android Virtual Device. Then run:

```powershell
npm install
npm run android
```

## Build an installable Android APK (preview)

For a distributable APK, use Expo Application Services (EAS). You need an Expo account and internet access.

```powershell
npm install
npx eas-cli login
npx eas-cli build:configure
```

Create an `eas.json` file in the project root with:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

Then build the preview APK:

```powershell
npx eas-cli build --platform android --profile preview
```

EAS will provide a build link when the cloud build completes. This ZIP itself does not contain a ready-made APK.

## Prepare a website build

```powershell
npm install
npm run web:export
```

The exported website files are created in the `dist` folder. You can later deploy that folder to a hosting provider such as GitHub Pages, Netlify or Vercel. Hosting setup and production configuration are not included yet.

## Optional mathematics backend

Open a second PowerShell window:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Test `http://127.0.0.1:8000/health`.

## Upload to GitHub

Create a repository named `MathVerse-AI`. Extract this ZIP, open the extracted project folder, then upload the **contents** of the `MathVerseAI` folder to the repository. Do not upload only the ZIP if you want GitHub to display the source files.

## Planned development stages

1. Foundation (included in this ZIP)
2. Interactive Geometry Studio
3. Mathematics Engine
4. Advanced Graphing
5. AI Mathematics Tutor
6. 3D Mathematics and Animation
7. Learning Management System
8. Advanced Features
9. Testing and Security
10. Launch and Publishing

## Security and production notes

Before public release, add proper authentication, backend authorization, rate limits, input validation, monitoring, HTTPS, privacy controls, automated tests and production deployment configuration. Keep all private API keys on the server, never in the mobile/web client.
