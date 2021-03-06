import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Admin from '../screens/Admin'
import  NewAdmin from '../screens/NewAdmin'
import  Product from '../screens/Product'
import  StockDetails from '../screens/StockDetails'

const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="Admin" component={Admin} />
    <AppStack.Screen name="NewAdmin" component={NewAdmin} />
    <AppStack.Screen name="StockDetails" component={StockDetails} />
    <AppStack.Screen name="Product" component={Product} />
    </AppStack.Navigator>
    </NavigationContainer>
    );
}