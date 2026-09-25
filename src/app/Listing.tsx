import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function Listing() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray_100 }}>
            <StatusBar barStyle={'dark-content'} />

            <Header />

            <View style={{ paddingHorizontal: spacing.md, paddingVertical: spacing.lg, gap: spacing.lg }}>

                <View style={{ flexDirection: "row", gap: spacing.sm, alignItems: "center" }}>
                    <Input placeholder="Título ou Cliente" icon="search" />
                    <ButtonIcon nameIcon="tune" />
                </View>

            </View>

        </SafeAreaView>
    )
}