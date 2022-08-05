import React from 'react';
import { View, StyleSheet } from 'react-native';

//Components
import { Tag } from './Tag';

type PropTypes = {
  source: { value: string; label: string }[];
  singleChoiceMode?: boolean;
  style?: any;
  onSelectedTagChanged: (selectedTagValue: string[], index?: number) => void;
  tintColor?: string;
  tagStyle?: any;
  activeTagStyle?: any;
  textStyle?: any;
  activeTextStyle?: any;
  touchableOpacity?: boolean;
};

const TagGroup = React.forwardRef(
  (
    {
      source,
      style,
      tintColor,
      tagStyle,
      activeTagStyle,
      textStyle,
      activeTextStyle,
      onSelectedTagChanged,
      singleChoiceMode = false,
      touchableOpacity = false,
    }: PropTypes,
    ref
  ) => {
    const [tagFlags, setTagFlags] = React.useState<any[]>(
      source.map(() => false)
    ); //retain tag state and allow it to be selected or cleared

    const [selectedTag, setSelectedTag] = React.useState<any[]>([]); // the selected tag array

    const onTagPress = (index: number) => {
      /* should allow only one tag to be selected at the same time, not working for now
      if (singleChoiceMode) {
        selectedTag.forEach((tag: any, tagIndex: number) => {
          if (tag && index !== tagIndex) {
            tag.clearState();
          }
        });

        let selected = getSelectedIndex();
        //@ts-ignore
        if (selected === -1 || selected[0] !== index) {
          onSelectedTagChanged(source[index].value, index);
        }
        const tags = tagFlags.filter(
          (_value, tagFlagIndex) => index === tagFlagIndex
        );
        setTagFlags(tags);
      }*/

      //add the tag to the array
      let copy = tagFlags;
      copy[index] = !copy[index];
      let selectedTags = source.filter((_value, index) => copy[index]);
      onSelectedTagChanged(selectedTags.map((select) => select.value));
      setTagFlags(copy);
    };

    /**
     * Get the index array of the selected Tag(s), return -1 if no Tag is selected.
     * */
    /*const getSelectedIndex = (): number | number[] => {
      let selected = tagFlags
        .map((item, index) => {
          if (item) return index;
          else return -1;
        })
        .filter((item) => item > -1);

      if (selected.length) {
        return selected;
      }
      return -1;
    };*/

    React.useImperativeHandle(ref, () => ({
      select: (index: number) => {
        if (index < selectedTag.length) {
          // the size of _tags may change as the source array changes,
          // so the item at {index} might not exists anymore.
          selectedTag[index] && selectedTag[index].setSelected();
          let copy = tagFlags;
          copy[index] = true;
          setTagFlags(copy);
        }
      },
      unselect: (index: number) => {
        if (index < selectedTag.length) {
          selectedTag[index] && selectedTag[index].clearState();

          let copy = tagFlags;
          copy[index] = true;
          setTagFlags(copy);
        }
      },
    }));

    React.useEffect(() => {
      setSelectedTag([]);
    }, [tagFlags]);

    return (
      <View style={[styles.tagContainer].concat(style)}>
        {source.map((tag, index) => (
          <Tag
            key={index}
            ref={(ref: any) => (selectedTag[index] = ref)}
            text={tag.label}
            textStyle={textStyle}
            activeTextStyle={activeTextStyle}
            touchableOpacity={touchableOpacity}
            activeTagStyle={activeTagStyle}
            tagStyle={[styles.tag, tagStyle]}
            tintColor={tintColor}
            allowUnselect={singleChoiceMode && tagFlags[index]}
            onSelectStateChange={() => onTagPress(index)}
          />
        ))}
      </View>
    );
  }
);

TagGroup.displayName = 'TagGroup';

export default TagGroup;

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  tag: {
    margin: 4,
  },
  tagBackground: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
  },
  textStyle: {
    color: '#666',
    fontSize: 13,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  selectedTextStyle: {
    color: '#333',
  },
});
