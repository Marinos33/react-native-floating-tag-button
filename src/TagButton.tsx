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

const TagButton = ({
  dataSource,
  onTagSelected,
  icon,
  position,
  tagContainerStyle,
  textStyle,
  activeTagContainerStyle,
  activeTextStyle,
  singleChoiceMode = false,
  tintColor = '#00a8ff',
  touchableOpacity = false,
}: TagButtonProps) => {
  const [animation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);
  const tagGroupRef = React.useRef<any>(null);

  const sortedTag = React.useMemo(
    () =>
      _.sortBy(
        dataSource.map((tag) => {
          return { value: tag.value, label: tag.label };
        }),
        (tag) => tag.label
      ),
    [dataSource]
  );

  const toggleOpen = () => {
    const toValue = open ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setOpen(!open);
  };

  const toggleInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70],
  });

  const animatedTagStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: toggleInterpolate,
      },
    ],
  };

  const OnTagSelected = (tags: string[] | string) => {
    onTagSelected(tags);
  };

  return (
    <View style={[styles.container, { ...position }]}>
      <Animated.View style={[styles.tagContainer, animatedTagStyle]}>
        <TagGroup
          ref={tagGroupRef}
          source={sortedTag}
          onSelectedTagChanged={OnTagSelected}
          singleChoiceMode={singleChoiceMode}
          tintColor={tintColor}
          activeTagStyle={activeTagContainerStyle}
          activeTextStyle={activeTextStyle}
          tagStyle={[styles.tag, tagContainerStyle]}
          textStyle={[styles.tagText, textStyle]}
          touchableOpacity={touchableOpacity}
        />
      </Animated.View>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <View>{icon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TagButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 10,
    right: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagContainer: {
    marginBottom: -70,
  },
  tag: {
    backgroundColor: '#787878',
    minWidth: '15%',
    borderRadius: 180,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
  },
});
