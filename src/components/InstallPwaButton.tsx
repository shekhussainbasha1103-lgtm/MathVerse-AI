import React, { useEffect, useState } from 'react';
import { Platform, Pressable, Text, StyleSheet } from 'react-native';

type InstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };

declare global { interface Window { __mathVerseInstallPrompt?: InstallPromptEvent } }

export default function InstallPwaButton() {
  const [available, setAvailable] = useState(false);
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const onPrompt = (event: Event) => {
      event.preventDefault();
      window.__mathVerseInstallPrompt = event as InstallPromptEvent;
      setAvailable(true);
    };
    const onInstalled = () => { setInstalled(true); setAvailable(false); window.__mathVerseInstallPrompt = undefined; };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    const isStandalone = window.matchMedia?.('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    setInstalled(Boolean(isStandalone));
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.removeEventListener('appinstalled', onInstalled); };
  }, []);
  if (Platform.OS !== 'web' || installed) return null;
  const install = async () => {
    const promptEvent = typeof window !== 'undefined' ? window.__mathVerseInstallPrompt : undefined;
    if (promptEvent) {
      await promptEvent.prompt();
      await promptEvent.userChoice;
      window.__mathVerseInstallPrompt = undefined;
      setAvailable(false);
    } else if (typeof window !== 'undefined') {
      window.alert('To install MathVerse AI, open your browser menu (⋮) and choose “Install app” or “Add to Home screen”.');
    }
  };
  return (
    <Pressable accessibilityRole="button" onPress={install} style={styles.button}>
      <Text style={styles.label}>{available ? 'Install App' : 'Add to Home'}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({ button: { backgroundColor: '#1766CC', paddingHorizontal: 12, paddingVertical: 9, borderRadius: 10 }, label: { color: '#FFFFFF', fontWeight: '700', fontSize: 12 } });
