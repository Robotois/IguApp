import { StackNavigator } from 'react-navigation';

import Home from '../components/home';
import GroupContainer from '../containers/group-container';
import Stats from '../components/stats';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Group: {
      screen: GroupContainer,
    },
    Stats: {
      screen: Stats,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
