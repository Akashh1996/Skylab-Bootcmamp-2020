import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import * as RootNavigation from '../../../RootNavigation';

const Navbar = React.memo((): JSX.Element => {
  const navbarIcons = ['home', 'search', 'list', 'person', 'calendar'];

  return (
    <View style={styles.navbarContainer}>
      {navbarIcons.map((iconName) => (
        <Icon
          onPress={() => RootNavigation.navigate(iconName, null)}
          size={30}
          color="white"
          name={`ios-${iconName}`}
          type="ionicon"
          testID={iconName}
          key={Math.random() * Date.now()}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    borderTopWidth: 1,
    backgroundColor: 'black',
  },
});

export default Navbar;
