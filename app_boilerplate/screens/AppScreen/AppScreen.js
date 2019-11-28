import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';
import DetailScreen from '../DetailScreen';



const IconWithBadge = ({ name, badgeCount, color, size }) => {
    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Ionicons name={name} size={size} color={color} />
            {badgeCount > 0 && (
                <View
                    style={{
                        // /If you're using react-native < 0.57 overflow outside of the parent
                        // will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                        {badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
}

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={2} />;
};


const HomeStack = createStackNavigator({
    'Inicio': {
        screen: HomeScreen,
        navigationOptions: () => ({
            headerShown: false,
        }),
    },
    'Detalle': {
        screen: DetailScreen,
        navigationOptions: () => ({
            title: `Detalles`,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#111111',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }),
    },
});

const TabNavigator = createBottomTabNavigator({
    'Destacados': HomeStack,
    'Buscar': SettingsScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Destacados') {
                    iconName = `ios-film`;
                } else if (routeName === 'Buscar') {
                    iconName = `ios-search`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#222222',
            inactiveBackgroundColor: '#111111'
        },
    });

const App = createAppContainer(TabNavigator)
export default App;