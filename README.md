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

| Prop                                 | Description                                                                       | Type                       |Default                |
| ------------------------------------ | ----------------------------------------------------------------------------      | ---------------------------|---------------------- |
| **`dataSource`**                     | the tags to display and use.                                                      | `TagSource[]`              |`[]`                   |
| **`onTagSelected`**                  | the callback method when a tag is selected.                                       | `(tags: string[]) => void` |`none`                 |
| **`icon`**                           | the element to display as the main button to hide and show the tags.              | `JSX.Element`              |`none`                 |
| **`sortTags`**                       | if true, the tags will be sorted alphabetically.                                  | `boolean`                  |`false`                |
| **`position`**                       | an object to define the position of the button on the screen.                     | ` `                        |` `                    |
| **`direction`**                      | define the direction of the alignement between the floating button and his tags.  | ` `                        |` `                    |
| **`tagContainerStyle`**              | the style of the container of the tags.                                           | `StyleProp<ViewStyle>`     |` `                    |
| **`textStyle`**                      | the style of the labels of the tags.                                              | `StyleProp<TextStyle>`     |` `                    |
| **`activeTagContainerStyle`**        | the style of the container of the tags when selected.                             | `StyleProp<ViewStyle>`     |` `                    |
| **`activeTextStyle`**                | the style of the labels of the tags when selected.                                | `StyleProp<TextStyle>`     |` `                    |
| **`tintColor?`**                     | the color of the border of the tags.                                              | `string`                   |` `                    |
| **`touchableOpacity?`**              | if true, the tags will use a touchable opacity feedback.                          | `boolean`                  |` `                    |
| **`animationDuration?`**             | the duration of the animation when the tags are shown.                            | `number`                   |` `                    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository.

## License

MIT
