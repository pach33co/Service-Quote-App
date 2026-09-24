import { StyleSheet } from "react-native";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { colors } from "./colors";


export const headerStyles = StyleSheet.create({
    container: {
        padding: spacing.md,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: colors.gray_200,
        borderBottomWidth: 1
    },
    headerContainerText: {
        gap: spacing.xxs
    },
    title: {
        ...typography.title,
        color: colors.primary
    },
    subtitle: {
        ...typography.subtitle,
        color: colors.gray_500
    }
})