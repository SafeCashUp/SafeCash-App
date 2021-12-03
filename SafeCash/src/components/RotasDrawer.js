import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Inicial from '../views/Inicial/Inicial';
import Sobre from '../views/Sobre/Sobre'

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return (
        <Drawer.Navigator
          initialRouteName="InicialIn"
          screenOptions={{
            drawerStyle: {
              backgroundColor: 'gainsboro',
              paddingVertical: 20
            },
            drawerActiveBackgroundColor: 'silver'
          }}
          >
          <Drawer.Screen
              name="InicialIn"
              component={Inicial}
              options={
                { headerStyle: { backgroundColor: '#151515'},
                  headerTintColor: 'gainsboro',
                  title: 'Home',
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#FF781F' : '#151515' }}>Home</Text>),
                  drawerIcon: (({focused}) => <AntDesign color={focused ? '#FF781F' : '#151515'} size={20} name="home"/>)
                }
              }
          />
          <Drawer.Screen
              name="Sobre"
              component={Sobre}
              options={
                { headerStyle: { backgroundColor: '#151515'},
                  headerTintColor: 'gainsboro',
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#FF781F' : '#151515' }}>Sobre</Text>),
                  drawerIcon: (({focused}) => <AntDesign color={focused ? '#FF781F' : '#151515'} size={20} name="exclamationcircleo"/>)
                }
              }
          />
        </Drawer.Navigator>
    );
}
export default RotasDrawer;