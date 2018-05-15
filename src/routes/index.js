import { createStackNavigator } from 'react-navigation';

import Home from '../components/home';
import GroupContainer from '../containers/group-container';
import Stats from '../components/stats';

const AppStack = createStackNavigator(
  {
    Home,
    Group: GroupContainer,
    Stats,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppStack;
