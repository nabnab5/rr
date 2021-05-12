import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,Image, Button,ImageBackground,ListItem,List} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,

} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from '../firebase/fire';

var firebaseConfig = {
  apiKey: "AIzaSyBKV2y0J7L2bxpGQkOD_ZeMg_a0U2QqDv0",
  authDomain: "nabnab-67f3a.firebaseapp.com",
  projectId: "nabnab-67f3a",
  storageBucket: "nabnab-67f3a.appspot.com",
  messagingSenderId: "470512071095",
  appId: "1:470512071095:web:dd689e6382e1bac21db832",
  measurementId: "G-CKNBWYJ4BN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

class Graphs1 extends React.Component {
  state={
    mylist:[]
  }
  writeUserData(number,labels){
    firebase.database().ref('temperature').push(
        {
            number:Math.floor(Math.random() * 100) + 1,
            labels:new Date().getHours()+':'+new Date().getMinutes()
        }
    ).then((data) => {
        console.log('data',data);
    }).catch((error) => {
        console.log('error',error);
    });

}
componentDidMount(){
  const myitems = firebase.database().ref('temperature').limitToLast(12)
  .on('value',datasnap=>{
    //console.log(Object.values(datasnap.val()))
    this.setState({mylist:Object.values(datasnap.val())})
  });
}



  

  render(props){
    console.log(this.state)
   

  return(
  
        <ImageBackground source={require('../assets/background/3.png')} style={styles.Backgroundcontainer}>
        <View style={{alignItems: 'center',marginBottom: 70}}>
          <Image source={require('../assets/images/hot.png')} style={{width: 70,height: 70,}}  />
          <Text style={{color:'#568778',fontSize: 25,fontWeight: 'bold',marginTop: 10,opacity: 0.8}} >Temperature</Text>
        </View>
        <ScrollView horizontal={true}  >
        
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#568778",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/hot.png')}
                        style={{height:40,width:40}}
                       />
                       <Button  color='#568778' fontWeight='bold' title="temperature" onPress={() => props.navigation.navigate('Graphs1')}/>
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
                        source={require('../assets/images/heartbeat.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#9CCBBD' fontWeight='bold' title="Heartbeat" onPress={() => props.navigation.navigate('Graphs2')}/>
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
                      <Button  color='#9CCBBD' fontWeight='bold' title="     weight   " onPress={() => props.navigation.navigate('Graphs3')}/>
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
                      <Button   color='#9CCBBD' fontWeight='bold' title="         Size         " onPress={() => props.navigation.navigate('Graphs4')}/>
                   </View>
                   </ScrollView>
              
                <View >
                <View style={{flexDirection:'row' ,paddingHorizontal:30,marginTop:40,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>DAY        </Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>WEEK       </Text>
                        <View style={{backgroundColor:"#9BACAE",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                            <Icon name="md-refresh" size={24} color="#fff"
                              onPress = {()=> this.writeUserData()}
                            />
                        </View>
                        </View>
                <View style={{
      marginHorizontal: 20,
      marginTop: 40
    }}>
      <LineChart
  data={{
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [36, 38.5 , 37, 37, 37, 37, 38, 38.5 , 38, 36, 38, 38],
      color: (opacity = 0.4) => `rgba(55, 47, 49, ${opacity})`, 
      strokeWidth: 2 
      }
    ]
  }}
 
  width={Dimensions.get("window").width}
  height={220}
 
    yAxisSuffix="°"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
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
    )}}

    const styles = StyleSheet.create({
      Backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
        container: {
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
    

        export default Graphs1;