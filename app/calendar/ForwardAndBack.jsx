import { Image,StyleSheet } from 'react-native';

export default function ForwardAndBack({ goBack, goForward }) {
	return (
		<div>
			<button onClick={goBack} style={{width:30, height:30, backgroundColor:'transparent'}}>
				<Image source={require("@/assets/images/icons/arrow-back.svg")}></Image>
			</button>
			<button onClick={goForward} style={{width:30, height:30, backgroundColor:'transparent'}}>
				<Image source={require("@/assets/images/icons/arrow-forward.svg")}></Image>
			</button>
		</div>
	);
}