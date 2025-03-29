import { useContext } from "react";
import { SessionKeyContext } from "@/components/SessionKeyContext";
import TitleBar from "@/components/TitleBar";
import commonStyles from "@/components/commonStyles";
import { Button, TextInput, View } from "react-native";
import StyledTextInput from "@/components/StyledTextInput";
import StyledText from "@/components/StyledText";
import StyledButton from "@/components/StyledButton";
import { Redirect } from "expo-router";

export default function Index() {
  const sessionKey = useContext(SessionKeyContext);
  if (sessionKey !== "LOGGED_OUT") {
	return (
	  <Redirect href={"/home"} />
	);
  }
  return (
	<View style={commonStyles.background}>
		<TitleBar>Log in to chronos</TitleBar>
		<View style={{flex: 1, flexDirection:"column" , alignItems: "center", margin:10}}>
			<StyledText style={{marginTop: 20}}>Username</StyledText>
			<StyledTextInput style={{marginTop: 20}}/>
			<StyledText style={{marginTop: 20}}>Password</StyledText>
			<StyledTextInput style={{marginTop: 20}}/>
			<StyledButton style={{marginTop: 20}}><StyledText>Log in</StyledText></StyledButton>
		</View>
	</View>
  );
}