import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
      <Text>hello</Text>
      <TagButton
        dataSource={data}
        onTagSelected={onSelect}
        icon={<Ionicons name="menu" size={24} color={'white'} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
