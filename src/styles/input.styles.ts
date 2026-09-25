import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";


export const inputStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
    },

    container: {
        backgroundColor: colors.gray_100,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.smd,
        height: 48,
        borderRadius: spacing.md,
        borderWidth: 1,
        borderColor: colors.gray_300,
    },

    containerWithIcon: {
        paddingLeft: 40
    },

    icon: {
        position: "absolute",
        left: spacing.md,
        zIndex: 1,
    },
})