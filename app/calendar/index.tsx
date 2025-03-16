import { View,Text,StyleSheet } from "react-native"
import TitleBar from "@/components/TitleBar"
import {styles} from '@/components/commonStyles'

const CalendarIndex = () => {
    return <View style={styles.background}>
        <TitleBar>Calendar</TitleBar>
        {renderMonth(new Date())}
    </View>
}

const renderMonth = (ofDate:Date) => {
    let starting = new Date(ofDate.getTime())
    let month:number = ofDate.getMonth()
    starting.setDate(1)
    let currentDate=new Date(starting.getTime())
    if (starting.getDay() != 0){
        currentDate.setDate(currentDate.getDate()-starting.getDay()+1)
    }
    let weeks=[]
    while(true){
        weeks.push(renderWeek(currentDate,month,weeks.length == 0))
        currentDate.setDate(currentDate.getDate()+7)
        if (currentDate.getMonth() != starting.getMonth()){
            break
        }
    }
    return <View style={calendarStyles.month}>{weeks}</View>

};

const renderWeek = (starting:Date,mainMonth:number,renderDayOfWeek:boolean) => {
    let currentDate=new Date(starting.getTime())
    let week = []
    for(let i=0;i<7;i++){
        week.push(renderDay(currentDate,currentDate.getMonth() == mainMonth,renderDayOfWeek))
        currentDate.setDate(currentDate.getDate()+1)
    }
    return <View style={calendarStyles.week} key={starting.toDateString()} >{week}</View>
};

const renderDay = (date:Date,isMainMonth:boolean, renderDayOfWeek:boolean) => {
    return <View key={date.toDateString()} style={calendarStyles.day} >
        {renderDayOfWeek ?<Text style={[calendarStyles.dayText,calendarStyles.dayTextAny]}>{date.toDateString().substring(0,3)}</Text>:null}
        <Text style={[isMainMonth ? calendarStyles.dayText:calendarStyles.dayTextNotMain,calendarStyles.dayTextAny]}>{date.getDate()}</Text>
    </View>
};

const calendarStyles = StyleSheet.create({
    dayTextAny:{
        textAlign:'center',
    },
    dayText:{
        color:'white'
    },
    day:{
        borderColor:'gray',
        borderStyle:'solid',
        borderWidth:0.5,
        flex:1
    },
    week:{
        flex:1,
        flexDirection:'row'
    },
    month:{
        flex:1,
        flexDirection:'column'
    },
    dayTextNotMain:{
        color:'gray'
    }
});

export default CalendarIndex