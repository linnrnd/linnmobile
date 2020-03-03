import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Login from './screen/login';
import Register from './screen/register';
export default createAppContainer(
    createSwitchNavigator(
        {
        Login:{screen:Login},
        Register:{screen:Register}
        },
        {
            initialRouteName:"Login"
        }
    )
);