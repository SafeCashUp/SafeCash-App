import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../views/Inicial/Inicial';
import Sobre from '../views/Sobre/Sobre'

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="InicialIn">
          <Drawer.Screen
              name="InicialIn"
              component={Inicial}
              options={
                { headerStyle: { backgroundColor: '#151515'},
                  headerTintColor: 'gainsboro',
                  title: 'Home'
                }
              }
          />
          <Drawer.Screen
              name="Sobre"
              component={Sobre}
              options={
                { headerStyle: { backgroundColor: '#151515'},
                  headerTintColor: 'gainsboro'
                }
              }
          />
        </Drawer.Navigator>
    );
}
export default RotasDrawer;