import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Text, View } from 'react-native';

const Food = () =>(
    <ImageBackground source={require('../assets/background/BGP.jpg')} style={styles.Backgroundcontainer}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cartTitle}>
            <Text>A few things to keep in mind</Text>
           <View style={styles.paragraph}>
            <Text>A few things to keep in mind when thinking about baby food:</Text>
            <Text>New eaters only need about 1 to 2 tablespoons of a food, so keep portions small.</Text>
            <Text>Be on the lookout for allergies, especially when feeding your child foods that contain common allergens. Common allergens include eggs, peanut, wheat, soy, fish, and shellfish.</Text>
            <Text>The newest evidence shows there is no benefit in delaying introducing these foods beyond 6 months or to introducing foods in any particular order.</Text>
            <Text>Most of all, don’t forget to have fun!</Text>
            </View>
          </View>


          
         <View style={styles.cartTitle}>
           <Text>4 to 6 months old</Text>
           <View style={styles.paragraph}>
             <Text>When your baby is 4 to 6 months old, you’ll want to use simple, single-ingredient purées.</Text>
           <Text>This can help you to spot and identify a food allergy or sensitivity. Once you have proven your child’s tolerance to individual foods, you can try combinations to enhance flavor and likeability.</Text>
         </View>

         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Green Peas</Text>
           <Text>Peas are a small yet mighty source of nutrition, packing vitamins A and C, iron, protein, and calcium.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Banana purée</Text>
           <Text>Often called a “perfect” food, bananas are rich in potassium and fiber.</Text>
           <Text>Bananas are also known as one of nature’s own antacids and are very gentle on the stomach. Although bananas are one of the best first foods for babies, be careful not to overdo it. Too much banana can cause constipation.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Baby brown rice cereal</Text>
           <Text>Rice cereal is one of the most common foods to introduce because it’s less allergenic and easily digested.</Text>
           <Text>Mixing it to a fairly thin texture can help babies make the transition from an all-liquid diet to a more solid one. This same process can be applied to steel-cut oats.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Avocado purée</Text>
           <Text>This buttery treat is a wonderful “good fats” food for baby’s brain and physical development. Plus, the creamy texture of perfectly ripe avocado is one that babies seem to love.</Text>
           <Text>To help prevent browning, put the avocado pit in the puree when refrigerating.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Baked sweet potato purée</Text>
           <Text>In-the-know adults eat sweet potatoes for their health benefits. Sweet potatoes are loaded with vitamins, antioxidants, and fiber, so it makes sense that your baby can benefit from this delicious tuber, too.</Text>
           <Text>A simple purée with a touch of water or your baby’s milk makes for a yummy and nutritious first food.</Text>
           </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>First carrots purée</Text>
           <Text>Carrots are a wonderful introduction to solids because of their naturally sweet taste and pleasant texture.</Text>
           <Text>This simple preparation of carrots provides a rich supply of the antioxidant beta carotene and vitamin A.</Text>
         </View>
         <View style={styles.cartTitle}>
           <Text>7 to 9 months old</Text>
           <View style={styles.paragraph}>
             <Text>For a 7- to 9-month-old baby, you can make thicker purées with multiple ingredients.</Text>
           <Text>Remember to introduce one new ingredient at a time and combine foods that you know they aren’t allergic to. You can also add meat and other proteins at this stage, or even earlier if your pediatrician gives the OK.</Text>
         </View>

         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Let your partner take over</Text>
           <Text>He’s all in, so encourage him to be in charge of bathing, reading, or tummy time (or all three). They’re great bonding activities—and an opportunity for you to take a breather.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Give yourself time-outs</Text>
           <Text>When you’re feeling angry, you’re less likely to respond to your child in a helpful way. You don’t have to react instantly. Taking a brief break helps you settle down and think things through. </Text>
           
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Pumpkin thyme purée</Text>
           <Text>This easy and elegant seasonal recipe is full of beta carotene, potassium, and iron. Make a big batch and freeze it in ice cube trays for single-portion servings for later!</Text>          
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>First spinach with white yams</Text>
           <Text>This simple combination of spinach and yams adds a healthy dose of calcium, iron, vitamin A, and folate to your baby’s diet. The yams add a touch of sweetness to create a pleasant introduction to greens.</Text>        
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Beets and blueberry mash</Text>
           <Text>Not only is this blend a beautiful shade of magenta, it’s also a nutritious combination of antioxidants, vitamins, and fiber.</Text>
           <Text>You can also mix this purée with a little cereal for a delicious breakfast for baby.</Text>          
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Avocado and banana baby food</Text>
           <Text>This is a pairing of two wonderful foods: avocados (good fats and fiber) and bananas (potassium and vitamin C).</Text>          
           <Text>The banana also adds a bit of sweetness and lightens up the usually dense avocado purée. Nix the sugar, and stick with the natural sweetness of the ingredients themselves for young babies.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Veggies and sole purée</Text>
           <Text>Potatoes, carrots, peas, and fish make for a delicious combination that’s ready to eat in under 8 minutes.</Text> 
           <Text>Vegit is a seasoning ingredient in this recipe that can also be subbed for Mrs. Dash, another low-sodium seasoning. This is a great, simple introduction to fish for your baby.</Text>          
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}> Butternut squash and pear purée</Text>
           <Text>Butternut squash is a great ingredient because it rarely causes allergies. Pear adds an additional touch of sweetness to this recipe.</Text>
                 
         </View>
         <View style={styles.cartTitle}>
           <Text>9 to 12 months old</Text>
           <View style={styles.paragraph}>
             <Text>At 9 to 12 months old, your baby can enjoy chunkier purées and mashes. You can also add dairy, such as cheese or yogurt, to their foods.</Text>
           <Text>At this stage, many babies can even advance to adult food and complex combinations, finely minced or softened.</Text>
         </View>

         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>White fish, carrot, and leek purée</Text>
           <Text>This purée combination is a savory, brain-boosting powerhouse.</Text>
           <Text>White fish contains omega-3 fatty acids and may help boost development of baby’s central nervous system. Leeks are thought by some to provide cardiovascular support and carrots are loaded with antioxidants.</Text>           
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Raw baby purée of blueberries, mango, avocado, and mild chilies</Text>
           <Text>Another nutrient-dense combination, this recipe combines creamy avocado, tangy mango, blueberries, and the interesting addition of mild green chilies!</Text>          
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Creamy Provencal chicken</Text>
           <Text>This dish incorporates Herbes de Provence, a mild blend of spices that can help introduce your child to more exciting flavors, without the addition of salt.</Text>
                     
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Cherry and mint Greek yogurt baby food purée</Text>
           <Text>This homemade cherry purée is a delicious topping for the yogurt base. Make sure to use full-fat yogurt!</Text>
                    
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Apricot and banana food with cinnamon</Text>
           <Text>Spice things up in baby’s diet with a dash of cinnamon.</Text>
           <Text>For a great breakfast, try adding this purée to a bit of cereal or cooked oatmeal, which can also make a great breakfast.</Text>           
         </View>
         <View style={styles.cartTitle}>
           <Text>Easy as 1-2-3</Text>
           <View style={styles.paragraph}>
             <Text>There you have it! All you need are wholesome ingredients, some basic cooking supplies, and a blender </Text>
           </View>
         </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
  
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#fff',
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
  cartTitle: {
    
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#D7B3A9',
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
  paragraph: {
    fontSize:10,

  },
  cartCard: {
    
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#E6D3CD',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Food;