// @ts-nocheck
import React, {
  useEffect, useRef, useState,
} from 'react';
import {
  View, Text, StatusBar, Dimensions, ScrollView, Alert,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/ListInterfaces';
import styles from './ListStyles';
import {
  deleteProductFromGorceryList, deleteAllProductsFromGorceryList,
  crossOverProductFromGorceryList, updateGroceryListInDB,
} from '../../redux/actions/groceryListActions';
import AddIngredientBoxInput from './TextInput';

function List({ groceryList, user, actions } : Props) {
  const searchBoxRef = useRef();
  const { width, height } = Dimensions.get('window');
  const [sectionArrowDirection, setSectionArrowDirection] = useState<Object>({});
  const [sectionVisibility, setSectionVisibility] = useState<Object>({});

  useEffect(() => {
    actions.updateGroceryListInDB(user, groceryList);
  }, [groceryList]);

  const isFocused = useIsFocused();

  useEffect(() => {
    Object.keys(sectionArrowDirection).forEach((section) => {
      setSectionArrowDirection({ [section]: 'arrow-down' });
      setSectionVisibility({ [section]: 'flex' });
    });
  }, [isFocused]);

  const groceryListJSX: JSX.Element[] = [];
  const listOrderedByFoodType: Object = {};
  const sectionArrowDirectionObject: Object = {};
  const sectionVisibilityObject: Object = {};
  const ingredientCrossedOverObject: Object = {};

  const orderItemsByFoodType = (listItem: Object) => {
    if (listItem.type in listOrderedByFoodType) {
      listOrderedByFoodType[listItem.type].push(listItem.product);
    } else {
      ingredientCrossedOverObject[listItem.product] = false;
      listOrderedByFoodType[listItem.type] = [listItem.product];
      sectionArrowDirectionObject[listItem.type] = 'arrow-down';
      sectionVisibilityObject[listItem.type] = { display: 'flex' };
    }
  };

  const determineIfUserAndListInSync = (userAndListInSync: boolean) => {
    if (userAndListInSync) {
      user.groceryList.forEach((listItem: Object) => orderItemsByFoodType(listItem));
    } else {
      groceryList.forEach((listItem: Object) => orderItemsByFoodType(listItem));
    }
  };

  const addItemsToList = () => {
    Object.entries(listOrderedByFoodType).forEach((foodGroup) => {
      groceryListJSX.push(
        <View key={Math.random() * Date.now()}>
          <View style={styles.sectionTitleContainer}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              {`${foodGroup[0].toUpperCase()} (${foodGroup[1].length})`}
            </Text>
            <View style={{ position: 'relative', top: 2 }}>
              <Icon
                onPress={() => {
                  if (sectionArrowDirection[foodGroup[0]] === 'arrow-down' || !sectionArrowDirection[foodGroup[0]]) {
                    setSectionArrowDirection({ ...sectionArrowDirection, [foodGroup[0]]: 'arrow-up' });
                    setSectionVisibility({ ...sectionVisibility, [foodGroup[0]]: { display: 'none' } });
                  } else {
                    setSectionArrowDirection({ ...sectionArrowDirection, [foodGroup[0]]: 'arrow-down' });
                    setSectionVisibility({ ...sectionVisibility, [foodGroup[0]]: { display: 'flex' } });
                  }
                }}
                size={25}
                color="white"
                name={sectionArrowDirection[foodGroup[0]] ? `ios-${sectionArrowDirection[foodGroup[0]]}` : 'ios-arrow-down'}
                type="ionicon"
              />
            </View>
          </View>
          <View style={[sectionVisibility[foodGroup[0]], { marginTop: 5 }]}>
            {foodGroup[1].map((foodGroupItem: string) => (
              <Swipeable
                key={Math.random() * Date.now()}
                renderLeftActions={() => <View style={{ width }} />}
                onSwipeableLeftOpen={() => {
                  actions.deleteProductFromGorceryList(foodGroupItem);
                }}
              >
                <View style={styles.ingredientContainer}>
                  <Text style={{ fontSize: 17, textDecorationLine: groceryList.find((product: Object) => product.product === foodGroupItem).isCrossed ? 'line-through' : 'none' }} onPress={() => actions.crossOverProductFromGorceryList({ name: foodGroupItem, crossedOver: !groceryList.find((product: Object) => product.product === foodGroupItem).isCrossed })} suppressHighlighting>
                    {`${foodGroupItem[0].toUpperCase()}${foodGroupItem.slice(1)} ${groceryList.find((product: Object) => product.product === foodGroupItem).amount > 1 ? `(x${groceryList.find((product: Object) => product.product === foodGroupItem).amount})` : ''}`}
                  </Text>
                </View>
              </Swipeable>
            ))}
          </View>
        </View>,
      );
    });
  };

  if (groceryList.length >= user.groceryList.length && groceryList.length) {
    determineIfUserAndListInSync(true);
    addItemsToList();
  } else {
    determineIfUserAndListInSync(false);
    addItemsToList();
  }

  useEffect(() => {
    if (Object.keys(sectionArrowDirectionObject).length) {
      setSectionArrowDirection(sectionArrowDirectionObject);
      setSectionVisibility(sectionVisibilityObject);
    }
  }, []);

  const deleteAllItemsAlert = () => Alert.alert(
    'Are you sure you want to delete all items from the list?',
    '',
    [
      {
        text: 'Yes',
        onPress: () => actions.deleteAllProductsFromGorceryList(),
      },
      { text: 'No' },
    ],
    { cancelable: false },
  );

  return (
    <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }} testID="listComponent">
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={styles.header}>
        <View style={styles.headerTitleAndIconContainer}>
          <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>
            Grocery list
          </Text>
          <Icon
            size={30}
            color="white"
            name="md-trash"
            type="ionicon"
            onPress={() => {
              if (groceryList.length) {
                deleteAllItemsAlert();
              }
            }}
          />

        </View>
        <View style={styles.inputBox}>
          <AddIngredientBoxInput searchBoxRef={searchBoxRef} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {groceryList.length
          ? <View style={{ marginBottom: 60 }}>{groceryListJSX}</View>
          : (
            <View style={{ height: height - 169, justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>
                No items yet
              </Text>
            </View>
          )}
      </ScrollView>
    </View>
  );
}

function mapStateToProps({ groceryListReducer, userReducer }
    : { groceryListReducer: object, userReducer: Object}) {
  return {
    groceryList: groceryListReducer,
    user: userReducer.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      deleteProductFromGorceryList,
      deleteAllProductsFromGorceryList,
      crossOverProductFromGorceryList,
      updateGroceryListInDB,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
