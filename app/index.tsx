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
	return <Redirect href="/app" />;
}