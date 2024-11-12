import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EXPLORA</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SIGN IN')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('LOG IN')}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48af94', 
  },
  text: {
    fontSize: 24,
    fontFamily: 'Your-Font-Family', 
    color: '#010a07',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#010a07', 
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
  },
});
