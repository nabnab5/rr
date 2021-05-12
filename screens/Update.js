





import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ScrollView,

} from 'react-native';

import {useTheme} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

const Update = () => {

  const [image, setImage] = useState('https://i.pinimg.com/736x/48/4c/0d/484c0dafd42f1c0b32b8a1e6e390f642.jpg');
  const {colors} = useTheme();

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

  renderInner = () => (
    <View style={styles.panel}>
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
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
      <Text style={{fontWeight: 'bold'}}>Update your baby Profile</Text>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
        <Icon name={'pencil-outline'} size={20} color={'black'}
                   style={{left:150,bottom:35}}/>
                  <Text  style={{left:150,bottom:35,color:'black',fontFamily:'bold'}}>Update</Text>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={
                  require('../assets/images/bnte.jpg')
                }
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{ userData ? userData.name :'Lougayn'}</Text>
            
        </View>

        <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 24 }]}>{userData ? userData.gender : 'Female'}</Text>
                <Text style={[styles.text, styles.subText]}>gender</Text>
            </View>
            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                <Text style={[styles.text, { fontSize: 18 }]}>{userData ? userData.birthday : '24/11/2020'}</Text>
                <Text style={[styles.text, styles.subText]}>birthday</Text>
            </View>
            <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 24 }]}>{userData ? userData.weight : '12.30'}</Text>
                <Text style={[styles.text, styles.subText]}>kilogramme</Text>
            </View>
        </View>
        <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
            <Image source={require("../assets/images/hot.png")} style={{width: 90,height: 90,}} resizeMode="cover"></Image>
                <Text style={[styles.text, { fontSize: 24 }]}>36</Text>
                <Text style={[styles.text, styles.subText]}>temperature</Text>
            </View>
            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Image source={require("../assets/images/heartbeat.png")} style={{width: 90,height: 90,}} resizeMode="cover"></Image>
                <Text style={[styles.text, { fontSize: 24 }]}>90</Text>
                <Text style={[styles.text, styles.subText]}>heartbeat</Text>
            </View>
            
        </View>

        <View style={{ marginTop: 32 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/images/bebe1.webp")} style={styles.image} resizeMode="cover"></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/images/bebe2.jpg")} style={styles.image} resizeMode="cover"></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/images/bebe3.jpg")} style={styles.image} resizeMode="cover"></Image>
                </View>
            </ScrollView>
        </View>
        </View>
      </Animated.View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
},
add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
},
statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
},
statsBox: {
    alignItems: "center",
    flex: 1
},
mediaImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
},
mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
},
recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
},
recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
},
activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
},
titleBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 24,
  marginHorizontal: 16
},
subText: {
  fontSize: 13,
  color: "#AEB5BC",
  textTransform: "uppercase",
  fontWeight: "500"
},
profileImage: {
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden"
},
dm: {
  backgroundColor: "#41444B",
  position: "absolute",
  top: 20,
  width: 40,
  height: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center"
},
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  btnlogin:{
    width: 80,
    height: 45,
    borderRadius: 50,
    backgroundColor:'#CD5C5C',
    justifyContent:'center',
    top:15,
    left:100

  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
export default Update;