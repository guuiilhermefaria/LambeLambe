import React from 'react'

import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './src/pages/Feed'
import AddPhoto from './src/pages/AddPhoto'
import Profile from './src/pages/Profile'
import Login from './src/pages/Login'
import Register from './src/pages/Register'

const authRouter = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Registrar'
        }
    }
}, {
    initialRouteName: 'Login'
})


const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Profile'
})

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },
    AddPhoto: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor: color }) => <Icon name='user' size={30} color={color} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig))

export default MenuNavigator


