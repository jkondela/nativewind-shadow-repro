import { cssInterop } from 'nativewind';
import { Text, View } from 'react-native';

import { ThirdPartyComponent } from './ThirdPartyComponent';

const StyledThirdPartyComponent = cssInterop(ThirdPartyComponent, {
  className: {
    target: 'style',
  },
  containerClassname: {
    target: 'containerStyle',
  },
});

export const ScreenContent = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {/* With "shadow-lg" */}
      <View className="mb-12">
        <Text className="mb-4 text-2xl font-bold">With shadow-lg (blue background is working)</Text>
        <StyledThirdPartyComponent
          className="bg-blue-500 p-4"
          containerClassname="border border-grey-200 bg-white shadow-lg shadow-grey-300"
        />
      </View>
      {/* Without "shadow-lg" */}
      <View className="mb-12">
        <Text className="mb-4 text-2xl font-bold">Without shadow-lg (blue background missing)</Text>
        <StyledThirdPartyComponent
          className="bg-blue-500 p-4"
          containerClassname="border border-grey-200 bg-white shadow-grey-300"
        />
      </View>
    </View>
  );
};
