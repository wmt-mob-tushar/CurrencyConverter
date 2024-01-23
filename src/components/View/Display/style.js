import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const displaystyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.Secondary,
        margin: 15,
        borderRadius: 10,
    },
    swap: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
    },
    swapicon: {
        transform: [{ rotate: '90deg' }],
        backgroundColor: Colors.Primary,
        padding: 5,
        borderRadius:50
    },
    swapline: {
        height: 1,
        width: 70,
        backgroundColor: Colors.TextColor,
        margin: 10,
    },
})

export default displaystyle;