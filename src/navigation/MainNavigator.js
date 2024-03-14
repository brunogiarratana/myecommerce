import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import colors from '../utils/globals/colors';
import TabBarIcon from '../Components/TabBarIcon';
import ProfileStack from './ProfileStack';
import { useDispatch } from 'react-redux';
import { useGetImageQuery } from '../app/services/profile';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
   
  return (
        <NavigationContainer>
           <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar


                }}
           >
                <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/>
                    }}

                />

                <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Perfil" nameIcon="user" focused={focused}/>
                    }}

                />
             
           </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.primary,
        height:80,
        position:"absolute",
        left:20,
        right:20,
        bottom:25,
        borderRadius:15,
        elevation:4,
        /*Shadow IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
    }
})