import {StyleSheet} from 'react-native';

export const premiumFeatureStyles = StyleSheet.create({
  container: {
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
  },
  iconBg: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8,
    padding: 9,
  },
  title: {
    marginTop: 16,
    color: 'white',
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 4,
  },
});
