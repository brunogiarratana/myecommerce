import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react'
import Home from './src/Screens/Home';
import colors from './src/utils/globals/colors';
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fuentes';
import ItemsListCategory from './src/Screens/ItemsListCategory';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected, setCategorySelected] = useState("")
  const [productId, setProductId] = useState(0)
  if (!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }
  const selectedProductId = (id) => {
    setProductId(id)
  }
  const back = () =>{
    setCategorySelected("")
  }
  return (
    <>
      {categorySelected ?
        <ItemsListCategory
          back={back}
          selectedProductId={selectedProductId}
          categorySelected={categorySelected} />
        :
        <Home selectedCategoryState={selectedCategoryState} />
      }

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
