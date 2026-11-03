# Android and Web delivery

MathVerse AI uses one Expo/React Native codebase for Android and Web.

- Website development: `npm run web`
- Android development: `npx expo start`, then open with Expo Go; or `npm run android` with an emulator.
- Android APK: configure EAS and run `npx eas-cli build --platform android --profile preview`.
- Website export: `npm run web:export`, then deploy the generated `dist/` folder.

A cloud build and a hosting account are required for distributable releases. No APK or hosted website is included in this source ZIP.
