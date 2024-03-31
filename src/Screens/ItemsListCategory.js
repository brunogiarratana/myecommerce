import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import Search from '../Components/Search'
import ItemByCategory from '../Components/ItemByCategory'


const ItemsListCategory = ({ route, navigation }) => {
  const { categorySelected } = route.params
  const { data: products, isError, isLoading, isSuccess, error } = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")


  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(() => {
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(products.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return productTitleLower.includes(keywordLower)
    }))
  }, [categorySelected, keyword, products])

  if (isLoading) return <View><Text>cargando...</Text></View>

  return (
    <>
      <Search handlerKeyword={handlerKeyword} />
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