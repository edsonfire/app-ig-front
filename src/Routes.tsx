import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';


const Stack = createStackNavigator();

function Routes () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />   


            </Stack.Navigator>
        </NavigationContainer>
  );
}