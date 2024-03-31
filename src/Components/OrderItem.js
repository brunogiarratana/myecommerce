import { StyleSheet, Text, View } from 'react-native'
import {Feather} from "@expo/vector-icons"
import colors from '../utils/globals/colors'
import fuentes from '../utils/globals/fuentes'

const OrderItem = ({order}) => {

  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {order.createdAt}
            </Text>
            <Text style={styles.text2}>$ {order.total}</Text>
        </View>
        <Feather name="search" size={30} color="black"/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:"lightblue",
        borderWidth:2,
        margin:10,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
        
    },
    textContainer:{
        width:"70%"
    },
    text:{
        fontSize:17,
        fontFamily:fuentes.ProtestRevolution,
    },
    text2:{
        fontSize:19,
        fontFamily:fuentes.ProtestRevolution,
        color:"grey"
    }

})