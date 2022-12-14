import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

type TagProps = {
  text: string;
  onSelectStateChange: () => void;
  allowUnselect?: boolean;
  touchableOpacity?: boolean;
  onPress?: () => void;
  textStyle?: any;
  activeTextStyle?: any;
  tagStyle?: any;
  activeTagStyle?: any;
  tintColor?: string;
};

//the one tag element

export const Tag = React.forwardRef(
  (
    {
      text = 'tag',
      onSelectStateChange,
      //allowUnselect = false,
      touchableOpacity,
      onPress,
      textStyle,
      activeTextStyle,
      tagStyle,
      activeTagStyle,
      tintColor = '#FCDB29',
    }: TagProps,
    ref
  ) => {
    const [selected, setSelected] = React.useState(false); //define if the tag is selected or not

    React.useImperativeHandle(ref, () => ({
      setSelected: () => {
        setSelected(true);
      },
      clearState: () => {
        setSelected(false);
      },
    }));

    const onTagPress = () => {
      onSelectStateChange();
      /* a mode to disable the tag selection, not use for now
      if (allowUnselect) {
        setSelected(true);
      } else {
        setSelected(!selected);
      }*/
      setSelected(!selected);
    };

    const textComponent = (
      <Text
        style={[styles.textStyle, textStyle].concat(
          selected ? activeTextStyle || styles.selectedTextStyle : null
        )}
      >
        {text}
      </Text>
    );

    const content = (
      <View
        style={[
          styles.tagBackground,
          { borderColor: tintColor },
          tagStyle,
        ].concat(
          selected ? activeTagStyle || { backgroundColor: tintColor } : null
        )}
      >
        {tagStyle && activeTagStyle ? (
          <View>{textComponent}</View>
        ) : (
          textComponent
        )}
      </View>
    );

    if (touchableOpacity) {
      return (
        <TouchableOpacity onPress={onPress || onTagPress}>
          {content}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableWithoutFeedback onPress={onPress || onTagPress}>
        {content}
      </TouchableWithoutFeedback>
    );
  }
);

Tag.displayName = 'Tag';

const styles = StyleSheet.create({
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
