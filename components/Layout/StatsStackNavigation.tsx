import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AwardsScreen, StatsScreen } from '../../views';

const Stack = createNativeStackNavigator();
// https://reactnavigation.org/docs/tab-view
function StatsStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Stats" component={StatsScreen} />
      <Stack.Screen name="Awards" component={AwardsScreen} />
    </Stack.Navigator>
  );
}

export default StatsStackNavigation