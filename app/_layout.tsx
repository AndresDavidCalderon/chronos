import { Slot, Redirect } from "expo-router";
import { SessionKeyContext } from "@/components/SessionKeyContext"
import { useState } from "react";
import { View } from "react-native";
import TitleBar from "@/components/TitleBar";
import commonStyles from "@/components/commonStyles";
import StyledTextInput from "@/components/StyledTextInput";
import StyledText from "@/components/StyledText";
import StyledButton from "@/components/StyledButton";

export default function RootLayout() {
  const [sessionKey,setSessionKey] = useState("LOGGED_OUT");
  const handleLogin = () => {
    setSessionKey("LOGGED_IN");
  }

  if (sessionKey === "LOGGED_OUT") {
    return (
      <View style={commonStyles.background}>
        <TitleBar>Log in to chronos</TitleBar>
        <View style={{flex: 1, flexDirection:"column" , alignItems: "center", margin:10}}>
          <StyledText style={{marginTop: 20}} >Username</StyledText>
          <StyledTextInput style={{marginTop: 20}}autoCorrect={false}/>
          <StyledText style={{marginTop: 20}}>Password</StyledText>
          <StyledTextInput style={{marginTop: 20}} props={{secureTextEntry:true}}/>
          <StyledButton style={{marginTop: 20}} onPress={handleLogin}><StyledText>Log in</StyledText></StyledButton>
          <StyledButton style={{marginTop: 20}} onPress={handleLogin}><StyledText>Sign up</StyledText></StyledButton>
        </View>
      </View>
    );
  }


  return (
    <SessionKeyContext.Provider value={sessionKey}>
      <Slot screenOptions={{headerShown:false}}/>
    </SessionKeyContext.Provider>
  );
}