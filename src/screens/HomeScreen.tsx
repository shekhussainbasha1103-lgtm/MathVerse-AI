import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import Panel from '../components/Panel';

type Tab = 'Home' | 'Geometry' | 'Calculator' | 'Graphs';
export default function HomeScreen({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const tiles: { title: string; desc: string; tab: Tab; symbol: string }[] = [
    { title: 'Geometry Studio', desc: 'Construct shapes step by step', tab: 'Geometry', symbol: '△' },
    { title: 'Scientific Calculator', desc: 'Evaluate mathematical expressions', tab: 'Calculator', symbol: '∑' },
    { title: '2D Graph Plotter', desc: 'Visualize functions and curves', tab: 'Graphs', symbol: 'ƒ(x)' }
  ];
  return <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.hero}>
      <Text style={styles.eyebrow}>YOUR DIGITAL MATH LAB</Text>
      <Text style={styles.heroTitle}>Explore. Create.{'\n'}Understand.</Text>
      <Text style={styles.heroText}>A visual workspace for learning mathematics through interactive tools.</Text>
      <View style={styles.heroOrb}><Text style={styles.orbText}>π</Text></View>
    </View>
    <View style={styles.sectionRow}><Text style={styles.section}>Explore tools</Text><Text style={styles.small}>STAGE 1</Text></View>
    {tiles.map(tile => <Pressable key={tile.title} onPress={() => onNavigate(tile.tab)} style={styles.tile}>
      <View style={styles.icon}><Text style={styles.iconText}>{tile.symbol}</Text></View>
      <View style={{ flex: 1 }}><Text style={styles.tileTitle}>{tile.title}</Text><Text style={styles.tileDesc}>{tile.desc}</Text></View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>)}
    <Panel title="Coming next">
      <Text style={styles.coming}>AI Math Scanner · 3D Explorer · Theorem Library · Engineering Drawing · Personalized Practice</Text>
    </Panel>
    <Text style={styles.footer}>MathVerse AI • Built to make mathematics visual</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  hero: { backgroundColor: '#123D76', borderRadius: 24, padding: 22, minHeight: 205, overflow: 'hidden', marginBottom: 22 },
  eyebrow: { color: '#9FC7FF', fontWeight: '800', fontSize: 10, letterSpacing: 1.6 },
  heroTitle: { color: '#FFFFFF', fontSize: 30, fontWeight: '900', marginTop: 12, lineHeight: 34 },
  heroText: { color: '#D7E7FF', fontSize: 12, marginTop: 9, maxWidth: '78%', lineHeight: 18 },
  heroOrb: { position: 'absolute', right: -8, bottom: 12, width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#72B0FF', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1D5595' },
  orbText: { color: '#FFFFFF', fontSize: 54, fontWeight: '300' },
  sectionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  section: { color: '#17375F', fontSize: 18, fontWeight: '800' },
  small: { color: '#2878E5', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  tile: { backgroundColor: '#FFFFFF', borderRadius: 17, borderWidth: 1, borderColor: '#E4EDFA', padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  icon: { width: 46, height: 46, borderRadius: 14, backgroundColor: '#EAF3FF', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  iconText: { color: '#1766CC', fontWeight: '800', fontSize: 21 },
  tileTitle: { color: '#17375F', fontWeight: '800', fontSize: 14 },
  tileDesc: { color: '#7B8BA2', fontSize: 11, marginTop: 4 },
  arrow: { color: '#2878E5', fontSize: 27, paddingHorizontal: 5 },
  coming: { color: '#61758F', lineHeight: 21, fontSize: 12 },
  footer: { color: '#98A7BB', textAlign: 'center', fontSize: 10, marginTop: 12 }
});
