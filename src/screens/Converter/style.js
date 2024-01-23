import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

const converterstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.Primary,
    },
    header: {
        fontSize: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: Colors.TextColor,
    },
})

export default converterstyles;