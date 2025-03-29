import { StyleSheet, Touchable, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	defaultStyle: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		borderRadius: 5,
		fontSize: 16,
		color: '#ccc',
	},
})

interface StyledButtonProps {
	style?: object;
	children: React.ReactNode;
}


export default function StyledButton({style, children,}:StyledButtonProps) {
	return <TouchableOpacity style={[styles.defaultStyle, style]}>{children}</TouchableOpacity>;
}
