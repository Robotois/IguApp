import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  global: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.whiteBis,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: colors.cyan,
    fontWeight: textStyles.weightSemibold,
    fontSize: textStyles.isSize4,
  },
});

export default styles;
