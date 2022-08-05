import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

//Externals
import _ from 'lodash';

//Components
import TagGroup from './TagGroup';
import type { TagButtonProps } from './typings';

const TagButton: React.FC<TagButtonProps> = ({
  dataSource,
  onTagSelected,
  icon,
  tagContainerStyle,
  textStyle,
  activeTagContainerStyle,
  activeTextStyle,
  sortTags = false,
  position = {
    bottom: 10,
    right: 5,
  },
  //singleChoiceMode = false,
  tintColor = '#00a8ff',
  touchableOpacity = false,
  direction = 'column',
  animationDuration = 200,
}) => {
  const [animation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);
  const tagGroupRef = React.useRef<any>(null);

  //sort the tags alphabetically if the props is set to true
  const sortedTag = React.useMemo(
    () =>
      sortTags
        ? _.sortBy(
            dataSource.map((tag) => {
              return { value: tag.value, label: tag.label };
            }),
            (tag) => tag.label
          )
        : dataSource,
    [dataSource, sortTags]
  );

  //open the tag group with animation
  const toggleOpen = () => {
    const toValue = open ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: animationDuration, //in milliseconds
      useNativeDriver: false,
    }).start();

    setOpen(!open);
  };

  const animatedTagStyle = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  //the callback function that is called when a tag is selected
  const OnTagSelected = (tags: string[]) => {
    onTagSelected(tags);
  };

  return (
    <View style={[styles.container, { ...position, flexDirection: direction }]}>
      <Animated.View style={[styles.tagContainer, animatedTagStyle]}>
        <TagGroup
          ref={tagGroupRef}
          source={sortedTag}
          onSelectedTagChanged={OnTagSelected}
          //singleChoiceMode={singleChoiceMode}
          tintColor={tintColor}
          activeTagStyle={activeTagContainerStyle}
          activeTextStyle={activeTextStyle}
          tagStyle={[styles.tag, tagContainerStyle]}
          textStyle={[styles.tagText, textStyle]}
          touchableOpacity={touchableOpacity}
          style={{ flexDirection: direction }}
        />
      </Animated.View>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <View>{icon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TagButton;

//default styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagContainer: {
    alignSelf: 'center',
  },
  tag: {
    backgroundColor: '#787878',
    borderRadius: 180,
    width: 75,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
