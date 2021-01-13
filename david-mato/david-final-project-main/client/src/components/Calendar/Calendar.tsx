// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet, Text, View, StatusBar, Dimensions,
  Animated, Image, TouchableWithoutFeedback, ScrollView,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './CalendarStyles';
import { isUserSelectingMenu } from '../../redux/actions/userActions';

let swipeCalendarPosition = 0;
let firstTimeEntering = true;
let swipped = false;

function Calendar({ user, actions, navigation }
  : { user: Object, actions: Object, navigation: Object}) {
  const { width } = Dimensions.get('window');
  let currentPositionInCalendar = 2;

  const now = new Date();
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsAndLength = [
    { month: 'January', length: 31 },
    { month: 'February', length: 28 },
    { month: 'March', length: 31 },
    { month: 'April', length: 30 },
    { month: 'May', length: 31 },
    { month: 'June', length: 30 },
    { month: 'July', length: 31 },
    { month: 'August', length: 31 },
    { month: 'September', length: 30 },
    { month: 'October', length: 31 },
    { month: 'November', length: 30 },
    { month: 'December', length: 31 },
  ];

  // const getWeekOfTheMonth = (dayOfTheWeekNumber: number, dayOfTheMonth: number): number | void => {
  //   const month = now.getMonth();
  //   const year = now.getFullYear();
  //   const checkDate = new Date(year, month, dayOfTheMonth);
  //   const checkDateTime = checkDate.getTime();
  //   let currentWeek = 0;

  //   for (let i = 1; i < 32; i += 1) {
  //     const loopDate = new Date(year, month, i);

  //     if (loopDate.getDay() === dayOfTheWeekNumber) {
  //       currentWeek += 1;
  //     }

  //     if (loopDate.getTime() === checkDateTime) {
  //       return currentWeek;
  //     }
  //   }
  // };

  const getCurrentDate = () => {
    const { month } = monthsAndLength[now.getMonth()];
    const dayOfTheMonth = now.getDate();
    const dayOfTheWeekNumber = now.getDay();
    const dayOfTheWeekName = daysOfTheWeek[dayOfTheWeekNumber];
    // const weekOfTheMonth = getWeekOfTheMonth(dayOfTheWeekNumber, dayOfTheMonth);

    return {
      month, dayOfTheMonth, dayOfTheWeekNumber, dayOfTheWeekName, /* weekOfTheMonth */
    };
  };

  const currentDate = getCurrentDate();

  const calendar: JSX.Element[] = [];
  const days: Object[] = [];
  const [calendarDayBackgroundColor, setCalendarDayBackgroundColor] = useState<Object>({});
  const calendarDaysBackgroundColor: { [x: string]: string; }[] = [];

  const generateCalendar = () => {
    const arrayOfMonths: number[] = [];
    const firstMonthNumber = now.getMonth();
    let monthNumber = firstMonthNumber;
    for (let i = 0; i < 3; i += 1) {
      if (!monthNumber) {
        monthNumber = firstMonthNumber + 11;
        arrayOfMonths.push(monthNumber);
      } else if (monthNumber > 10) {
        arrayOfMonths.push(monthNumber - 12 + i);
      } else {
        monthNumber = firstMonthNumber + i;
        arrayOfMonths.push(monthNumber);
      }
    }

    arrayOfMonths.forEach((month: number) => {
      let firstMonday = false;
      let lastSunday = false;
      let lastMonthSundays = 0;

      for (let i = 1; i < monthsAndLength[month].length + 1; i += 1) {
        const dt = new Date(`${monthsAndLength[month].month} ${i}, 2020 23:15:00`);
        if (arrayOfMonths[0] === month && !firstMonday) {
          if (dt.getDay() === 1) {
            days.push({ day: i, month: monthsAndLength[month].month });
            firstMonday = true;
          }
        } else if (arrayOfMonths[arrayOfMonths.length - 1] === month && !lastSunday) {
          if (dt.getDay() === 0) {
            lastMonthSundays += 1;
            if (lastMonthSundays === 4) {
              lastSunday = true;
              break;
            }
          }
          days.push({ day: i, month: monthsAndLength[month].month });
        } else if (!lastSunday) {
          days.push({ day: i, month: monthsAndLength[month].month });
        }
      }
    });

    let firstDayOfFirstWeek = 0;
    let lastDayOfFirstWeek = 7;
    let firstDayOfLastWeek = 7;
    let lastDayOfLastWeek = 14;
    let newMonth;
    for (let i = 0; i < days.length / 14; i += 1) {
      const currentCalendarDays: Object[] = days
        .slice(firstDayOfFirstWeek, lastDayOfLastWeek);
      const goToNextMonth = currentCalendarDays[0].month
        !== currentCalendarDays[currentCalendarDays.length - 1].month;

      if (goToNextMonth) {
        newMonth = currentCalendarDays
          .filter((day, index, array) => array[array.length - 1].month === day.month);
      }

      let monthName: {};
      if (newMonth && newMonth.length > 7) {
        monthName = newMonth[0].month;
      } else if (newMonth && newMonth.length === 7 && goToNextMonth) {
        monthName = `${currentCalendarDays[0].month}/${newMonth[0].month}`;
      } else {
        monthName = currentCalendarDays[0].month;
      }

      const calendarDateWidth = width / 7;
      const pressedCalendarDateWidthAndHeight = calendarDateWidth * 0.75;

      calendar.push(
        <View key={Math.random() * Date.now()}>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 25 }}>
              {monthName}
            </Text>
          </View>
          <View style={{
            flexDirection: 'row', width, height: 50, alignItems: 'center', marginTop: 70,
          }}
          >
            {days.slice(firstDayOfFirstWeek, lastDayOfFirstWeek).map((day) => (
              <TouchableWithoutFeedback
                key={Math.random() * Date.now()}
                onPress={() => {
                  const previousMarkedDate = Object.keys(calendarDayBackgroundColor).find((key) => calendarDayBackgroundColor[key] === 'black');
                  setCalendarDayBackgroundColor({ ...calendarDayBackgroundColor, [`${previousMarkedDate}`]: 'rgb(58, 58, 58)', [`${monthName}${day.day}`]: 'black' });
                }}
              >
                <View style={{
                  backgroundColor: 'rgb(58, 58, 58)', width: calendarDateWidth, borderColor: 'white', borderWidth: StyleSheet.hairlineWidth, height: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Text style={{
                    backgroundColor: calendarDayBackgroundColor ? calendarDayBackgroundColor[`${monthName}${day.day}`] : 'rgb(58, 58, 58)', width: pressedCalendarDateWidthAndHeight, height: pressedCalendarDateWidthAndHeight, borderRadius: pressedCalendarDateWidthAndHeight / 2, textAlign: 'center', lineHeight: pressedCalendarDateWidthAndHeight, color: 'white', fontSize: 20,
                  }}
                  >
                    {day.day}
                  </Text>
                  <Text style={{ fontSize: 0 }}>
                    {currentDate.month === monthName && currentDate.dayOfTheMonth === day.day ? calendarDaysBackgroundColor.push({ [`${monthName}${day.day}`]: 'black' }) : calendarDaysBackgroundColor.push({ [`${monthName}${day.day}`]: 'rgb(58, 58, 58)' })}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View style={{
            flexDirection: 'row', width,
          }}
          >
            {days.slice(firstDayOfLastWeek, lastDayOfLastWeek).map((day) => (
              <TouchableWithoutFeedback
                key={Math.random() * Date.now()}
                onPress={() => {
                  const previousWhiteDate = Object.keys(calendarDayBackgroundColor).find((key) => calendarDayBackgroundColor[key] === 'black');
                  setCalendarDayBackgroundColor({ ...calendarDayBackgroundColor, [`${previousWhiteDate}`]: 'rgb(58, 58, 58)', [`${monthName}${day.day}`]: 'black' });
                }}
              >
                <View style={{
                  backgroundColor: 'rgb(58, 58, 58)', width: calendarDateWidth, borderColor: 'white', borderWidth: StyleSheet.hairlineWidth, borderTopWidth: 0, height: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Text style={{
                    backgroundColor: calendarDayBackgroundColor ? calendarDayBackgroundColor[`${monthName}${day.day}`] : 'rgb(58, 58, 58)', width: pressedCalendarDateWidthAndHeight, height: pressedCalendarDateWidthAndHeight, borderRadius: pressedCalendarDateWidthAndHeight / 2, textAlign: 'center', lineHeight: pressedCalendarDateWidthAndHeight, color: 'white', fontSize: 20,
                  }}
                  >
                    {day.day}
                  </Text>
                  <Text style={{ fontSize: 0 }}>
                    {currentDate.month === monthName && currentDate.dayOfTheMonth === day.day ? calendarDaysBackgroundColor.push({ [`${monthName}${day.day}`]: 'black' }) : calendarDaysBackgroundColor.push({ [`${monthName}${day.day}`]: 'rgb(58, 58, 58)' })}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
        ,
      );
      firstDayOfFirstWeek += 14;
      lastDayOfFirstWeek += 14;
      firstDayOfLastWeek += 14;
      lastDayOfLastWeek += 14;
    }
    // }
  };

  useEffect(() => {
    const initialState = {};
    calendarDaysBackgroundColor.forEach((date) => Object.assign(initialState, date));
    setCalendarDayBackgroundColor(initialState);
  }, []);

  const horizontalCalendarRef = useRef(null);
  const swipeCalendarAnimation = useRef(new Animated.Value(0)).current;

  const swipeCalendar = async (toTheLeft: boolean, initialEffect: boolean) => {
    if (toTheLeft) {
      if (currentPositionInCalendar !== calendar.length - 3) {
        currentPositionInCalendar += 1;
        swipeCalendarPosition -= initialEffect ? width * 3 : width;
      }
    } else if (currentPositionInCalendar + 1) {
      swipeCalendarPosition += width;
      currentPositionInCalendar -= 1;
    }

    Animated.timing(
      swipeCalendarAnimation,
      {
        toValue: swipeCalendarPosition,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
  };

  generateCalendar();

  if (firstTimeEntering) {
    swipeCalendar(true, true);
    firstTimeEntering = false;
  }

  const dateMarked = Object.keys(calendarDayBackgroundColor).find((key) => calendarDayBackgroundColor[key] === 'black');
  const menuFound = user.menus.find((menu: Object) => Object.keys(menu)[0] === dateMarked);

  return (
    <View style={{ marginTop: StatusBar.currentHeight }} testID="test">
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <GestureRecognizer
        onSwipeLeft={() => {
          swipped = true;
          swipeCalendar(true, false);
        }}
        onSwipeRight={() => {
          swipped = true;
          swipeCalendar(false, false);
        }}
        style={{ flexDirection: 'row' }}
      >
        <Animated.View
          ref={horizontalCalendarRef}
          style={{ transform: [{ translateX: swipeCalendarAnimation }], flexDirection: 'row' }}
        >
          {calendar}
        </Animated.View>
      </GestureRecognizer>
      <>
        {menuFound ? (
          <>
            <View style={{ height: 20, borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth }} />
            <ScrollView
              style={{
                marginBottom: 210, paddingTop: 5,
              }}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ paddingBottom: 40 }}>
                {['Breakfast', 'Lunch', 'Dinner'].map((menu) => (
                  <View key={Math.random() * Date.now()}>
                    <Text style={styles.sectionTitle}>
                      {menu}
                    </Text>
                    {Object.keys(menuFound[Object.keys(menuFound)[0]])
                      .map((recipe) => (menuFound[Object.keys(menuFound)[0]][recipe]
                        .addedTo === menu
                        ? (
                          <View style={{ alignItems: 'center' }} key={Math.random() * Date.now()}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('detail',
                              { recipe: menuFound[Object.keys(menuFound)[0]][recipe].recipe })}
                            >
                              <View
                                style={[styles.menuCard, { flexDirection: 'row', width: width - 30, position: 'relative' }]}
                              >
                                <Image
                                  style={{
                                    height: 100, width: 155, borderRadius: 5, marginRight: 15,
                                  }}
                                  source={{
                                    uri: menuFound[Object.keys(menuFound)[0]][recipe]
                                      .recipe.strMealThumb,
                                  }}
                                />
                                <View style={{
                                  flexGrow: 1, paddingRight: 15, justifyContent: 'center', flexDirection: 'row',
                                }}
                                >
                                  <Text style={{
                                    fontSize: 20, flex: 1, flexWrap: 'wrap', textAlign: 'center', marginTop: 5,
                                  }}
                                  >
                                    {menuFound[Object.keys(menuFound)[0]][recipe].recipe.strMeal}
                                  </Text>
                                </View>
                              </View>
                            </TouchableWithoutFeedback>
                          </View>
                        ) : null))}
                  </View>
                ))}
              </View>
            </ScrollView>
          </>
        )
          : (
            <>
              <View style={{ alignItems: 'flex-end', padding: 20 }}>
                <View style={{
                  width: 74, height: 74, borderRadius: 37, backgroundColor: 'rgb(150, 89, 42)', alignItems: 'center', justifyContent: 'center', elevation: 5,
                }}
                >
                  <Text
                    style={{
                      fontSize: 70,
                      fontFamily: 'serif',
                      color: 'white',
                      textShadowColor: 'black',
                      textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 2,
                    }}
                    onPress={() => {
                      actions.isUserSelectingMenu(true);
                      navigation.navigate('selectMenu', { date: dateMarked });
                    }}
                  >
                    +
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{
                  fontSize: 20, width: 240, textAlign: 'center', position: 'relative', top: 55, lineHeight: 30,
                }}
                >
                  No menu on this day. Add one!
                </Text>
              </View>
              <View style={{
                position: 'relative', top: -100, alignItems: 'flex-end',
              }}
              >
                <View style={{ transform: [{ rotate: '0deg' }], width: 60 }}>
                  <Image
                    style={{
                      width: 75, height: 85, position: 'relative', right: 130,
                    }}
                    source={{ uri: 'https://cdn.fastly.picmonkey.com/content4/previews/infodoodles/infodoodles_41_550.png' }}
                  />
                </View>
              </View>
            </>
          )}
      </>
    </View>
  );
}

function mapStateToProps({ userReducer }: {userReducer: Object}) {
  return {
    user: userReducer.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      isUserSelectingMenu,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
