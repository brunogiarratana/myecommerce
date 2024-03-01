import { View , Text ,StyleSheet,Platform ,StatusBar, Pressable  } from "react-native"
import colors from "../utils/globals/colors"
import fuentes from "../utils/globals/fuentes"
import { AntDesign } from '@expo/vector-icons';

const Header = ({title="Ecommerce",navigation}) => {

    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} color="black"/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: colors.primary,
        height:80,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    text: {
        fontSize: 30,
        fontFamily: fuentes.ProtestRevolution,
    },

    goBack:{
        position:"absolute",
        left:10,
        bottom:15

    }
})

