import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface StyledTextInputProps {
	style?: object;
}

export default function StyledTextInput({style}:StyledTextInputProps) {
	return <TextInput style={[styles.defaultStyle, style]} />;
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
