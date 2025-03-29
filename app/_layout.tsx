import { Slot, Stack } from "expo-router";
import { SessionKeyContext } from "@/components/SessionKeyContext"
import { useState } from "react";

export default function RootLayout() {
  const [sessionKey,setSessionKey] = useState("LOGGED_OUT");
  return (
    <SessionKeyContext.Provider value={sessionKey}>
      <Slot screenOptions={{headerShown:false}}/>
    </SessionKeyContext.Provider>
  );
}