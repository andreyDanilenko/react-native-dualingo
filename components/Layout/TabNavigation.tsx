
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    ProfileScreen,
    RankScreen,
    NewsletterScreen,
    PlanScreen,
    StatsScreen,
    HomeScreen
} from '../../views'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import StatsStackNavigation from './StatsStackNavigation';

const Tab = createBottomTabNavigator();

const icons = {
    Home: require('../../assets/navigation/nav-home.png'),
    Profile: require('../../assets/navigation/nav-profile.png'),
    Plan: require('../../assets/navigation/nav-dumbbell.png'),
    Rank: require('../../assets/navigation/nav-shield.png'),
    Stats: require('../../assets/navigation/nav-chest.png'),
    Newsletter: require('../../assets/navigation/nav-bell.png'),
};

function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={[styles.navigator, { flexDirection: 'row' }]}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.imageContainer}
                    >
                        <View  style={[styles.imageBlock, isFocused && styles.blockFocused]}>
                            <Image
                                style={[styles.image]}
                                resizeMode="contain"
                                source={icons[route.name]} />
                        </View>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Plan" component={PlanScreen} />
                <Tab.Screen name="Rank" component={RankScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Stats" component={StatsStackNavigation} options={{ headerShown: false }}/>
                <Tab.Screen name="Newsletter" component={NewsletterScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigator: {
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 15,
        paddingTop: 15,
        borderTopWidth: 2,
        borderTopColor: 'lightgrey',
        backgroundColor: '#58CC02',
    },
    imageContainer: {},
    imageBlock: {
        borderWidth: 2,
        borderColor: 'transparent',
        height: 40,
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 10,
    },
    image: {
        marginTop: -14,
        width: 30,
    },
    blockFocused: {
        borderWidth: 2,
        borderColor: '#1cb0f6',
        backgroundColor: '#1cb0f630'
    },


});

export default TabNavigation; 