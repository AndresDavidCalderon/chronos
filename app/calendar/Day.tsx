import {useState,useEffect} from 'react'
import {View,Text, StyleSheet} from 'react-native'

export default function Day(date:Date,isMainMonth:boolean, renderDayOfWeek:boolean){
	const [events,setEvents] = useState([])
	useEffect(()=>{
		const fetchData = async () => {
			let response=null
			try{
				response = await fetch('http://localhost:8000/calendar/events?date='+date.toDateString())
			}catch(e){
				try {
					console.log(date.getDate())
					response = await fetch('http://192.168.137.1:8000/calendar/events?date='+date.toDateString())
				} catch(e){
					console.error("Error fetching Events on localhost: "+e)
				}
			}
			if (response!=null){
				const result = await response.json()
				setEvents(result)
			}
		}
		fetchData()
	},[])

	const eventElements=[]
	for (let event in events){
		eventElements.push(<View style={dayStyles.event}><Text>{event}</Text></View>)
	}

	return <View key={date.toDateString()} style={[isMainMonth ? dayStyles.day:dayStyles.dayNotMain]} >
		{renderDayOfWeek ?<Text style={[dayStyles.dayText,dayStyles.dayTextAny]}>{date.toDateString().substring(0,3)}</Text>:null}
		<Text style={[isMainMonth ? dayStyles.dayText:dayStyles.dayTextNotMain,dayStyles.dayTextAny]}>{date.getDate()}</Text>
	</View>
}

const dayStyles = StyleSheet.create({
	
    day:{
        borderColor:'#72727d',
        borderStyle:'solid',
        borderWidth:0.5,
        flex:1,
        margin:0.5
    },
    dayNotMain:{
        borderColor:'#2d2d2e',
        borderStyle:'solid',
        borderWidth:0.5,
        flex:1,
        margin:0.5
    },
    event:{
        width:'100%',
        height:'10%',
    },
    dayTextAny:{
        textAlign:'center',
    },
    dayText:{
        color:'white'
    },
    dayTextNotMain:{
        color:'gray',
        fontSize:10
    },
})