# react-native-filter-fab

//ajouter gif presentation package

A floating button with animated tags that you can add to.

## Installations

```
npm install react-native-floating-tag-button --save
yarn install react-native-floating-tag-button
```
##Usage

```js
import { TagSource, TagButton } from 'react-native-floating-tag-button';

const data: TagSource[] = [
   { value: 'Tag 1', label: 'test 1' },
   { value: 'Tag 2', label: 'test 2' },
   { value: 'Tag 3', label: 'test 3' },
];

const onSelect = (selectedTag: string[]) => {
   //do something with selectedTag
};

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
  position={{ bottom: 15, right: 15 }}
  tagContainerStyle={{
  backgroundColor: 'red',
  marginRight: 10,
  }}
  textStyle={{ color: 'yellow', fontSize: 14 }}
  activeTagContainerStyle={{ backgroundColor: 'green' }}
  activeTextStyle={{ color: 'white' }}
  tintColor="black"
  touchableOpacity />
```
### Properties

| Prop                                 | Description                                                                  | Type                |Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |---------------------- |
| **`dataSource`**                     | the tags to display and use`.                             | `true`                 |`true`       

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository.

## License

MIT
