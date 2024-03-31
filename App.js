import { StyleSheet } from 'react-native';
import colors from './src/utils/globals/colors';
import { useFonts } from "expo-font";
import { fontCollection } from './src/utils/globals/fuentes';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/utils/db';

(async()=>{
  const t= await init()
  console.log(t)
})()

init()

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor='grey' />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
      
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
