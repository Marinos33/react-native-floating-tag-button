import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { ToastType } from './typings';

const Toast = ({ text, visible }: ToastType) => {
  return visible ? (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#64B5F6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Toast;
