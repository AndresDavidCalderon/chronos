import { Text } from "react-native"
import { useFonts } from "expo-font"
import { ReactNode } from "react"

interface StyledTextProps{
    children:ReactNode,
    style?:object
}

export default function StyledText({children=[],style={}}:StyledTextProps){
    const [loaded, error] = useFonts({'open':require('../assets/fonts/open/opensans.ttf')})
    return <Text style={[{color : 'white', fontWeight:'700',fontFamily:'open'},style]}>{children}</Text>
}
