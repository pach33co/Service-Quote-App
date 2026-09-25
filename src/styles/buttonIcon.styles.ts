import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";


export const buttonIconStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_100,
        borderRadius: 80,
        borderColor: colors.gray_300,
        borderWidth: 1,
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
    }
})