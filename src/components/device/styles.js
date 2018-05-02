import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  group: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.whiteBis,
  },
  switchList: {
    width: '100%',
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    flex: 1,
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  headerText: {
    color: colors.cyan,
    fontWeight: textStyles.weightSemibold,
    fontSize: textStyles.isSize4,
  },
});

export default styles;
