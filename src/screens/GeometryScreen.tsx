import React, { useMemo, useState } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import Svg, { Line, Circle, Path, Text as SvgText } from 'react-native-svg';
import Panel from '../components/Panel';

type Mode = 'bisector' | 'circle' | 'triangle';
export default function GeometryScreen() {
  const [mode, setMode] = useState<Mode>('bisector');
  const [showSteps, setShowSteps] = useState(true);
  const diagram = useMemo(() => {
    if (mode === 'circle') return 'A circle with centre O and radius OA.';
    if (mode === 'triangle') return 'An equilateral triangle with equal sides.';
    return 'The perpendicular bisector of line segment AB.';
  }, [mode]);
  return <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>Geometry Studio</Text>
    <Text style={styles.sub}>Explore classical constructions with a virtual drawing board.</Text>
    <View style={styles.selector}>
      {([{ id: 'bisector', label: 'Bisector' }, { id: 'circle', label: 'Circle' }, { id: 'triangle', label: 'Triangle' }] as {id: Mode; label: string}[]).map(x =>
        <Pressable key={x.id} onPress={() => setMode(x.id)} style={[styles.chip, mode === x.id && styles.chipActive]}><Text style={[styles.chipText, mode === x.id && styles.chipTextActive]}>{x.label}</Text></Pressable>
      )}
    </View>
    <Panel title="Construction board">
      <View style={styles.canvas}>
        <Svg viewBox="0 0 340 230" width="100%" height={230}>
          {mode === 'bisector' && <>
            <Line x1="55" y1="145" x2="285" y2="145" stroke="#2878E5" strokeWidth="2.5"/>
            <Path d="M170 28 A117 117 0 0 1 170 262" stroke="#91BDF4" strokeWidth="1.6" fill="none" strokeDasharray="5 4"/>
            <Path d="M170 28 A117 117 0 0 0 170 262" stroke="#91BDF4" strokeWidth="1.6" fill="none" strokeDasharray="5 4"/>
            <Line x1="170" y1="35" x2="170" y2="205" stroke="#E28B37" strokeWidth="2.5"/>
            <Circle cx="55" cy="145" r="4" fill="#1766CC"/><Circle cx="285" cy="145" r="4" fill="#1766CC"/><Circle cx="170" cy="145" r="4" fill="#E28B37"/>
            <SvgText x="48" y="164" fill="#17375F" fontSize="12">A</SvgText><SvgText x="282" y="164" fill="#17375F" fontSize="12">B</SvgText><SvgText x="178" y="139" fill="#C77827" fontSize="12">M</SvgText>
            <SvgText x="177" y="48" fill="#C77827" fontSize="11">90°</SvgText>
          </>}
          {mode === 'circle' && <>
            <Circle cx="170" cy="112" r="78" stroke="#2878E5" strokeWidth="2.5" fill="#EAF3FF"/>
            <Line x1="170" y1="112" x2="248" y2="112" stroke="#E28B37" strokeWidth="2.5"/>
            <Circle cx="170" cy="112" r="4" fill="#17375F"/><Circle cx="248" cy="112" r="4" fill="#E28B37"/>
            <SvgText x="157" y="103" fill="#17375F" fontSize="12">O</SvgText><SvgText x="251" y="107" fill="#C77827" fontSize="12">A</SvgText>
          </>}
          {mode === 'triangle' && <>
            <Path d="M170 28 L65 200 L275 200 Z" fill="#EAF3FF" stroke="#2878E5" strokeWidth="2.5"/>
            <Line x1="170" y1="28" x2="170" y2="200" stroke="#E28B37" strokeWidth="1.5" strokeDasharray="5 4"/>
            <SvgText x="164" y="19" fill="#17375F" fontSize="12">A</SvgText><SvgText x="51" y="215" fill="#17375F" fontSize="12">B</SvgText><SvgText x="280" y="215" fill="#17375F" fontSize="12">C</SvgText>
          </>}
        </Svg>
      </View>
      <Text style={styles.caption}>{diagram}</Text>
      <Pressable style={styles.toggle} onPress={() => setShowSteps(!showSteps)}><Text style={styles.toggleText}>{showSteps ? 'Hide construction steps' : 'Show construction steps'}</Text></Pressable>
      {showSteps && <View style={styles.steps}>
        {(mode === 'bisector' ? ['Draw line segment AB.', 'Use equal-radius arcs from A and B.', 'Mark the two arc intersections.', 'Join the intersections to form the perpendicular bisector.'] : mode === 'circle' ? ['Choose a centre O.', 'Set the compass radius OA.', 'Rotate the compass through a full turn.', 'The locus forms a circle.'] : ['Mark three equally spaced vertices.', 'Join A to B, B to C and C to A.', 'All three sides are equal.']).map((s, i) => <Text key={s} style={styles.step}><Text style={styles.stepNum}>{i + 1}. </Text>{s}</Text>)}
      </View>}
    </Panel>
    <Text style={styles.note}>Stage 1 preview: the board demonstrates standard constructions. Later stages will add draggable points, a working compass, ruler, protractor, measurements and export.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 }, heading: { color: '#17375F', fontSize: 23, fontWeight: '900' }, sub: { color: '#71839C', fontSize: 12, marginTop: 5, marginBottom: 16, lineHeight: 18 },
  selector: { flexDirection: 'row', gap: 8, marginBottom: 14 }, chip: { borderRadius: 20, paddingVertical: 9, paddingHorizontal: 14, backgroundColor: '#E7EFFA' }, chipActive: { backgroundColor: '#1766CC' }, chipText: { color: '#536B89', fontWeight: '700', fontSize: 11 }, chipTextActive: { color: '#FFFFFF' },
  canvas: { backgroundColor: '#F7FAFF', borderRadius: 13, borderWidth: 1, borderColor: '#E2ECFA', overflow: 'hidden' }, caption: { color: '#647A97', fontSize: 11, marginTop: 10 }, toggle: { alignSelf: 'flex-start', marginTop: 13, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 9, backgroundColor: '#EAF3FF' }, toggleText: { color: '#1766CC', fontWeight: '800', fontSize: 11 }, steps: { marginTop: 10, gap: 8 }, step: { color: '#536B89', fontSize: 12, lineHeight: 18 }, stepNum: { color: '#1766CC', fontWeight: '900' }, note: { color: '#8A9AB0', fontSize: 10, lineHeight: 16, marginTop: 2 }
});
