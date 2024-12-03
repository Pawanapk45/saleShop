import React from 'react';
import { StyleSheet, Text, View, Image ,FlatList,Pressable, Alert} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem,removeCartItem } from '../redux/featurs/cartSlice/CartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from '../Form';


const FoodList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addCartItem(item))
    
  }
  const addeditem =  useSelector(state => state.cart);
  console.log(addeditem)

  const removeItem = () => {
    dispatch(removeCartItem())
  }



  const recipeList = [
      {
        "id": "1",
        "name": "Margherita Pizza",
        "rating": 4.5,
        "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Basil", "Olive Oil"],
        "image": "https://www.tasteofhome.com/wp-content/uploads/2024/03/Margherita-Pizza-_EXPS_TOHVP24_275515_MF_02_28_1.jpg?fit=700,1024",
        "step":[
          "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough on a floured surface.",
    "Spread tomato sauce evenly over the dough.",
    "Sprinkle shredded mozzarella cheese on top.",
    "Add fresh basil leaves.",
    "Drizzle olive oil over the pizza.",
    "Bake in the preheated oven for 10-15 minutes until the crust is golden and the cheese is bubbly.",
    "Remove from the oven and let it cool for a few minutes before slicing.",
    "Serve hot and enjoy your Margherita Pizza!"
        ],
        "prepTime": "25 minutes",
        "calories": 300,
        "price": "$8.50"
      },
      {
        "id": "2",
        "name": "Spaghetti Carbonara",
        "rating": 4.7,
        "ingredients": ["Spaghetti", "Pancetta", "Eggs", "Pecorino Cheese", "Black Pepper"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMgfZnrEVi8bl2KgOeZPwlArMNzr_aVNBFQ&s",
        "step":[
          "Boil a large pot of salted water.",
    "Cook the spaghetti according to the package instructions until al dente.",
    "While the pasta is cooking, heat a pan over medium heat and cook pancetta until crispy.",
    "In a separate bowl, whisk together eggs and grated Pecorino cheese.",
    "Once the pasta is cooked, reserve a cup of pasta water and then drain the pasta.",
    "Add the hot pasta to the pan with the pancetta and toss to combine.",
    "Remove the pan from heat and quickly mix in the egg and cheese mixture.",
    "Stir constantly to create a creamy sauce, adding reserved pasta water as needed to achieve the desired consistency.",
    "Season with freshly ground black pepper and salt to taste.",
    "Serve immediately with extra grated cheese on top if desired."
        ],
        "prepTime": "30 minutes",
        "calories": 600,
        "price": "$12.00"
      },
      {
        "id": "3",
        "name": "Caesar Salad",
        "rating": 4.3,
        "ingredients": ["Romaine Lettuce", "Caesar Dressing", "Parmesan Cheese", "Croutons", "Grilled Chicken"],
        "image": "https://www.thespruceeats.com/thmb/DRaBINVopeoHOpjJn66Yh7pMBSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg",
       "step":[
        "Wash and dry the romaine lettuce leaves, then chop them into bite-sized pieces.",
    "Prepare the Caesar dressing by mixing mayonnaise, lemon juice, Dijon mustard, Worcestershire sauce, minced garlic, and anchovy paste in a bowl.",
    "Grate fresh Parmesan cheese and set it aside.",
    "In a large salad bowl, toss the chopped romaine lettuce with the Caesar dressing until the lettuce is evenly coated.",
    "Add croutons to the salad for crunch.",
    "Top with grilled chicken slices (optional) for added protein.",
    "Sprinkle the grated Parmesan cheese over the salad.",
    "Serve immediately and enjoy your Caesar Salad!"
       ],
       "prepTime": "20 minutes",
        "calories": 450,
        "price": "$10.00"
      },
      {
        "id": "4",
        "name": "Chicken Alfredo",
        "rating": 4.6,
        "ingredients": ["Fettuccine", "Chicken Breast", "Parmesan Cheese", "Heavy Cream", "Garlic"],
        "image": "https://preppykitchen.com/wp-content/uploads/2023/02/Chicken-Alfredo-Recipe-Card-500x375.jpg",
        "step":[
          "Season the chicken breasts with salt and pepper on both sides.",
    "Heat olive oil in a large skillet over medium heat.",
    "Cook the chicken breasts in the skillet for 6-7 minutes on each side, or until fully cooked.",
    "Remove the chicken from the skillet and let it rest, then slice it into strips.",
    "In the same skillet, melt butter over medium heat.",
    "Add minced garlic and cook until fragrant, about 1 minute.",
    "Pour in the heavy cream and bring it to a simmer.",
    "Stir in grated Parmesan cheese until the sauce is smooth and creamy.",
    "Cook the fettuccine pasta according to package instructions until al dente.",
    "Drain the pasta, then add it to the skillet with the Alfredo sauce.",
    "Toss the pasta in the sauce until well coated.",
    "Add the sliced chicken on top of the pasta.",
    "Garnish with chopped parsley and extra Parmesan cheese if desired.",
    "Serve immediately and enjoy your Chicken Alfredo!"
        ],
        "prepTime": "30 minutes",
        "calories": 600,
        "price": "$12.00"
      },
      {
        "id": "5",
        "name": "Beef Tacos",
        "rating": 4.8,
        "ingredients": ["Ground Beef", "Taco Shells", "Lettuce", "Cheddar Cheese", "Sour Cream"],
        "image": "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg",
        "step":[
          "Heat a skillet over medium heat and add ground beef.",
    "Cook the beef until browned, breaking it up with a spatula as it cooks.",
    "Drain excess fat from the skillet.",
    "Add taco seasoning to the cooked beef and stir well.",
    "Pour in a small amount of water and simmer the mixture until the sauce thickens.",
    "Warm the taco shells in the oven or on a stovetop.",
    "Assemble the tacos by filling each shell with seasoned beef.",
    "Top with shredded lettuce, cheddar cheese, diced tomatoes, and a dollop of sour cream.",
    "Add any other desired toppings such as salsa, guacamole, or jalapeños.",
    "Serve immediately and enjoy your Beef Tacos!"
        ],
        "prepTime": "30 minutes",
        "calories": 600,
        "price": "$12.00"
      },
    //   {
    //     "id": "6",
    //     "name": "Sushi Rolls",
    //     "rating": 4.9,
    //     "ingredients": ["Sushi Rice", "Nori", "Salmon", "Avocado", "Cucumber"],
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7R_qPlf4ZVOfQjsxz6AmJKQgPGVTMGOSSgQ&s",
    //     "step":[
    //       "Rinse sushi rice under cold water until the water runs clear.",
    // "Cook the rice according to package instructions, then let it cool slightly.",
    // "In a small bowl, mix rice vinegar, sugar, and salt, then gently fold it into the cooked rice.",
    // "Place a sheet of nori (seaweed) shiny side down on a bamboo sushi mat.",
    // "Spread a thin layer of sushi rice evenly over the nori, leaving a 1-inch border at the top.",
    // "Place slices of salmon, avocado, and cucumber in a line across the center of the rice.",
    // "Using the bamboo mat, carefully roll the nori and rice over the fillings, applying even pressure to form a tight roll.",
    // "Moisten the top border of the nori with water and seal the roll.",
    // "Use a sharp knife to slice the roll into bite-sized pieces.",
    // "Serve the sushi rolls with soy sauce, pickled ginger, and wasabi on the side.",
    // "Enjoy your homemade sushi rolls!"
    //     ],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "7",
    //     "name": "Pad Thai",
    //     "rating": 4.7,
    //     "ingredients": ["Rice Noodles", "Shrimp", "Tofu", "Peanuts", "Bean Sprouts"],
    //     "image": "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
    //     "step":[
    //       "Soak rice noodles in warm water for about 30 minutes until they are soft, then drain and set aside.",
    // "In a small bowl, mix together tamarind paste, fish sauce, sugar, and lime juice to make the Pad Thai sauce.",
    // "Heat a large skillet or wok over medium-high heat and add a little oil.",
    // "Add shrimp and tofu to the skillet, and cook until the shrimp are pink and the tofu is golden brown. Remove from the skillet and set aside.",
    // "In the same skillet, add minced garlic and sauté until fragrant.",
    // "Crack eggs into the skillet and scramble them until just set.",
    // "Add the soaked rice noodles to the skillet, followed by the Pad Thai sauce.",
    // "Toss the noodles in the sauce until they are evenly coated.",
    // "Return the cooked shrimp and tofu to the skillet, along with bean sprouts and chopped peanuts.",
    // "Toss everything together until heated through.",
    // "Garnish with fresh cilantro, lime wedges, and extra chopped peanuts if desired.",
    // "Serve immediately and enjoy your Pad Thai!"
    //     ],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "8",
    //     "name": "French Onion Soup",
    //     "rating": 4.5,
    //     "ingredients": ["Onions", "Beef Broth", "Gruyere Cheese", "Baguette", "Thyme"],
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23Y5ar3OD7kHqV7cjlDtpXU_HRlHVZspgqw&s",
    //     "step":[
    //       "Thinly slice onions and set them aside.",
    //       "In a large pot, melt butter over medium heat.",
    //       "Add the sliced onions to the pot and cook slowly, stirring occasionally, until they are caramelized and golden brown. This may take about 30-40 minutes.",
    //       "Add minced garlic to the pot and cook for an additional minute.",
    //       "Sprinkle flour over the onions and stir to coat. Cook for another 2-3 minutes to remove the raw flour taste.",
    //       "Pour in beef broth and dry white wine, stirring well to combine.",
    //       "Add thyme, bay leaves, and season with salt and pepper.",
    //       "Simmer the soup for about 30 minutes to allow the flavors to meld together.",
    //       "Preheat your oven's broiler. Ladle the soup into oven-safe bowls.",
    //       "Top each bowl with a slice of baguette and a generous amount of grated Gruyere cheese.",
    //       "Place the bowls under the broiler until the cheese is melted and bubbly, about 3-5 minutes.",
    //       "Carefully remove the bowls from the oven and let them cool slightly before serving.",
    //       "Enjoy your delicious French Onion Soup!"
    //     ],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "9",
    //     "name": "Chocolate Cake",
    //     "rating": 4.8,
    //     "ingredients": ["Cocoa Powder", "Flour", "Sugar", "Eggs", "Butter"],
    //     "image": "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png",
    //     "step":[
    //       "Preheat your oven to 350°F (175°C) and grease two 9-inch round cake pans.",
    // "In a large bowl, sift together the flour, cocoa powder, sugar, baking powder, baking soda, and salt.",
    // "In another bowl, whisk together eggs, milk, oil, and vanilla extract until well combined.",
    // "Gradually add the wet ingredients to the dry ingredients, mixing until just combined.",
    // "Slowly add boiling water to the batter, stirring until smooth. The batter will be thin, but that's okay.",
    // "Pour the batter evenly into the prepared cake pans.",
    // "Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
    // "Allow the cakes to cool in the pans for 10 minutes, then remove them from the pans and let them cool completely on a wire rack.",
    // "Once the cakes are cool, frost with your favorite chocolate frosting.",
    // "Decorate with additional toppings like chocolate shavings, sprinkles, or fruit if desired.",
    //     ],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "10",
    //     "name": "Greek Salad",
    //     "rating": 4.4,
    //     "ingredients": ["Cucumber", "Tomatoes", "Feta Cheese", "Olives", "Red Onion"],
    //     "image": "https://www.eatyourselfskinny.com/wp-content/uploads/2022/08/greek-salad-1-scaled.jpg",
    //     "steps":[
    //       "Wash and chop cucumbers, tomatoes, red onion, and green bell pepper into bite-sized pieces.",
    // "Place the chopped vegetables in a large salad bowl.",
    // "Add Kalamata olives and crumbled feta cheese to the bowl.",
    // "In a small bowl, whisk together extra virgin olive oil, red wine vinegar, lemon juice, oregano, salt, and pepper to make the dressing.",
    // "Pour the dressing over the salad and toss everything gently to combine.",
    // "Let the salad sit for a few minutes to allow the flavors to meld together.",
    // "Serve the Greek Salad with an extra sprinkle of oregano and a few more olives on top if desired.",
    // "Enjoy your fresh and vibrant Greek Salad!"
    //     ],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "11",
    //     "name": "Chicken Tikka Masala",
    //     "rating": 4.9,
    //     "ingredients": ["Chicken", "Yogurt", "Tomato Sauce", "Garlic", "Garam Masala"],
    //     "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-750x750.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "12",
    //     "name": "Beef Stroganoff",
    //     "rating": 4.6,
    //     "ingredients": ["Beef", "Mushrooms", "Sour Cream", "Onions", "Garlic"],
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUtbRPDyXcOXdGrzqegGnzv4N4kY57eUNCQ&s",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "13",
    //     "name": "Fish and Chips",
    //     "rating": 4.7,
    //     "ingredients": ["Cod", "Potatoes", "Flour", "Beer", "Tartar Sauce"],
    //     "image": "https://glutenfreecuppatea.co.uk/wp-content/uploads/2019/08/gluten-free-fish-and-chips-recipe-1.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "14",
    //     "name": "Vegetable Stir Fry",
    //     "rating": 4.5,
    //     "ingredients": ["Broccoli", "Bell Peppers", "Carrots", "Soy Sauce", "Garlic"],
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaVcll19kN9w5p2AKqn33CtJYOzzUQiWb0A&s",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "15",
    //     "name": "Cheeseburger",
    //     "rating": 4.6,
    //     "ingredients": ["Ground Beef", "Cheddar Cheese", "Lettuce", "Tomato", "Onions"],
    //     "image": "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "16",
    //     "name": "Mushroom Risotto",
    //     "rating": 4.8,
    //     "ingredients": ["Arborio Rice", "Mushrooms", "Parmesan Cheese", "White Wine", "Garlic"],
    //     "image": "https://www.connoisseurusveg.com/wp-content/uploads/2021/08/vegan-mushroom-risotto-21-sq-1-of-1.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "17",
    //     "name": "Chicken Parmesan",
    //     "rating": 4.9,
    //     "ingredients": ["Chicken Breast", "Marinara Sauce", "Mozzarella Cheese", "Parmesan Cheese", "Breadcrumbs"],
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrz1FSU_mi5ffLx2_HR0VzU5i87iyl915clw&s",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "18",
    //     "name": "Pancakes",
    //     "rating": 4.7,
    //     "ingredients": ["Flour", "Milk", "Eggs", "Butter", "Maple Syrup"],
    //     "image": "https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg?quality=82&strip=all",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "19",
    //     "name": "Lasagna",
    //     "rating": 4.8,
    //     "ingredients": ["Lasagna Noodles", "Ground Beef", "Ricotta Cheese", "Mozzarella Cheese", "Tomato Sauce"],
    //     "image": "https://www.southernliving.com/thmb/x5xM5QvARl_og39g1jD1N1HfUlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_005_16x9-24d8c7469367440bb9aad73e9a83ded9.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "20",
    //     "name": "Buffalo Wings",
    //     "rating": 4.7,
    //     "ingredients": ["Chicken Wings", "Buffalo Sauce", "Butter", "Celery", "Blue Cheese Dressing"],
    //     "image": "https://assets.epicurious.com/photos/596d14096c42213eb20a2b65/1:1/w_2560%2Cc_limit/How-To-Make-Boneless-Buffalo-Chicken-Wings-071220172005.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "21",
    //     "name": "Shrimp Scampi",
    //     "rating": 4.9,
    //     "ingredients": ["Shrimp", "Garlic", "White Wine", "Butter", "Lemon"],
    //     "image": "https://deedeedoes.com/wp-content/uploads/2022/04/AdobeStock_122034498.jpeg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "22",
    //     "name": "Tom Yum Soup",
    //     "rating": 4.6,
    //     "ingredients": ["Shrimp", "Lemongrass", "Galangal", "Lime Juice", "Cilantro"],
    //     "image": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "23",
    //     "name": "Biryani",
    //     "rating": 4.9,
    //     "ingredients": ["Basmati Rice", "Chicken", "Yogurt", "Saffron", "Spices"],
    //     "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/f594f4f63d3e00e93203f02d40e38d24",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
    //   {
    //     "id": "24",
    //     "name": "Ramen",
    //     "rating": 4.7,
    //     "ingredients": ["Ramen Noodles", "Pork Belly", "Soft-Boiled Egg", "Nori", "Green Onions"],
    //     "image": "https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-f.jpg",
    //     "step": ["jdhe","imajd"],
    //     "prepTime": "30 minutes",
    //     "calories": 600,
    //     "price": "$12.00"
    //   },
      
  ];

  return (
   <>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
     <View>
       <Text style={{fontSize:25,fontWeight:'bold',marginStart:20,marginVertical:20,color:'black',}}>Food Chart</Text>
     </View>

     <View>
       <GestureHandlerRootView>
         <TouchableOpacity style={{backgroundColor:'lightblue',marginRight:30,marginTop:20,flexDirection:'row'}} onPress={()=> navigation.navigate('CartItem')}>
         <Icon name="shopping-cart" size={30} color="blue"/>
         <Text style={{fontSize:20,paddingHorizontal:10,color:'blue'}}>{addeditem.length}</Text>
         </TouchableOpacity>
       </GestureHandlerRootView>
     </View>
    </View>
       <ScrollView>
      <FlatList
       data={recipeList}
       renderItem={({item})=> (<Pressable style={{
        width:'100%',
        height:'auto',
        backgroundColor:'#fffffff',
        borderRadius:5,
        shadowColor: '#aba5a5c7',
        shadowOffset: { width: 0, height: 4, },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation:2,
        marginHorizontal:10,
        marginVertical:10,
        
       }}>

         <Text style={{
          textAlign:'center',
          fontSize:15,
          fontWeight:'bold',
          color:'#4776db',
          paddingTop:20,
         }}>{item.id} : {item.name}</Text>
        <Image source={{ uri: item.image }} style={{ width: 'auto', height:200,margin:10, }} />
        <Text style={{
          textAlign:'left',
          fontSize:12,
          color:'#666666',
          paddingVertical:10,
          marginLeft:20
         }}>Rating: {item.rating}</Text>
         <Text style={{
          textAlign:'left',
          fontSize:12,
          color:'#666666',
          paddingVertical:10,
          marginLeft:20
         }}>{item.ingredients}</Text>
        <GestureHandlerRootView style={{alignItems:'flex-end',marginHorizontal:20}}>
        <TouchableOpacity style={{backgroundColor:'blue',padding:10,width:100,}} onPress={()=> addItem(item)}>
           <Text style={{color:'white'}}>Add to card</Text>
         </TouchableOpacity>
        </GestureHandlerRootView>
       </Pressable>)}
      numColumns={1}
      keyExtractor={item => item.id.toString()}
      />

    </ScrollView>
    </>
  );
};



export default FoodList;
