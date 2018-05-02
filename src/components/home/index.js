import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import OnButton from './OnButton';
import GroupList from '../group-list';

import styles from './styles';

const EntryComponent = () => (
  <View style={styles.entryComponent}>
    <View style={styles.entryLogo}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../images/igu-on.png')}
      />
    </View>
    <OnButton />
  </View>
);

const image = [require('../../images/night2.jpg'), require('../../images/day2.jpg')]

const Home = ({ navigation }) => (
  <ImageBackground style={{ width: '100%', height: '100%' }} source={image[0]}>
    <View style={styles.layout}>
      <EntryComponent />
      <GroupList navigation={navigation} />
    </View>
  </ImageBackground>
);

Home.navigationOptions = ({ navigation }) => ({
  headerLeft: <Icon
    size={25}
    name="poll"
    type="material-community"
    iconStyle={styles.headerIcon}
    onPress={() => navigation.navigate('Stats')}
  />,
  headerRight: <Icon
    size={25}
    name="settings-outline"
    type="material-community"
    iconStyle={styles.headerIcon}
  />,
  headerTitle: (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>
        Bienvenido
      </Text>
    </View>
  ),
  headerStyle: styles.headerStyle,
});

export default Home;
