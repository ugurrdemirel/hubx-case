import {StyleSheet} from 'react-native';

export const homeHeaderStyles = StyleSheet.create({
  imageBg: {
    aspectRatio: '2.15/1',
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 14,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#13231B',
  },
  subtitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    fontWeight: '500',
    color: '#13231B',
    marginTop: 6,
  },
});
