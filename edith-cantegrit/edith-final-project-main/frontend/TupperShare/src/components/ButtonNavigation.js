import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';
const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');




const ButtonNavigation = ({ navigation, route }) => {
    const buttons = ['Discover', 'Tuppers', 'Orders']
    const [selectedIndex, setSelectedIndex] = useState(0)

    const updateIndex = (selectedIndex) => {
        setSelectedIndex(selectedIndex)
        navigation.navigate(buttons[selectedIndex])
    }

    return (
        <ButtonGroup
        style={styles.fixToText}
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}} />
    )
};

const styles = StyleSheet.create({
    fixToText: {
      color: "#340068",
      flexDirection: 'row',
      flex: 1,
      top: screenHeight - 220
    },
    button: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        width: 120,
        height: 40,
        borderWidth: 1,
        borderColor: '#340068'
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#340068',
        textAlign: 'center'
    }
});



export default ButtonNavigation;







