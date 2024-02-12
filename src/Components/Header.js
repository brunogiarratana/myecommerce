import { View, Text, StyleSheet, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import fuentes from "../utils/globals/fuentes"
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title = "Ecommerce", back }) => {
    if (title != "Home")
        return <View style={styles.container}>
            <View style={styles.leftComponent}>
                <Pressable onPress={back} style={styles.goBack}>
                    <AntDesign name='back' size={20} color="white" />
                    <Text style={styles.text1}>Back</Text>
                </Pressable>
            </View>
            <View style={styles.centerComponent}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    else

        return <View style={styles.containere}>
            <Text style={styles.text}>{title}</Text>
        </View>
}

export default Header

const styles = StyleSheet.create({
    containere: {
        backgroundColor: colors.primary,
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
    },
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: "100%",
        alignItems: "center",
        flexDirection: 'row',
    },
    text: {
        fontSize: 30,
        fontFamily: fuentes.ProtestRevolution,
    },
    goBack: {
        backgroundColor: colors.secundary,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 20,
        margin: 10,
        flexDirection: 'row',
        width: "60%",
    },
    text1: {
        fontSize: 17,
        textAlign: 'center',
        color: "white",
        marginHorizontal: 10
    },
    leftComponent: {
        justifyContent: "flex-start"
    },
    centerComponent: {
        alignItems: 'center',
    },


})

