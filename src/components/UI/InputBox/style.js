import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const inputboxstyle = StyleSheet.create({
    input: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.TextColor,
    },
    inputcontainer: {
        flex: 2/3,
    },
    inputtextheader: {
        fontSize: 17,
        color: Colors.TextColor,
    },
    inputtext: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contrycontainer: {
        flex: 1/3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    picker: {
        width: 150,
        height: 50,
        backgroundColor: Colors.Primary,
        borderRadius: 10,
        color: Colors.TextColor,
    },
    swapline: {
        height: 1,
        width: 70,
        backgroundColor: Colors.TextColor,
        margin: 10,
    },
    flag: {
        width: 27,
        height: 27,
        borderRadius: 30,
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
        borderRadius: 50,
        paddingLeft: 10,
        marginEnd: 10,
    }
})

export default inputboxstyle;
