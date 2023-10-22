import {StyleSheet} from 'react-native';

export const bottomBarStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
    gap: 5,
    flexGrow: 1,
    flexBasis: 0,
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    fontWeight: '400',
    color: '#979798',
  },
  textActive: {
    color: '#28AF6E',
  },
});
