import { Image,StyleSheet,View,Button, Pressable } from 'react-native';

interface ForwardAndBackProps {
	goBack: () => void;
	goForward: () => void;
}

export default function ForwardAndBack({ goBack, goForward }:ForwardAndBackProps) {
	return (
		
			<View style={{flexDirection:'row',borderColor:"white",borderWidth:1,borderRadius:5}}>
				<Pressable onPress={goBack} style={styles.button}>
					<Image source={require("@/assets/images/icons/arrow-back.svg")}></Image>
				</Pressable>
				<Pressable onPress={goForward} style={styles.button}>
					<Image source={require("@/assets/images/icons/arrow-forward.svg")}></Image>
				</Pressable>
			</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 30,
		height: 30,
		backgroundColor: 'transparent',
		borderWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});