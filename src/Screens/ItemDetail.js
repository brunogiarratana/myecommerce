import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop'
import Counter from '../Components/Counter'

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { productId } = route.params
  const {data:product,isLoading}= useGetProductQuery(productId)

  if(isLoading) return <View><Text>cargando...</Text></View>

  return (
    <View style={styles.container}>
      <View style={styles.content} >
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          
          <Counter 
            initialValue={1}
            product={product} 
            textButton="Carrito" />
        </View>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center"
  },
  content: {
    width: "100%"
  },

  image: {
    width: "100%",
    height: 200
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },

  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  price: {
    fontSize: 30
  },
  buyNow: {
    backgroundColor: colors.secundary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buyNowText: {
    color: "white"
  }
})