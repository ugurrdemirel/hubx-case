import {StyleSheet} from 'react-native';

export const onboardingStyles = StyleSheet.create({
  titleLight: {
    color: 'rgba(19, 35, 27, 1)',
    fontFamily: 'Rubik-Light',
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
  },
  titleRegular: {
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
  },
  titleExtraBold: {
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '800',
  },
  description: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.07,
    marginTop: 8,
  },
  image: {
    flexGrow: 1,
    marginTop: 24,
    maxHeight: '60%',
    width: '100%',
    objectFit: 'contain',
  },
  slideImage: {
    flexGrow: 1,
    marginTop: 24,
    width: '100%',
    objectFit: 'contain',
  },
  step2Image: {
    width: '100%',
    marginTop: 80,
    flexGrow: 1,
  },
  legalText: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 15,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    width: 232,
    alignSelf: 'center',
    marginTop: 17,
    marginBottom: 8,
  },
  legalTextUnderline: {
    textDecorationLine: 'underline',
  },
  slide: {
    flex: 1,
  },
});
