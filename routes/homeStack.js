import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from "../screens/home";
import Details from "../screens/details";


export default function HomeStack(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title: 'EVENTS',
                headerStyle: {
                    backgroundColor: '#c21158',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
             }}

        />
            <Stack.Screen 
            name="Details" 
            component={Details} 
            options={{
                title: 'Event Details',
                headerStyle: {
                    backgroundColor: '#c21158',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
             }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}