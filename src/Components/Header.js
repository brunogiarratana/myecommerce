import { View, Text, StyleSheet, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import fuentes from "../utils/globals/fuentes"
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title = "Ecommerce"}) => {
   
        return <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
}

export default Header

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: "100%",
        marginVertical: 20,
        alignItems: "center",
 
        position:"relative"
    },
    text: {
        fontSize: 30,
        fontFamily: fuentes.ProtestRevolution,
    },

    text1: {
        fontSize: 17,
        textAlign: 'center',
        color: "white",
        marginHorizontal: 10
    },
})

