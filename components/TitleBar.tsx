import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'


interface titleBarProps {
    children? : any
}

const TitleBar = ({children}:titleBarProps) => {
    return <View style={styles.title_bar}>
            <View style={styles.title_container}>
                <StyledText size={60} fontWeight={900}>{children}</StyledText>
            </View>
        </View>
}

const styles = StyleSheet.create({
   title_bar : {
    borderBottomWidth: 1,
    borderBottomColor : 'white'
   },
   title_container : {
    margin: 10,
    marginLeft: 30
   }
})

export default TitleBar