import { Text, View } from "react-native";
import { Button } from "./Button";
import { headerStyles } from "@/styles/header.styles";


export function Header() {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.headerContainerText}>
                <Text style={headerStyles.title}>Orçamentos</Text>
                <Text style={headerStyles.subtitle}>Você tem 1 item em rascunho</Text>
            </View>
            <Button title="Novo" nameIcon="add" />
        </View>
    )
}