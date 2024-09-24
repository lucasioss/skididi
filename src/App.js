import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splashscreen/SplashScreen';
import Login from './screen/Login';





const Stack = createNativeStackNavigator();

function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
      		<Stack.Screen name="SplashScreen" component={SplashScreen}  />
          <Stack.Screen name="Login" component={Login}  />
		</Stack.Navigator>
	</NavigationContainer>
  );
}

export default App; 