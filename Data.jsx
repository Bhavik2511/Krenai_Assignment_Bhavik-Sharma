import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'

const Data = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.object); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}) =>(
    <View style={{margin: 10, marginTop: 0}}>
            <View style={styles.cont}>
              <Image source={{uri:item.mediaUrl}} style={styles.image}/>
              <FeatherIcon name="heart" size={22} color="black" style={styles.icon}/>
            </View>
            <View style={{marginLeft:5, maxWidth:180}}>
              <Text style={{fontFamily:'Poppins-Medium', fontSize:16, color:'black'}}>{item.name}</Text>
              <Text style={{fontFamily:'Poppins-Regular', fontSize:16, color:'black'}}>{item.keywords}</Text>
              <Text style={{fontFamily:'Poppins-Regular', fontSize:15, color:'black'}}>₹4,999</Text>
            </View>
          </View>
  )

  return (
        <FlatList
        showsVerticalScrollIndicator={false}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    contentContainerStyle={styles.container}
  />
    
    
    
  )
}

export default Data

const styles = StyleSheet.create({
    image:{
        width:180,
        height:200,
        position: 'relative',
        borderRadius: 5,
      },
      icon:{
        position: 'absolute',
        top: 5,
        right:4
      },
      cont:{
        maxWidth:180,
      },
      container:{
        flexDirection:'row',
         justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexGrow:1
      }
})




{/* <View style={{flexDirection:'row', justifyContent: 'space-between', height: '100%', width: '100%', flexWrap: 'wrap'}}>
          <View style={{margin: 10, marginTop: 0}}>
            <View style={styles.cont}>
              <Image source={require('./assets/fonts/img.jpg')} style={styles.image}/>
              <FeatherIcon name="heart" size={22} color="black" style={styles.icon}/>
            </View>
            <View style={{marginLeft:5}}>
              <Text style={{fontFamily:'Poppins-Medium', fontSize:16, color:'black'}}>12 STOREEZ</Text>
              <Text style={{fontFamily:'Poppins-Regular', fontSize:16, color:'black'}}>Mercerised-jersey</Text>
              <Text style={{fontFamily:'Poppins-Regular', fontSize:15, color:'black'}}>shorts</Text>
              <Text style={{fontFamily:'Poppins-Regular', fontSize:15, color:'black'}}>₹4,999</Text>
            </View>
          </View>
          </View> */}