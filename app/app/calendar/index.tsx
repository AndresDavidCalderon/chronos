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

    const goBack = () => {
        setReferenceDate(new Date(referenceDate.getFullYear(),referenceDate.getMonth()-1,1))
    }
    const goForward = () => {
        setReferenceDate(new Date(referenceDate.getFullYear(),referenceDate.getMonth()+1,1))
    }

    return <StrictMode>
        <View style={styles.background}>
            <TitleBar>Calendar</TitleBar>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10, padding:5}}>
                <StyledText style={{fontSize:20}}>{referenceDate.toLocaleString('default',{month:'long'})+" "+referenceDate.getFullYear().toString()}</StyledText>
                <ForwardAndBack goBack={goBack} goForward={goForward}></ForwardAndBack>
            </View>
            <Month ofDate={referenceDate} ></Month>
        </View>
    </StrictMode>
}


export default CalendarIndex