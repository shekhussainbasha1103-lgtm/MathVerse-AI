import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

export default function Panel({ title, children, style }: { title: string; children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.panel, style]}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>;
}
const styles = StyleSheet.create({
  panel: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#E4EDFA', marginBottom: 14, shadowColor: '#24466F', shadowOpacity: 0.04, shadowRadius: 12, elevation: 2 },
  title: { color: '#17375F', fontWeight: '800', fontSize: 16, marginBottom: 12 }
});
