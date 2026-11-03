# Install MathVerse AI from its Vercel website

This project now includes Progressive Web App (PWA) installation support: a web manifest, app icons, service-worker registration, and an in-app Install App button. It remains the same Expo/React Native project; no Streamlit conversion is needed.

## Publish
1. Upload/replace the project files in your GitHub repository, preserving the folder structure.
2. Commit the changes. If Vercel is connected to that repository, it will deploy automatically.
3. Open the HTTPS production website in Chrome on Android.
4. Tap **Install App** if shown. If the browser does not show the prompt, open Chrome's menu (⋮) and choose **Install app** or **Add to Home screen**.

## Notes
- Install prompts are controlled by the browser and may not appear until its installability checks pass. The site must be served over HTTPS.
- The service worker caches the app shell and successful same-origin GET responses. Features that require an internet connection, remote APIs, or uncached resources still need connectivity.
- iPhone/iPad users can use Safari's Share menu → Add to Home Screen; the browser may not expose the same custom install prompt.
- This creates an installable web app (PWA), not an APK. A separate Android package build is needed for Play Store distribution.
