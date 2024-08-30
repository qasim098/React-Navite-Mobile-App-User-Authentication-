import { View,Text,StyleSheet } from "react-native";
function Home(){
    return<>
    <View style={styles.container}>
        <Text style={styles.textcolor}>Home screen</Text>
    </View>
    </>
  }
export default Home;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000B21",
          alignItems:"center",
        justifyContent:"center"
    },
    textcolor:{
        color:"white"
    }
})