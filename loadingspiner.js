import { ActivityIndicator, View ,StyleSheet} from "react-native";

function Loadingoverlay(){
    return<View style={styles.container}>
      <ActivityIndicator size={"large"}color={"#fa5252"}/>
      
    </View>
}
export default Loadingoverlay;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})