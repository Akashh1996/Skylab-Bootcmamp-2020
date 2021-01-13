import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../Dashboard/Dashboard'
import Marketplace from '../Marketplace/Marketplace'
import Forum from '../Forum/Forum'
import Events from '../Events/Events'

const Tab = createBottomTabNavigator()

function FooterNav () {
  return (
      <Tab.Navigator
          activeColor="#f0edf6"
          barStyle={{ backgroundColor: 'lightblue' }}
          inactiveColor="red"
          initialRouteName="Dashboard"
      >

          <Tab.Screen
              component={Dashboard}
              name="Dashboard"
          />

          <Tab.Screen
              component={Marketplace}
              name="Marketplace"
          />
          <Tab.Screen
              component={Forum}
              name="Forum"
          />
          <Tab.Screen
              component={Events}
              name="Events"
          />
      </Tab.Navigator>
  )
}

export default FooterNav
