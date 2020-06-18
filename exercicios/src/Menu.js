import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Simples from './components/simples/Simples';
import Teste from './components/Teste/Teste';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Simples">
      <Drawer.Screen
        name="Simples"
        component={Simples}
        options={{drawerLabel: 'Simples'}}
      />
      <Drawer.Screen
        name="Teste"
        component={Teste}
        options={{drawerLabel: 'Teste'}}
      />
    </Drawer.Navigator>
  );
}

const Menu = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Menu;
