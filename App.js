import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';


import Login from './componants/Login';
import Enregistrer from './componants/Enregistrer';
import Sblash from './componants/sblash';
import Sitting from './componants/Sitting';
import Home from './componants/Home';
import Event from './componants/Event';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{headerShown:false}}  component={Login} />
      <Stack.Screen name="enregistrer" options={{headerShown:false}}  component={Enregistrer} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size,focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName =focused? 'home':'home-variant-outline';
            } else if (route.name === 'Event') {
              iconName = focused ?  'alpha-c-box':'alpha-c-box-outline';
            }else if (route.name === 'Sitting') {
              iconName =focused?'cog-refresh': 'cog-refresh-outline';
            }
            
           

            return <IconButton icon={iconName} size={30} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Tab.Screen name="Event" options={{headerShown:false}} component={Event} />
        <Tab.Screen name="Sitting" options={{headerShown:false}} component={Sitting} />

        
      </Tab.Navigator>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sblash" component={Sblash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
