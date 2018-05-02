import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';


const styles = StyleSheet.create({
  groupList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  groupItem: {
    width: 150,
    height: 150,
    alignItems: 'center',
    margin: 10,
  },
  itemTitle: {
    fontSize: textStyles.isSize4,
    fontWeight: textStyles.weightMedium,
    color: colors.blackTer,
  },
  itemSubtitle: {
    fontSize: textStyles.isSize5,
    color: colors.grey,
  },
  root: {
    width: '100%',
    maxHeight: '60%',
    backgroundColor: colors.whiteBis,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
