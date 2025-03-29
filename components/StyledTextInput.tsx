import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface StyledTextInputProps {
	style?: object;
	autoCorrect?: boolean;
	props?: any;
}

export default function StyledTextInput({style, autoCorrect=true ,props}:StyledTextInputProps) {
	return <TextInput style={[styles.defaultStyle, style]} autoCorrect={autoCorrect} {...props} />;
}

const styles = StyleSheet.create({
	defaultStyle: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		borderRadius: 5,
		fontSize: 16,
		color: '#ccc',
	},
});
