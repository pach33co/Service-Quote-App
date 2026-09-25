import { buttonIconStyles } from "@/styles/buttonIcon.styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type TButonIcon = TouchableOpacityProps & {
    nameIcon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ nameIcon, ...rest }: TButonIcon ) {
    return (
        <TouchableOpacity style={buttonIconStyles.container} {...rest}>
            <MaterialIcons name={nameIcon} size={24} color={colors.primary}/>
        </TouchableOpacity>
    )
}