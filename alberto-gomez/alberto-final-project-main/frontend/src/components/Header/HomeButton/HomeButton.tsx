import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

function HomeButton () {
  const navigation = useNavigation()
  return (
      <View >
          <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard')}
              style={styles.homeContainer}
              testID="toDashboard"
          >
              <Text>
                  Go Home
                  {' '}
                  {' '}
              </Text>
              <FontAwesome5
                  name='home'
                  style={{ fontSize: 20 }}
              />
          </TouchableOpacity>
      </View>
  )
}

export default HomeButton
