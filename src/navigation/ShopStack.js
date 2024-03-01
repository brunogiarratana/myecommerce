import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Home from '../Screens/Home'
import ItemListCategory from '../Screens/ItemsListCategory'
import ItemDetail from './../Screens/ItemDetail';


const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route,navigation})=>{
                return {
                header: () =>{
                    return <Header 
                                navigation={navigation}
                                title={route.name === "Home" ? "Categorias":
                                        route.name ==="ItemsListCategory" ? route.params.categorySelected:
                                        "Detalle"
                }/>
                }
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ItemsListCategory" component={ItemListCategory} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
  )
}

export default ShopStack