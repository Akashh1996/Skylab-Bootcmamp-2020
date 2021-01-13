import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

function BackButton () {
  const { dispatch } = useNavigation()
  return (
      <View >
          <TouchableOpacity
              onPress={() => dispatch(CommonActions.goBack())}
              style={styles.backContainer}
              testID="goBackButton"
          >
              <FontAwesome5
                  name='arrow-left'
                  style={{ fontSize: 20 }}
              />
              <Text>
                  {' '}
                  {' '}
                  Go Back
              </Text>
          </TouchableOpacity>
      </View>

  )
}

const styles = StyleSheet.create({
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default BackButton
