import { View, TextInput, TextInputProps, StyleProp, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { inputStyles } from "@/styles/input.styles";
import { colors } from "@/styles/colors";

type TInputProps = TextInputProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    containerStyle?: StyleProp<ViewStyle>
}

export function Input({ icon, containerStyle, style, ...rest }: TInputProps) {
    return (
        <View style={[inputStyles.wrapper, containerStyle]}>
            {icon && (
                <MaterialIcons
                    name={icon}
                    size={20}
                    color={colors.gray_400}
                    style={inputStyles.icon}
                />
            )}
            <TextInput
                style={[inputStyles.container, icon && inputStyles.containerWithIcon, style]}
                placeholderTextColor={colors.gray_400}
                {...rest}
            />
        </View>
    )
}