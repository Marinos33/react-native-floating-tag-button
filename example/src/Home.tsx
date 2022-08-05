import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagButton from '../../src/TagButton';
import { TagSource } from '../../src/typings';
import { Ionicons } from '@expo/vector-icons';

function Home(): JSX.Element {
  const data: TagSource[] = [
    { value: 'test 1', label: 'test 1' },
    { value: 'test 2', label: 'test 2' },
    { value: 'test 3', label: 'test 3' },
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
        position={{ bottom: 15, right: 15, left: 15, top: 15 }}
        tagContainerStyle={{
          backgroundColor: 'red',
          marginRight: 10,
        }}
        animationDuration={200}
        textStyle={{ color: 'yellow', fontSize: 14 }}
        activeTagContainerStyle={{ backgroundColor: 'green' }}
        activeTextStyle={{ color: 'white' }}
        tintColor="black"
        direction="column"
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
