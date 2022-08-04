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

export const Tag = React.forwardRef(
  (
    {
      text = 'tag',
      onSelectStateChange,
      allowUnselect = false,
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
    const [selected, setSelected] = React.useState(false);

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
      if (allowUnselect) {
        setSelected(true);
      } else {
        setSelected(!selected);
      }
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
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
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
