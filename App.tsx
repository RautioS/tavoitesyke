import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setage] = useState('')

  const parsedAge = Number(age.trim())
  const isValidAge = !isNaN(parsedAge) && age.trim() !== '' && parsedAge > 0
  const lowerLimit = isValidAge ? (220 - parsedAge) * 0.65 : 0
  const upperLimit = isValidAge ? (220 - parsedAge) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limit Calculator</Text>
      <Text style={styles.heading2}>Enter your age:</Text>
      <TextInput style={styles.input}
        keyboardType='number-pad'
        value={age}
        onChangeText={setage}
      />
      <Text style={styles.label}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text style={styles.label}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 20,
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '20%',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  label: {
    padding: 5
  }
});
