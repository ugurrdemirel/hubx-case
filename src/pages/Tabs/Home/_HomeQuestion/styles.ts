import {StyleSheet} from 'react-native';

export const homeQuestionStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 164,
    width: 240,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 12,
  },
  titleArea: {
    height: 64,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: 'white',
  },
});
