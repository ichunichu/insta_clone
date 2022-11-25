import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Image, SafeAreaView, Button} from 'react-native';
import colors from "react-native/Libraries/NewAppScreen/components/Colors";

export function Post(props){
  return (
      <View style={PostStyle.card}>
        <Image source={{uri:"https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg",}} style={PostStyle.photo} />
        <View style={PostStyle.info}>
          <View>
            <Text>{props.title}</Text>
            <Text>{props.date}</Text>
          </View>
          <View>
            <Text>{props.likes} Likes</Text>
            <Text>{props.views} Views</Text>
          </View>
        </View>
      </View>

  )
}
const PostStyle = StyleSheet.create({
    card : {
        marginHorizontal:16,
        marginVertical:8,
        backgroundColor:colors.light,
        borderRadius:10,
        flex:1,
    },
    photo:{
        width:"100%",
        height:500,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    info:{
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1,
    }
})




export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>InstaClone</Text>

        </View>
        <ScrollView style={{width:"100%",}}>
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />
            <Post title={"War"} date={"NOW"} likes={1209} views={1987} />

        </ScrollView>
          <Button onPress={()=>{

          }} title={"Click me"}/>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
