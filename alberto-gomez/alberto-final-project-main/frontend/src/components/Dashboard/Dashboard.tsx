import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { propsInterface } from '../../interfaces/interfaces'

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1
  }
})

function Dashboard ({ userObject }: propsInterface) {
  return (
      <View style={styles.body}>

          <Text>
              Welcome
              {' '}
              {userObject?.name}
              !
          </Text>

      </View>
  )
}

function mapStateToProps ({ userReducer }: any) {
  return {
    userObject: userReducer?.userObject

  }
}

export default connect(mapStateToProps)(Dashboard)
