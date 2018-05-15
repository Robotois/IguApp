import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    backgroundColor: colors.whiteTer,
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
