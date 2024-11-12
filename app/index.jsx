import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO EXPLORA!</Text>
      <View style={styles.linkContainer}>
        <Link href="/Home" style={styles.link}>Go to Home</Link>
        <Link href="/GetStarted" style={styles.link}>Get Started</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48af94', // Sky blue color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00FFFF', // Cyan color
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  link: {
    fontSize: 18,
    color: '#FFFFFF', // White color for links
    textDecorationLine: 'underline',
  },
});
