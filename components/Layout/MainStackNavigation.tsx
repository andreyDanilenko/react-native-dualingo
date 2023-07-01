import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '../../views/GameScreen/GameScreen';
import HomeTabNavigation from './HomeTabNavigation';

const MainStack = createNativeStackNavigator();
// https://reactnavigation.org/docs/tab-view
function MainStackNavigation() {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name="Main" component={HomeTabNavigation} />
                <MainStack.Screen name="Game" component={GameScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation