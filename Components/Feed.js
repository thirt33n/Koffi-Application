import React,{ useState,useEffect } from 'react';
import { StyleSheet,ScrollView, Text,View, Alert, Pressable,Image,SafeAreaView } from 'react-native';
import Button from './Button';
import Button2 from './Button2';






    // let [fontsLoaded] = useFonts({
    //     GrandHotel_400Regular,
    //   });
    
    //   if (!fontsLoaded) {
    //     return <AppLoading />;
    //   } 


export default function TopNewsFeed(){




    // const [news,setNews] = useState(null);

    // useEffect(() => {
    //      axios.get(baseURL).then((response) => {
    //       setNews(response.data.results);
         
    //     });
    //   }, []);
    
    //   if (!news) return null;
    

      
    // let [fontsLoaded] = useFonts({
    //     GrandHotel_400Regular,
    //   });
    
    //   if (!fontsLoaded) {
    //     return <AppLoading />;
    //   } 

      
      return (

        <View style={styles.container}>
                
                    <Text style={{fontSize:25,fontWeight:'bold',fontFamily: 'GrandHotel_400Regular',color:'#271609',marginTop:'3%',marginBottom:'3%'}}>Your Choices!</Text>
                    <ScrollView style={{height:'100%',marginBottom:'-30%'}}>
                        {
                            
                            <View>
                                
                                    <Image source={{uri:`https://ae01.alicdn.com/kf/HTB1qnOJTq6qK1RjSZFmq6x0PFXaV/Fresh-Coffee-Vinyl-Window-Sign-Shop-Coffee-Bar-Pub-Coffee-Window-Sticker-Sign-Takeaway-Coffee-Sign.jpg` }}
                                            style={{width: '80%', height: 300,borderRadius:20,marginLeft:'10%',marginRight:'10%',marginTop:'2%'}} />
                                    <View  style={styles.container}>
                                        <Text style={styles.Title}>Cappuccino</Text>
                                        <Image source={{uri:`https://media.istockphoto.com/photos/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks-picture-id505168330?k=20&m=505168330&s=612x612&w=0&h=_InDMERgMkCfoNA-FUfRq0rYleC2xctGmSItIGeD8R4=` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹199</Text>
                                        <Button />
                                    </View>

                                    <View  style={styles.container}>
                                    <Text style={styles.Title}>Filter Coffee</Text>
                                        <Image source={{uri:`https://images.news18.com/ibnlive/uploads/2022/04/painting-of-filter-coffee.jpg` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹159</Text>
                                        <Button />
                                    </View>
                                    <View style={styles.container}>
                                    <Text style={styles.Title}>Espresso</Text>
                                        <Image source={{uri:`https://www.acouplecooks.com/wp-content/uploads/2021/07/French-Press-Espresso-004-1s.jpg` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹229</Text>
                                        <Button />
                                    </View>
                                    <View  style={styles.container}>
                                    <Text style={styles.Title}>Chocolate Coffee</Text>
                                        <Image source={{uri:`https://kfoods.com/images1/newrecipeicon/hot-chocolate-coffee-by-shireen-anwar_4209.jpg` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹239</Text>
                                        <Button />
                                    </View>
                                    <View  style={styles.container}>
                                    <Text style={styles.Title}>Black Coffee</Text>
                                        <Image source={{uri:`https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?k=20&m=157528129&s=612x612&w=0&h=6Kd0ZVNvIP83Q6P3kt_hd2CbIIW9y-mGtOoWUfkUZXU=` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹89</Text>
                                        <Button />
                                    </View>
                                    <View  style={styles.container}>
                                    <Text style={styles.Title}>Irish Coffee</Text>
                                        <Image source={{uri:`https://xoxobella.com/wp-content/uploads/2021/02/the_easy_way_to_make_Irish_cream_coffee_bella_bucchiotti_5-500x375.jpg` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹259</Text>
                                        <Button />
                                    </View>
                                    <View style={styles.container}>
                                    <Text style={styles.Title}>Latte</Text>
                                        <Image source={{uri:`https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg?w=2000` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹99</Text>
                                        <Button />
                                    </View>
                                    <View  style={styles.container}>
                                    <Text style={styles.Title}>Plain Milk</Text>
                                        <Image source={{uri:`https://img.freepik.com/free-photo/top-view-glass-bottle-cup-filled-with-milk-wooden-tray-dry-fruits-spoon-oats-brown-pot-left-side-white-table-brown-background_140725-142728.jpg?w=2000` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>Price: ₹39</Text>
                                        <Button />
                                    </View>
                                    <Text style={styles.Title2}>Collect your order from a machine nearby!</Text>
                                    <Button2 /> 
                                
                                    <View style={styles.container}>
                                    <Text style={styles.Title}></Text>
                                        <Image source={{uri:`#` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}></Text>
                                        <Button />
                                     
                                    </View>
                                   
                            </View>
                           
                        }
                    </ScrollView>

                </View>
      );
    
};


const styles = StyleSheet.create({

    container: {
        display:'flex',
        
        flexDirection:'column',
        justifyContent: 'center',
        marginTop: '5%',
        fontFamily: 'GrandHotel_400Regular',
        backgroundColor:'#c1a384',
        marginTop:'-1%',
        color:'#271609'
    
    },
    Title:{
        marginLeft:"2%",
        fontWeight:"bold",
        marginTop:'0.5%',
        fontSize:20,
        color:'#271609'
    },
    Title2:{
        marginLeft:"2%",
        fontWeight:"bold",
        marginTop:'5%',
        fontSize:15,
        color:'#271609'
    },

    info:{
            marginTop: '4%',
            fontSize:15,
            marginLeft: '2%',
            color:'#271609',
            marginBottom:'1%'
    }

});