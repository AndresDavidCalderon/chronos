import { StyleSheet,View } from "react-native";
import DayOfMonth from "./DayOfMonth";

const renderWeek = (starting:Date,mainMonth:number,renderDayOfWeek:boolean) => {
    let currentDate=new Date(starting.getTime())
    let week = []
    for(let i=0;i<7;i++){
        const dayDate=new Date()
        dayDate.setDate(currentDate.getDate())
        week.push(DayOfMonth(dayDate,currentDate.getMonth() == mainMonth,renderDayOfWeek))
        currentDate.setDate(currentDate.getDate()+1)
    }
    return <View style={calendarStyles.week} key={starting.toDateString()} >{week}</View>
};

export default function Month(ofDate:Date){
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


const calendarStyles = StyleSheet.create({
    week:{
        flex:1,
        flexDirection:'row'
    },
    month:{
        flex:1,
        flexDirection:'column'
    }
});