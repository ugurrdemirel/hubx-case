import {StyleSheet} from 'react-native';

export const paywallStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(16, 30, 23, 1)',
    flex: 1,
  },
  bgImage: {
    width: '100%',
    aspectRatio: '1/1.3',
  },
  headerContainer: {
    paddingLeft: 24,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  closeBtn: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
  appTitle: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '800',
  },
  appTitleLight: {
    fontSize: 27,
    fontWeight: '300',
  },
  premiumDescription: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Rubik-Light',
    fontSize: 17,
    fontWeight: '300',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  premiumFeaturesContainer: {
    marginTop: 20,
    flexGrow: 0,
  },
  premiumFeaturesContentContainer: {
    gap: 8,
    paddingRight: 8,
  },
  plansContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  plans: {
    gap: 16,
  },
  tryButton: {
    marginTop: 26,
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.52);',
    fontFamily: 'Rubik-Light',
    fontSize: 9,
    fontWeight: '300',
    marginTop: 8,
    textAlign: 'center',
  },
  legal: {
    textAlign: 'center',
    marginTop: 10,
    color: 'rgba(255, 255, 255, 0.50)',
    fontSize: 11,
    fontWeight: '400',
  },
});
