import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '../utils/data/products.json'
import Header from '../Components/Header'
import { useEffect, useState } from 'react'
import ItemByCategory from '../Components/ItemByCategory'
import colors from '../utils/globals/colors'
import { AntDesign } from "@expo/vector-icons"

const ItemsListCategory = ({ route, navigation }) => {
  const {categorySelected} = route.params

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(() => {
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  }, [categorySelected])


  return (
    <>
    
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemByCategory item={item} navigation={navigation} />}
      />
    </>
  )
}

export default ItemsListCategory

const styles = StyleSheet.create({

})