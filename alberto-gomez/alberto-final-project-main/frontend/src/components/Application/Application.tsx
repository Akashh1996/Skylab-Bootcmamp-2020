import React from 'react'
import 'react-native-gesture-handler'
import Dashboard from '../Dashboard/Dashboard'
import List from '../List/List'
import Events from '../Events/Events'
import Forum from '../Forum/Forum'
import Marketplace from '../Marketplace/Marketplace'
import GameDetail from '../GameDetail/GameDetail'
import Profile from '../Profile/Profile'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

function Application () {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Dashboard') {
                iconName = focused
                  ? 'home'
                  : 'home'
              } else if (route.name === 'List') {
                iconName = focused
                  ? 'list'
                  : 'list'
              } else if (route.name === 'Events') {
                iconName = focused
                  ? 'trophy'
                  : 'trophy'
              } else if (route.name === 'Forum') {
                iconName = focused
                  ? 'comments'
                  : 'comments'
              } else if (route.name === 'Marketplace') {
                iconName = focused
                  ? 'store'
                  : 'store'
              }

              return (<FontAwesome5
                  color={color}
                  name={iconName}
                  size={size}
                      />)
            },
            tabBarButton: [
              'GameDetail', 'Profile'
            ].includes(route.name)
              ? () => {
                  return null
                } : undefined
          })}
      >
          <Tab.Screen
              component={Dashboard}
              name="Dashboard"
          />
          <Tab.Screen
              component={List}
              name="List"
          />
          <Tab.Screen
              component={Events}
              name="Events"
          />
          <Tab.Screen
              component={Forum}
              name="Forum"
          />
          <Tab.Screen
              component={Marketplace}
              name="Marketplace"
          />
          <Tab.Screen
              component={GameDetail}
              name="GameDetail"
          />
          <Tab.Screen
              component={Profile}
              name="Profile"
          />
      </Tab.Navigator>
  )
}

export default Application
