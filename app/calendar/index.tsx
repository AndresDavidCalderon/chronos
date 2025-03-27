import { View,Dimensions } from "react-native"
import TitleBar from "@/components/TitleBar"
import {styles} from '@/components/commonStyles'
import { useState } from "react"
import { StrictMode } from "react"
import Month from "./Month"
import StyledText from "@/components/StyledText"
import ForwardAndBack from "./ForwardAndBack"


const CalendarIndex = () => {
    const [referenceDate,setReferenceDate] = useState(new Date())

    return <StrictMode>
        <View style={styles.background}>
            <TitleBar>Calendar</TitleBar>
            <StyledText style={{marginLeft:30,fontSize:Dimensions.get("window").width*0.02}}>{referenceDate.toLocaleString('default',{month:'long'})}</StyledText>
            <ForwardAndBack goBack={()=>{}} goForward={()=>{}}></ForwardAndBack>
            {Month(referenceDate)}
        </View>
    </StrictMode>
}


export default CalendarIndex