import React, { useMemo, useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Svg, { Line, Polyline, Circle } from 'react-native-svg';
import { evaluate } from 'mathjs';
import Panel from '../components/Panel';

export default function GraphScreen() {
  const [fn, setFn] = useState('x^2 - 4');
  const [plotFn, setPlotFn] = useState('x^2 - 4');
  const [error, setError] = useState('');
  const points = useMemo(() => {
    const result: string[] = [];
    try {
      for (let x = -5; x <= 5.001; x += 0.1) {
        const y = Number(evaluate(plotFn, { x }));
        if (!Number.isFinite(y) || Math.abs(y) > 20) { result.push(''); continue; }
        const sx = 170 + x * 28;
        const sy = 112 - y * 5;
        result.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
      }
    } catch { return []; }
    return result;
  }, [plotFn]);
  function plot() {
    try { evaluate(fn, { x: 1 }); setPlotFn(fn); setError(''); }
    catch { setError('Invalid function. Try x^2, sin(x), or 2*x+1.'); }
  }
  return <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>2D Graph Plotter</Text><Text style={styles.sub}>Plot a function of x and explore its shape.</Text>
    <Panel title="Function f(x)">
      <TextInput value={fn} onChangeText={setFn} autoCapitalize="none" style={styles.input} placeholder="e.g. x^2 - 4"/>
      <Pressable onPress={plot} style={styles.button}><Text style={styles.buttonText}>Plot graph</Text></Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.graph}>
        <Svg viewBox="0 0 340 225" width="100%" height={225}>
          {[-4,-3,-2,-1,1,2,3,4].map(v => <Line key={'v'+v} x1={170+v*28} y1="0" x2={170+v*28} y2="225" stroke="#E7EEF8" strokeWidth="1"/>)}
          {[-4,-3,-2,-1,1,2,3,4].map(v => <Line key={'h'+v} x1="0" y1={112-v*25} x2="340" y2={112-v*25} stroke="#E7EEF8" strokeWidth="1"/>)}
          <Line x1="0" y1="112" x2="340" y2="112" stroke="#7890AD" strokeWidth="1.5"/><Line x1="170" y1="0" x2="170" y2="225" stroke="#7890AD" strokeWidth="1.5"/>
          {points.length > 1 && <Polyline points={points.filter(Boolean).join(' ')} fill="none" stroke="#2878E5" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round"/>}
          <Circle cx="170" cy="112" r="3" fill="#17375F"/>
        </Svg>
      </View>
      <Text style={styles.caption}>Current function: f(x) = {plotFn}</Text>
    </Panel>
    <Panel title="Try these functions">
      <View style={styles.examples}>{['x^2', '2*x+1', 'sin(x)', 'cos(x)', 'x^3/5'].map(v => <Pressable key={v} onPress={() => {setFn(v); setPlotFn(v); setError('');}} style={styles.example}><Text style={styles.exampleText}>{v}</Text></Pressable>)}</View>
    </Panel>
    <Text style={styles.note}>Stage 1 graphing uses a simple fixed viewing window. Later stages will add zoom, pan, multiple functions, roots, intersections, derivatives and 3D plots.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 }, heading: { color: '#17375F', fontSize: 23, fontWeight: '900' }, sub: { color: '#71839C', fontSize: 12, marginTop: 5, marginBottom: 16 }, input: { backgroundColor: '#F7FAFF', borderWidth: 1, borderColor: '#DCE8F8', borderRadius: 12, padding: 14, color: '#17375F', fontSize: 15 }, button: { backgroundColor: '#1766CC', borderRadius: 12, padding: 13, alignItems: 'center', marginTop: 10 }, buttonText: { color: '#FFFFFF', fontWeight: '800' }, graph: { backgroundColor: '#FBFDFF', borderWidth: 1, borderColor: '#E2ECFA', borderRadius: 12, overflow: 'hidden', marginTop: 15 }, caption: { color: '#647A97', fontSize: 11, marginTop: 9 }, examples: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, example: { backgroundColor: '#EDF4FF', borderRadius: 9, paddingHorizontal: 12, paddingVertical: 9 }, exampleText: { color: '#1766CC', fontWeight: '700', fontSize: 11 }, error: { color: '#B44343', marginTop: 8, fontSize: 11 }, note: { color: '#8A9AB0', fontSize: 10, lineHeight: 16 }
});
