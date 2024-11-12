import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', 
  },
});

export default notification;
