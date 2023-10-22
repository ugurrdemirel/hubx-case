import {StyleSheet} from 'react-native';

export const freePremiumButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#24201A',
    borderRadius: 12,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexBasis: 0,
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5C990',
  },
  premiumBoldTitle: {
    fontWeight: '700',
  },
  premiumSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(255, 222, 156, 0.80)',
    marginTop: 1,
  },
});
