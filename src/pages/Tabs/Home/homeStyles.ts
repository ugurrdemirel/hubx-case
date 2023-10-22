import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    width: '100%',
  },
  sectionTitle: {
    marginTop: 24,
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 15,
  },
  questionsContainer: {
    marginTop: 16,
    flexGrow: 0,
  },
  questionsContentContainer: {
    gap: 10,
  },
  categoriesContainer: {
    marginTop: 24,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 11,
    columnGap: 16,
  },
});
