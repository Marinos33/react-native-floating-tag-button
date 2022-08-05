import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type TagSource = {
  value: string;
  label: string;
};

export type TagButtonProps = {
  dataSource: TagSource[];
  onTagSelected: (tags: string[] | string) => void;
  icon: JSX.Element;
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  tagContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTagContainerStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  tintColor?: string;
  //singleChoiceMode?: boolean; need to be fixed
  touchableOpacity?: boolean;
};
