import { StyleSheet } from "react-native";
import { spacing } from "./spacing";
import { colors } from "./colors";
import { typography } from "./typography";


export const buttonStyles = StyleSheet.create({
    container: {
        padding: spacing.smd,
        borderRadius: 16,
        backgroundColor: colors.primary,
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xxs
    },
    title: {
        ...typography.button,
        color: colors.gray_100
    }
})