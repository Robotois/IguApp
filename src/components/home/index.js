import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

import OnButton from './OnButton';
import Categories from '../category/categories';

const EntryComponent = () => (
  <View style={{
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        width: 120,
        height: 120,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        marginBottom: 25,
      }}
    >
      <Image
        style={{width: 50, height: 50}}
        source={require('../../images/igu-on.png')}
      />
    </View>
    <OnButton />
  </View>
);

const styles = StyleSheet.create({
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
    width: '100%',
  },
  headerText: {
    color: colors.whiteTer,
    fontWeight: textStyles.weightSemibold,
    fontSize: textStyles.isSize3,
  },
});

const MyHeader = () => (
  <View style={styles.header}>
    <View>
      <Icon
        size={30}
        name="poll"
        type="material-community"
        iconStyle={{ color: colors.whiteTer }}
      />
    </View>
    <View>
      <Text style={styles.headerItem}>
        Bienvenido
      </Text>
    </View>
    <View>
      <Icon
        size={30}
        name="settings-outline"
        type="material-community"
        iconStyle={{ color: colors.whiteTer }}
      />
    </View>
  </View>
);

const Home = ({ navigation }) => (
  <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../images/night2.jpg')}>
    <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: 50,
        }}
    >
      <EntryComponent />
      <Categories navigation={navigation} />
    </View>
  </ImageBackground>
);

Home.navigationOptions = ({ navigation }) => ({
  headerLeft: <Icon
    size={30}
    name="poll"
    type="material-community"
    iconStyle={{ color: colors.whiteTer }}
    onPress={() => navigation.navigate('Stats')}
  />,
  headerRight: <Icon
    size={30}
    name="settings-outline"
    type="material-community"
    iconStyle={{ color: colors.whiteTer }}
  />,
  headerTitle: (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>
        Bienvenido
      </Text>
    </View>
  ),
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
});

export default Home;
