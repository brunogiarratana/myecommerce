import { StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import colors from './src/utils/globals/colors';
import { useFonts } from "expo-font";
import { fontCollection } from './src/utils/globals/fuentes';
import ItemsListCategory from './src/Screens/ItemsListCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Header from './src/Components/Header';

const Stack = createNativeStackNavigator();



const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null




  return (
    <>
      <StatusBar backgroundColor='grey' />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => {
            return {
              header: () => {
                return <Header title={route.name === "Home" ? "Categorias" :
                                      route.name === "ItemsListCategory" ? route.params.categorySelected:
                                      ""
             } />
              }
            }
          }}
        >

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemsListCategory" component={ItemsListCategory} />

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
