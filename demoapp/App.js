/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoListScreen from './src/screens/TodoList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoDetailScreen from './src/screens/TodoDetail';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          initialRouteName="Todo">
          <Stack.Screen
            options={{headerShown: false}}
            name="Todo"
            component={TodoListScreen}
          />
          <Stack.Screen name="Details" component={TodoDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#497be8',
  },
});

export default App;
