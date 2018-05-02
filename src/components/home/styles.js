import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 50,
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerIcon: {
    color: colors.whiteTer,
  },
  headerText: {
    color: colors.whiteTer,
    fontWeight: textStyles.weightSemibold,
    fontSize: textStyles.isSize4,
  },
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  entryComponent: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entryLogo: {
    width: 120,
    height: 120,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginBottom: 25,
  },
});

export default styles;
