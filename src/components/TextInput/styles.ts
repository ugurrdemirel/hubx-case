import {StyleSheet} from 'react-native';

export const textInputStyles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    left: 16,
    width: 20,
    height: 20,
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderWidth: 0.5,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    height: 44,
    borderRadius: 12,
    padding: 8,
  },
});
