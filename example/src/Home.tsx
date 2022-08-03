import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from '../../src/Toast';

function Home(): JSX.Element {
  const [visible, setVisible] = React.useState(false);

  function handleToastInside(): void {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToastInside}>
        <Text style={styles.text}>Press me (inside)</Text>
      </TouchableOpacity>
      <Toast visible={visible} text="Hello world!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#64B5F6',
    borderRadius: 8,
    alignSelf: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
});

export default Home;
