import React ,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,Button, KeyboardAvoidingView,Alert, SafeAreaView } from 'react-native';
import {TextInput} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import {Ionicons} from "@expo/vector-icons";
import firebase from '../firebase/fire';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialIcons} from '@expo/vector-icons';
require("firebase/firestore");


const Profile = ({navigation}) => {
  
  const [userData, setUserData] = useState(null);
  const getUser = async() =>{
  const currentUser = await firestore()
  .collection('baby')
  .doc(firebase.auth().currentUser.uid)
  .get()
  .then((documentSnapshot) => {
    if( documentSnapshot.exists ) {
      console.log('User Data', documentSnapshot.data());
      setUserData(documentSnapshot.data());
    }
  })}
  useEffect(()=>{
    getUser();
  }, [])
 
  const handleCreate = () => {
    firebase.firestore().collection("baby")
    .doc(firebase.auth().currentUser.uid)
    .update({
      name: userData.name,
      gender: userData.gender,
      weight: userData.weight,
      birthday: userData.birthday,
    })
    .then(() => {
      navigation.replace('BabyProfile');
      Alert.alert(
        'Profile Created!',
        'Your profile has been created successfully.'
      );
    })
  }
  
 
  
  
  return (
    <SafeAreaView style={styles.container}> 
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
           <KeyboardAvoidingView behavior="position" style={styles.root} >
             <View style={styles.logocontainer}>
                <Text style={styles.welcome}>CREATE  YOUR</Text>
                <Text style={styles.logoText}>BABY PROFIL</Text>
          
             </View>
             
            
               
        <TouchableOpacity style={styles.avatarPlaceHolder}>
        <Image source={require("../assets/images/profile.png")}
        style={styles.avatar} resizeMode="center"></Image>
        <Ionicons 
           name = "add-circle-outline"
           size={40}
           color="gray"
           style= {{marginLeft: 55, marginBottom: 65}}
           ></Ionicons>
        </TouchableOpacity>
        <View style={styles.inputcontainer}>
        <Icon name={'ios-person-outline'} size={28} color={'#045610'}
          style={styles.inputIcon} />
           <TextInput
                style={styles.input}
                placeholder={'name'}
                underlineColorAndroid='transparent'
                value={userData ? userData.name : ''}
                onChangeText={(txt) => setUserData({...userData, name: txt})} 
           />

        </View>
        <View style={styles.inputcontainer}>
        <Icon name={'ios-calendar-outline'} size={28} color={'#045610'}
          style={styles.inputIcon} />
          <View>
           <TextInput
                style={styles.input}
                placeholder={'birthday'}
                keyboardType ='number-pad'
                placeholderTextColor={'#7E867F'}
                underlineColorAndroid='transparent'
                value={userData ? userData.birthday : ''}
                onChangeText={(txt) => setUserData({...userData, birthday: txt})} 
           />

        </View>
        </View>
  
  
        <View style={styles.inputcontainer}>
        <MaterialIcons name={'1k'} size={28} color={'#045610'}
          style={styles.inputIcon} />
          <View>
           <TextInput
                style={styles.input}
                placeholder={'weight'}
                placeholderTextColor={'#7E867F'}
                keyboardType ='number-pad'
                underlineColorAndroid='transparent'
                value={userData ? userData.weight : ''}
                onChangeText={(txt) => setUserData({...userData, weight: txt})} 
           />

        </View>
  
  
        </View>
        
        <View style={styles.inputcontainer}>
        <Icon name={'ios-calendar-outline'} size={28} color={'#045610'}
          style={styles.inputIcon} />
           <TextInput
                style={styles.input}
                placeholder={'gender'}
                placeholderTextColor={'#7E867F'}
                underlineColorAndroid='transparent'
                value={userData ? userData.gender : ''}
                onChangeText={(txt) => setUserData({...userData, gender: txt})}
           />

        </View>
  
  
       
        
        
        <View>
        <TouchableOpacity style ={styles.btnlogin}>
        <Button color='transparent'
         fontWeight='bold' 
         title="Add" 
         shadowColor= 'rgba(0, 0, 0, 0.1)'
         shadowOpacity= '0.8'
         onPress={() => handleCreate()}/>
         </TouchableOpacity>
        </View>
        
        </KeyboardAvoidingView>
      </ImageBackground>  
      </SafeAreaView>

)
  
}
const styles = StyleSheet.create({
  root:{
        flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      
  },
    Backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        
      },
      logo: {
        width: 90,
        height: 90,
        
      },
      
      logocontainer: {
        alignItems: 'center',
        marginBottom: 0,
      },
      inputcontainer: {
        marginTop: 12,
        borderWidth:3,
        borderColor:'#CD5C5C',
        borderRadius:50,
        top:40
      },
      welcome:{
        color:'#CD5C5C',
        fontSize:35,
        fontWeight: 'bold',
        top:65
      },
      logoText: {
        color: '#045610',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.8,
        top:50
      },
      input: {
        width: 250,
        height: 40,
        borderRadius: 50,
        fontSize: 17,
        paddingLeft: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: 'black',
        marginHorizontal: 20,
        
        
      },
      
      btnlogin:{
        width: 80,
        height: 45,
        borderRadius: 50,
        backgroundColor:'#CD5C5C',
        justifyContent:'center',
        top:15,
        left:100,
        top:50,
        
      },
      avatar:{
         position: "absolute",
         width: 100,
        height:100,
        borderRadius:50,
      },
      avatarPlaceHolder:{
        width: 90,
        height:90,
        backgroundColor:"#E1E2E6",
        borderRadius:50,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center",
        top:25,
        left:100
      },
      text:{
        color:'#fff',
        textAlign:'center',
        fontSize:18,
      },
      signuptextcont:{
        top:25,
        flexDirection:'row',
        
      },
      inputIcon: {
        position:'absolute',
        top: 8,
        left: 30,
        justifyContent:'center',
        alignItems:'center',
      },
      

      texti:{
       color:'#7E867F',
      },
      textu:{
        color:'#7E867F',
        fontWeight:'bold'
      },
      errorMessage:{
        height:72,
        alignItems: "center",
        justifyContent:"center",
        marginHorizontal:30
      },
      error:{
        color: "#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
      }
  
    });
    export default Profile;