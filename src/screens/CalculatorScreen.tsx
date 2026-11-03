import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { evaluate } from 'mathjs';
import Panel from '../components/Panel';

export default function CalculatorScreen() {
  const [expression, setExpression] = useState('sqrt(144) + 5^2');
  const [result, setResult] = useState('169');
  const [error, setError] = useState('');
  function calculate() {
    try {
      const value = evaluate(expression);
      if (typeof value !== 'number' || !Number.isFinite(value)) throw new Error('Enter a valid numeric expression.');
      setResult(String(Number(value.toPrecision(12))));
      setError('');
    } catch {
      setError('Please check the expression. Try: 12*(5+3), sqrt(81), sin(pi/2).');
      setResult('');
    }
  }
  const examples = ['sqrt(81)', 'sin(pi/2)', 'log(100,10)', '5!'];
  return <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>Scientific Calculator</Text><Text style={styles.sub}>Evaluate expressions with common mathematical functions.</Text>
    <Panel title="Expression">
      <TextInput value={expression} onChangeText={setExpression} placeholder="Enter expression" autoCapitalize="none" style={styles.input}/>
      <Pressable onPress={calculate} style={styles.button}><Text style={styles.buttonText}>Calculate</Text></Pressable>
      {!!error && <Text style={styles.error}>{error}</Text>}
      {!!result && <View style={styles.resultBox}><Text style={styles.resultLabel}>RESULT</Text><Text selectable style={styles.result}>{result}</Text></View>}
    </Panel>
    <Panel title="Try an example">
      <View style={styles.examples}>{examples.map(x => <Pressable key={x} onPress={() => { setExpression(x); setError(''); setResult(''); }} style={styles.example}><Text style={styles.exampleText}>{x}</Text></Pressable>)}</View>
      <Text style={styles.hint}>Supported examples include +, −, ×, ÷, powers (^), sqrt(), sin(), cos(), tan(), log(), pi and factorial (!).</Text>
    </Panel>
    <Text style={styles.note}>Calculations are evaluated locally using Math.js. Avoid entering expressions from untrusted sources into any future custom scripting feature.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 }, heading: { color: '#17375F', fontSize: 23, fontWeight: '900' }, sub: { color: '#71839C', fontSize: 12, marginTop: 5, marginBottom: 16 }, input: { backgroundColor: '#F7FAFF', borderWidth: 1, borderColor: '#DCE8F8', borderRadius: 12, padding: 14, color: '#17375F', fontSize: 15 }, button: { backgroundColor: '#1766CC', borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 12 }, buttonText: { color: '#FFFFFF', fontWeight: '800' }, resultBox: { backgroundColor: '#EAF3FF', borderRadius: 12, padding: 14, marginTop: 14 }, resultLabel: { color: '#5B79A0', fontSize: 9, fontWeight: '900', letterSpacing: 1.3 }, result: { color: '#1456A6', fontSize: 28, fontWeight: '900', marginTop: 4 }, error: { color: '#B44343', marginTop: 10, fontSize: 11 }, examples: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, example: { backgroundColor: '#EDF4FF', borderRadius: 9, paddingHorizontal: 12, paddingVertical: 9 }, exampleText: { color: '#1766CC', fontWeight: '700', fontSize: 11 }, hint: { color: '#71839C', fontSize: 11, lineHeight: 17, marginTop: 12 }, note: { color: '#8A9AB0', fontSize: 10, lineHeight: 16 }
});
