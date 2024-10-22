import { Text } from "react-native"
import { useFonts } from "expo-font"

interface styledTextProps {
    children? : any,
    size?: number,
    fontWeight?: any
}

const StyledText = ({children,  size = 30, fontWeight = '100'}:styledTextProps) => {
    const [loaded, error] = useFonts({'open':require('../assets/fonts/open/opensans.ttf')})
    return <Text style={{'fontFamily':'open', 'fontSize': size, color : 'white', 'fontWeight' : fontWeight}}>{children}</Text>
}

export default StyledText