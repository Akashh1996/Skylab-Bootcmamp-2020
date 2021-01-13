import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import  ButtonNavigation  from '../components/ButtonNavigation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	loadTuppers
} from '../redux/actions/tupper-actions';


const DiscoverTupperList = ({ tupperList, dispatch, navigation, route }) => {
  
  useEffect(() => {
    if(!tupperList?.length) {
      dispatch(loadTuppers())}
    }, [tupperList?.length]); 

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          tupperList?.map((item) => (
          <Text>{item.recipe.name_dish}</Text>
          ))
        }
        <Text>Home Screen</Text>
        <Button
          type="clear"
          title="Go to Details"
          onPress={() => navigation.navigate('Detail', { id: "5fc8d88fde5c06ab1eb4f85e" })}
        />
        <ButtonNavigation navigation={navigation} />
      </View>
    )
};

function mapStateToProps({ tupperReducer }) {
	return {
		tupperList: tupperReducer.tupperList,
	};
}

connect();
export default connect(mapStateToProps)(DiscoverTupperList);

