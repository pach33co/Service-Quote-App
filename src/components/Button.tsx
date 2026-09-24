import { buttonStyles } from "@/styles/button.styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type TButtonProps = TouchableOpacityProps & {
    title: string,
    nameIcon: keyof typeof MaterialIcons.glyphMap
}

export function Button({title, nameIcon, ...rest}: TButtonProps) {
    return (
        <TouchableOpacity style={buttonStyles.container} {...rest}>
            <MaterialIcons name={nameIcon} size={24} color={colors.gray_100}/>
            <Text style={buttonStyles.title}>{title}</Text>
        </TouchableOpacity>
    )
}