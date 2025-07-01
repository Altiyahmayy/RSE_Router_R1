
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style ={styles.container}>
      
        <Text style={styles.t1}>Say hello to your new {'\n'}app</Text>
       
        <Link href="/login" style={styles.button}>Log in</Link>
        <Link href="/signup"style={styles.button}>Sign up</Link>

      
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
          
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      backgroundColor: '#001f3f',
    },
    t1:{
        fontSize: 30,
        color: 'white',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:30,
        fontWeight:'bold',
        marginHorizontal:20,
        alignContent: 'center',
        textAlign: 'center',
    },
    button:{
        backgroundColor:"gray",
        borderRadius:50,
        marginBottom: 15,
        paddingHorizontal: 100,
        paddingVertical: 15,
        fontSize:20,
        color: 'white',
    }
})