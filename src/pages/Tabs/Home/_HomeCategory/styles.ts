import {StyleSheet} from 'react-native';

export const homeCategoryStyles = StyleSheet.create({
  container: {
    flexBasis: '45%',
    flexGrow: 1,
    height: 152,
    aspectRatio: '1/1',
    padding: 16,
  },
  imageStyle: {
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    color: '#13231B',
  },
});
