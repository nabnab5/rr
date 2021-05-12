import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,Image, Button,ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,
  
} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from '../firebase/fire';
import RNRestart from 'react-native-restart';

    const Graphs2 = ({navigation}) =>{
      let number =Math.floor(Math.random() * 10) + 30;
      const[loading, setLoading ] = useState(false);
      const [userData, setUserData] = useState(null);
      const  getGraph = async() => {
         await firebase.firestore().collection('nab')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
    
      }
      useEffect(() => {
        getGraph();
        RNRestart.Restart();
      }, [])

      
      const handleGraph = () => {
        firebase.firestore().collection("nab")
        .doc(firebase.auth().currentUser.uid)
        .set({
          one: userData ? userData.two :"",
          two: userData ? userData.three :"",
          three: userData ? userData.four :"",
          four: userData ? userData.five :"",
          five: userData ? userData.six :"",
          six: userData ? userData.seven :"",
          seven: userData ? userData.eight:"",
          eight: number,
        })
        .then(() => {
          change();
          setLoading(true);
        },[loading])
      }
      const change =()=>{
          userData.one=userData ? userData.two :""
          userData.two=userData ?userData.three :""
          userData.three=userData ?userData.four :""
          userData.four=userData ?userData.five :""
          userData.five=userData ?userData.six :""
          userData.six=userData ?userData.seven :""
          userData.seven=userData ?userData.eight:"",
          userData.eight=Math.floor(Math.random() * 100) + 1
      }
        return (
      <ImageBackground source={require('../assets/background/3.png')} style={styles.Backgroundcontainer}>
         <View style={{alignItems: 'center',marginBottom: 70}}>
          <Image source={require('../assets/images/heartbeat.png')} style={{width: 70,height: 70,}}  />
          <Text style={{color:'#568778',fontSize: 25,fontWeight: 'bold',marginTop: 10,opacity: 0.8}} >Heartbeat</Text>
        </View>
        <ScrollView horizontal={true}  >
        
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#9CCBBD",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/hot.png')}
                        style={{height:40,width:40}}
                       />
                       <Button  color='#9CCBBD' fontWeight='bold' title="temperature" onPress={() => navigation.replace('Graphs1')}/>
                   </View>

                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#568778",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/heartbeat.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#568778' fontWeight='bold' title="Heartbeat" onPress={() => navigation.replace('Graphs2')}/>
                   </View>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#9CCBBD",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/baby-weight.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#9CCBBD' fontWeight='bold' title="     weight   " onPress={() => navigation.replace('Graphs3')}/>
                   </View>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#9CCBBD",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/height.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#9CCBBD' fontWeight='bold' title="         Size         " onPress={() => navigation.replace('Graphs4')}/>
                   </View>
                   </ScrollView>
                   <View style={{flexDirection:'row' ,paddingHorizontal:30,marginTop:40,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>DAY        </Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>WEEK       </Text>
                        <View style={{backgroundColor:"#9BACAE",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                            <Icon name="md-refresh" size={24} color="#fff"
                              onPress = {()=> handleGraph()}/>
                        </View>
                        </View>
                <View style={styles.container}>
             
                <View style={{
      marginHorizontal: 20,
      marginTop: 40
    }}>
      <LineChart
  data={{
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", ],
    datasets:[
      {
        data: [userData ? userData.one : "5",userData ? userData.two : "8", userData ? userData.three : "7", userData ? userData.four : "8",userData ? userData.five : "8",userData ? userData.six : "8",userData ? userData.seven : "8",userData ? userData.eight : "8"  ],
      color: (opacity = 1) => `zz`, 
      strokeWidth: 2 
      }
    ]
  }}
  
  width={Dimensions.get("window").width}
  height={220}
 
    yAxisSuffix=""
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#FFF",
      backgroundGradientTo: "#97C4B0",
      decimalPlaces: 2 , 
      color: (opacity = 0) => `rgba(55, 47, 49, ${opacity})`,
      labelColor: (opacity = 1) =>  `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "white"
      }
    }}
      bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    />
    </View>
    
             </View>
             
        </ImageBackground>
        );
  }
    const styles = StyleSheet.create({
      Backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
          
          
          inputIcon: {
            position:'absolute',
            top: 400,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          }
        });


        export default Graphs2;