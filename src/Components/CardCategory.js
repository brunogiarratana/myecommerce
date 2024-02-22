import { Pressable, StyleSheet, Text} from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fuentes from '../utils/globals/fuentes'

const CardCategory = ({item, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ItemsListCategory",{categorySelected:item})}>
      <ShadowPrimary style={styles.container}>
          <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:colors.secundary,
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:5
    },
    text:{
        color:"white",
        fontSize:16,
        fontFamily:fuentes.ProtestRiot
    }
})