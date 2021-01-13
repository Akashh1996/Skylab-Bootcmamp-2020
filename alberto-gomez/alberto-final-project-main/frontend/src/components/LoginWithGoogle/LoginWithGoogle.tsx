import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { loginGoogle, sendUser, loadUser } from '../../redux/actions/userActions'
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  supportContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  welcomeText: {
    fontFamily: 'serif',
    fontSize: 20,
    marginBottom: 50
  }
})

function LoginWithGoogle ({ dispatch, user, navigation }: props) {
  function handleLoggingClick () {
    dispatch(loginGoogle())
  }
  useEffect(() => {
    if (user.id) {
      dispatch(sendUser({ id: user?.id, name: user?.name, photoUrl: user?.photoUrl }))
      dispatch(loadUser(user?.id))
      navigation.navigate('Application', { screen: 'List' })
    } else {
      navigation.navigate('LoginWithGoogle')
    }
  }, [user])

  return (
      <View style={styles.container}>
        <ImageBackground
            source={{ uri: 'https://www.wpr.org/sites/default/files/styles/resp_orig_custom_user_wide_1x/https/wpr-public.s3.amazonaws.com/ttbook/styles/story_full_image/s3/images/5024733655_46842b12f9_o.jpg%3Fitok%3Drg6NQspz?itok=hPEwJzZr' }}
            style={styles.backgroundImage}
        >
          <View style={styles.supportContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.welcomeText}>
                Welcome to GET BOARD GAMES
              </Text>
              <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbbdffec6c8c916bd924758/658x652/e76e12f3d7248de9a8504531683c6116/GBG-logo-black.png' }}
                  style={{ width: 150, height: 150, marginBottom: 50 }}
              />

          <Text>
              Please Sign in to get into the app!
          </Text>
          <View style={{ marginTop: 20, width: 'auto' }}>
              <Icon.Button
                  backgroundColor="#007AFF"
                  name="google"
                  onPress={handleLoggingClick}
              >
                  Sign In With Google
              </Icon.Button>
          </View>
            </View>
          </View>
        </ImageBackground>
      </View>
  )
}

function mapStateToProps ({ userReducer }: any) {
  return {
    user: userReducer.user
  }
}

export default connect(mapStateToProps)(LoginWithGoogle)
