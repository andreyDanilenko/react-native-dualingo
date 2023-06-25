import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AwardScreen, HomeScreen, StatsScreen } from '../../views';

const Stack = createNativeStackNavigator();

function StatsStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Stats" component={StatsScreen} />
      <Stack.Screen name="Award" component={AwardScreen} />
    </Stack.Navigator>
  );
}

export default StatsStackNavigation