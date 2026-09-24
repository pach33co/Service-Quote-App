import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function Listing() {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: colors.gray_100}}>
            <StatusBar barStyle={'dark-content'} />
            <Header />
        </SafeAreaView>
    )
}