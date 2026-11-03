import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1766CC" />
        <meta name="description" content="Explore mathematics with MathVerse AI." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/mathverse-192.png" />
        <link rel="apple-touch-icon" href="/icons/mathverse-192.png" />
        <ScrollViewStyleReset />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: "if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js').catch(console.error)); }" }} />
      </body>
    </html>
  );
}
