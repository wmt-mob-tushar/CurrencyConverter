import { StyleSheet } from "react-native";
import {Colors} from "../../../utils"

const keyboardstyle = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    row: {
        flexDirection: "row",
    },
    convertebtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.ButtonColor,
        marginHorizontal: 30,
        marginVertical: 20,
        padding: 13,
        borderRadius: 60,
    },
    text: {
        color: Colors.TextColor,
        fontSize: 18,
        letterSpacing: 1.5,
        fontWeight: "bold",
    }
})

export default keyboardstyle;