import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AirbnbRating, Badge, Divider, ListItem, Avatar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	loadTupperById
} from '../redux/actions/tupper-actions';


const previous = { uri: "https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png"};
const image = { uri: "https://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/4946/default_hungry-girl-healthy-outside-the-box-mac-n-cheese-recipe-20181206-1742-27394-7440.jpg" };

const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');
const topBanner = 250;

/*DONDE HACER OPERACION LINEA 85*/
/*DONDE SEPARAR INGREDIENTES 113*/

function TupperDetail({ tupperDetail, dispatch, route, navigation}) {
  const tupperId = route.params.id
  const [value, onChangeText] = useState('')
  const tuppersLeft = tupperDetail?.tuppers_total - tupperDetail?.tuppers_bought
  
  useEffect(() => {
    if(!tupperDetail?.length) {
      dispatch(loadTupperById(tupperId))}
    }, [tupperDetail?.length]); 
    
    return (
      <SafeAreaView>
        <View>
          <ImageBackground style={styles.image} source={{uri:tupperDetail?.recipe.image_dish}} > 
            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}> 

              <View style={styles.topContainer}>
                <TouchableHighlight onPress={() => navigation.navigate('Discover')} >
                  <Image source={previous} style={styles.backIcon}/>
                </TouchableHighlight>
                <View style={styles.veggieDish}>
                  <Badge value="veggie" status="success" style={{backgroundColor: 'black'}}/>
                  <Badge value="spicy" status="error" />
                </View>
              </View>

              <View style={styles.presentationContainer}>          
                <Avatar size="medium" rounded source={{uri:tupperDetail?.recipe.cooker.avatar_url}} onPress={() => navigation.navigate('Profile')} />
                <View>
                  <Text style={styles.nameDish}>{tupperDetail?.recipe.name_dish}</Text>
                  <Text style={styles.nameProfile}>{tupperDetail?.recipe.cooker.user_name}</Text>
                </View> 
              </View>

            </LinearGradient>

            <View>
              <Text style={styles.price}>{tupperDetail?.recipe.price_dish}</Text>
                <Text style={styles.tupperLeft}>{tuppersLeft}/{tupperDetail?.tuppers_total} left!</Text> 
            </View>
          </ImageBackground>
        </View>

        <View style={styles.scrollView}>
          <ScrollView>
              <View style={styles.sectionContainer}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={styles.sectionTitle}>Date and time</ListItem.Title>
                  <ListItem.Subtitle>{tupperDetail?.delivery_time}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <Divider style={{ backgroundColor: 'lightgrey' }} />
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={styles.sectionTitle}>Place</ListItem.Title>
                  <ListItem.Subtitle>{tupperDetail?.delivery_place}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View> 

            <View style={styles.sectionContainer}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={styles.sectionTitle}>Ingredients</ListItem.Title>
                  <ListItem.Subtitle>{tupperDetail?.recipe.ingredients}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <Divider style={{ backgroundColor: 'lightgrey' }} />
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={styles.sectionTitle}>Description of the dish</ListItem.Title>
                  <ListItem.Subtitle>{tupperDetail?.recipe.description_dish}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>  
            
            <View style={styles.sectionContainer}>          
                  <ListItem bottomDivider>
                      <ListItem.Content>
                     <ListItem.Title style={styles.sectionTitle}>Reviews</ListItem.Title>
                        <AirbnbRating
                   defaultRating={5}
                   size={15}
                   count={5}
                   reviews={[""]}
                   />
                   <ListItem.Input style={{ height: 40, borderColor: 'lightgrey', borderWidth: 1, alignContent: 'flex-start' }}
                     onChangeText={text => onChangeText(text)}
                     value={value}/> 
                 </ListItem.Content>
             </ListItem>
            </View>

          
            { 
              tupperDetail?.recipe.reviews.map((review, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded source={{uri: review.author.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{review.author.user_name} said ...</ListItem.Title>
                    <ListItem.Subtitle>{review.content}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            
        
          </ScrollView>
          <TouchableHighlight onPress={() => navigation.navigate('Discover')}>
            <View style={styles.button}>
              <Text style={styles.textButton}>BUY TUPPER</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView> 
  );
}

const styles = StyleSheet.create({ 
  image: {
    width: screenWidth,
    height: topBanner,
  },
  linearGradient: {
    backgroundColor: "transparent",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  topContainer: {
    margin: 30
  },
  backIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
  },
  veggieDish: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  presentationContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 100,
    marginLeft: 20
  },
  tupperLeft: {
    fontSize: 15,
    backgroundColor: '#eb6f6f',
    textAlign: 'center',
    height: 20,
    width: 60,
    color:'white',
    margin: 80,
    position: 'absolute'
  },
  price: {
    fontSize: 18,
    backgroundColor: '#340068',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 30,
    width: 50,
    color:'white',
    marginTop: topBanner - 50,
    marginLeft: screenWidth - 80,
    position: 'absolute'
  },
  scrollView:{
    backgroundColor: 'lightgrey',
    height: screenHeight - topBanner - 60
  },
  sectionContainer: {
    marginBottom: 20
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: "#eb6f6f",
    marginTop: -10,
    marginBottom: 5
  },
  nameDish: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  nameProfile: {
    fontSize: 15,
    color: 'white'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#eb6f6f",
    padding: 10
  },
  textButton : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});


function mapStateToProps({ tupperReducer }) {
	return {
		tupperDetail: tupperReducer.tupperDetail,
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators({ loadTupperById }, dispatch),
// 		dispatch
// 	};
// }

connect();
export default connect(mapStateToProps)(TupperDetail);






