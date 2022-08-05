import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagButton from '../../src/TagButton';
import { TagSource } from '../../src/typings';
import { Ionicons } from '@expo/vector-icons';

function Home(): JSX.Element {
  const data: TagSource[] = [
    { value: 'Free', label: 'free' },
    { value: 'Open', label: 'open' },
    { value: 'Public', label: 'public' },
  ];

  const onSelect = (selectedTag: string[]) => {
    console.log(selectedTag);
  };

  return (
    <View style={styles.container}>
      <TagButton
        dataSource={data}
        onTagSelected={onSelect}
        icon={
          <Ionicons
            name="menu"
            size={24}
            color="white"
            style={{ backgroundColor: 'blue', borderRadius: 180, padding: 10 }}
          />
        }
        position={{ bottom: 10, right: 5 }}
        tagContainerStyle={{ backgroundColor: 'red', marginRight: 10 }}
        textStyle={{ color: 'yellow', fontSize: 14 }}
        activeTagContainerStyle={{ backgroundColor: 'green' }}
        activeTextStyle={{ color: 'white' }}
        tintColor="black"
        touchableOpacity
      />
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
