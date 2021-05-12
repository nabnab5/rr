import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Text, View } from 'react-native';
const Vaccination = () =>{
  return (
    <ImageBackground source={require('../assets/images/BGI.jpg')} style={styles.Backgroundcontainer}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.title}>
            <Text>Schedule of vaccinations</Text>
          </View>
        <View style={styles.cartTitle}>
           <Text>First year</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>first 24h</Text>
           <Text>An oral hepatitis vaccine</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>1st mounth</Text>
           <Text>Tuberculosis (BCG)</Text>
           <Text>An oral poliomyelitis vaccine</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>2nd mounth</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>Hepatitis B disease</Text>
           <Text>An oral poliomyelitis vaccine</Text>
           <Text>Rotavirus</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>3rd mounth</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>Hepatitis B disease</Text>
           <Text>An oral poliomyelitis vaccine</Text>
           <Text>Rotavirus</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>4th mounth</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>An oral poliomyelitis vaccine</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>12 mounths</Text>
           <Text>Measles</Text>
           <Text>Hepatitis B disease</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartTitle}>
           <Text>Remainder vaccine</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>18 mounths</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>An oral poliomyelitis vaccine(reminder1)</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>5 years</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>An oral poliomyelitis vaccine(reminder2)</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>6 years</Text>
           <Text>Measles</Text>
           <Text>or</Text>
           <Text>Measles+ Rubella</Text>
           <Text>or</Text>
           <Text> Measles + Rubella + Oreillons</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Each 10 years</Text>
           <Text>diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>An oral poliomyelitis vaccine</Text>
         </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  Backgroundcontainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: "bold",
    color:'#F6FCEF',
  },
  cartTitle: {
    height:'auto',
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#95BA8F',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
    fontSize: 20,
    fontWeight: "bold"
  },
  titleText: {
    fontSize:15,
    fontWeight: "bold"
  },
  cartCard: {
    
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#BCD8BD',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Vaccination;