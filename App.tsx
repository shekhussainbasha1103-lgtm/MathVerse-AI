import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import GeometryScreen from './src/screens/GeometryScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import GraphScreen from './src/screens/GraphScreen';

type Tab = 'Home' | 'Geometry' | 'Calculator' | 'Graphs';

export default function App() {
  const [tab, setTab] = useState<Tab>('Home');
  const screens = {
    Home: <HomeScreen onNavigate={(next: Tab) => setTab(next)} />,
    Geometry: <GeometryScreen />,
    Calculator: <CalculatorScreen />,
    Graphs: <GraphScreen />
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>MathVerse <Text style={styles.ai}>AI</Text></Text>
          <Text style={styles.subtitle}>One platform. All Mathematics.</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>M</Text></View>
      </View>
      <View style={styles.content}>{screens[tab]}</View>
      <View style={styles.nav}>
        {(['Home', 'Geometry', 'Calculator', 'Graphs'] as Tab[]).map((item) => (
          <Pressable key={item} onPress={() => setTab(item)} style={[styles.navItem, tab === item && styles.navActive]}>
            <Text style={[styles.navText, tab === item && styles.navTextActive]}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F4F8FF', paddingTop: StatusBar.currentHeight || 0 },
  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E3ECFA' },
  brand: { fontSize: 23, fontWeight: '800', color: '#102D55', letterSpacing: -0.7 },
  ai: { color: '#2878E5' },
  subtitle: { color: '#6B7F9C', fontSize: 11, marginTop: 2 },
  avatar: { height: 38, width: 38, borderRadius: 13, backgroundColor: '#DCEBFF', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#1766CC', fontWeight: '800', fontSize: 16 },
  content: { flex: 1 },
  nav: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E3ECFA', paddingVertical: 9, paddingHorizontal: 8, justifyContent: 'space-around' },
  navItem: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 12 },
  navActive: { backgroundColor: '#E6F0FF' },
  navText: { color: '#71819A', fontSize: 12, fontWeight: '600' },
  navTextActive: { color: '#1766CC' }
});
