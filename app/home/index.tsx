import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import StyledText from "@/components/StyledText";
import { Link,router } from "expo-router";
import TitleBar from '@/components/TitleBar'
import {styles} from '@/components/commonStyles'


export default function Index() {

  return (
    <View style={styles.background}>
      <TitleBar>Welcome</TitleBar>
      <View>
        <Link href='./calendar'>
          <Pressable style = {styles.tile} onPressOut={()=>{router.navigate('./calendar')}}>
            <Image style={homeStyles.tileImage} width={100} source={require('@/assets/images/icons/calendar-month.svg')}></Image>
            <StyledText>Calendar</StyledText>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  tileImage:{
  }
});

