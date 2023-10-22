import {StyleSheet} from 'react-native';

export const radioStyles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  containerSelected: {
    borderColor: 'rgba(40, 175, 110, 1)',
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 14,
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSelected: {
    backgroundColor: 'rgba(40, 175, 110, 1)',
  },
  circleDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
  },
  circleDotSelected: {
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Rubik-Light',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 1,
  },
  hint: {
    paddingLeft: 12,
    paddingVertical: 4,
    paddingRight: 9,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: 'rgba(40, 175, 110, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    maxWidth: 120,
  },
});
