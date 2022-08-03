import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ToastProvider from './ToastProvider';
import type { ShowToast, ToastRef, ToastProps, RegisterRef } from './typings';
const Toast: React.ForwardRefRenderFunction<ToastRef, ToastProps> = (
  _props,
  ref
): JSX.Element | null => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState('');

  const showToast = (toastText: string, duration: number = 3000) => {
    setText(toastText);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      setText('');
    }, duration);
  };

  React.useImperativeHandle(ref, () => ({
    showToast,
  }));

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

export const register: RegisterRef = (ref: ToastRef): void => {
  ToastProvider.ref = ref;
};

export const showToast: ShowToast = (text: string, duration = 2500): void => {
  ToastProvider.ref?.showToast(text, duration);
};
