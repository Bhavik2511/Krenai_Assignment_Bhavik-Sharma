import {Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Font from 'react-native-vector-icons/FontAwesome6';
import Data from './Data';

const Main = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '40%',
            }}>
            <Icon name="arrow-back-outline" size={30} color="black" />
            <Text style={styles.headtext}>Kitchen Jar</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '40%',
            }}>
            <Icon name="search" size={30} color="black" />
            <FeatherIcon name="heart" size={30} color="black" />
            <Icon name="bag-outline" size={30} color="black" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontFamily: 'Poppins-Regular'}}>98/100 Products</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 20,
                alignItems: 'center',
              }}>
              <Octicons name="sort-asc" size={20} color="grey" />
              <Text style={{fontFamily: 'Poppins-Regular', marginLeft: 3}}>
                Sort
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Font name="sliders" size={15} color="grey" />
              <Text style={{fontFamily: 'Poppins-Regular', marginLeft: 3}}>
                Filter
              </Text>
            </View>
          </View>
        </View>
        <Data />
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.2,
  },
  headtext: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  image: {
    width: 180,
    height: 200,
    position: 'relative',
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 4,
  },
});
