import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../Screens/Cart.js'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()
const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={({navigation})=>{
            return {
                header: () => {
                    return <Header title='Carrito' navigation={navigation}/>  
                }
            }
        }}

    >
        <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}

export default CartStack