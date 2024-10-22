import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import StyledText from "@/components/StyledText";
import { Link } from "expo-router";
import TitleBar from '@/components/TitleBar'



export default function Index() {

  return (
    <View style={styles.background}>
      <TitleBar>Welcome</TitleBar>
      <View>
        <Link href='./calendar/'>
          <Pressable style = {styles.tile}>
            <Image width={100} source={require('@/assets/images/icons/calendar-month.svg')}></Image>
            <StyledText size = {20}>Calendar</StyledText>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
   background : {
    backgroundColor: 'black',
    height : '100%'
   },
   title_bar : {
    borderBottomWidth: 1,
    borderBottomColor : 'white'
   },
   title_container : {
    margin: 10,
    marginLeft: 30
   },
   tile : {
    width: 120,
    height : 120,
    borderColor: 'white',
    borderWidth: 3,
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   }
})