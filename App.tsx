import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import RiskAlertScreen from './src/screens/RiskAlert';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'SafeBet - Monitoramento',
            headerBackVisible: false,
            gestureEnabled: false,
            headerRight: () => (
              <Text
                style={{
                  marginRight: 15,
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  });
                }}
              >
                Sair
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="RiskAlert"
          component={RiskAlertScreen}
          options={{ title: 'Alerta de Risco' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
