import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Category from './category';
import { list as categoryList } from '../../api/category';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  categoryList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 200,
  },
});

const Row = ({ rowItems, navigate }) => (
  <View style={styles.row}>
    {rowItems.map(rowItem => <Category key={rowItem.title} {...rowItem} navigate={navigate} />)}
  </View>
);

const Categories = ({ list, navigation }) => (
  <View style={{
      width: '100%',
      maxHeight: '60%',
      backgroundColor: colors.whiteTer,
      paddingTop: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    }}
  >
    <ScrollView>
      <View style={styles.categoryList}>
        {
          list.map((row, index) => (<Row
            key={`row-${index}`}
            rowItems={row}
            navigate={() => navigation.navigate('Group')}
          />))
        }
      </View>
    </ScrollView>
  </View>
);

Categories.defaultProps = {
  list: categoryList,
};

export default Categories;
