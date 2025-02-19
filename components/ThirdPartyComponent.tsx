import { StyleProp, Text, View, ViewStyle } from 'react-native';

type ThirdPartyComponentProps = {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const ThirdPartyComponent = (props: ThirdPartyComponentProps) => {
  console.log(props);

  return (
    <View style={props.style}>
      <View style={props.containerStyle}>
        <Text>Third Party Component</Text>
      </View>
    </View>
  );
};
