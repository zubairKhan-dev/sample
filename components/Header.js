/* eslint-disable */
import React from 'react'
import { Dimensions, Text, View, StyleSheet } from "react-native";

const Header= ()=> {

  return(
    <View style={styles.header}>
      <Text style={styles.title}>
        Detail Screen
      </Text>
    </View>
  )
}

const styles= StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0
  },
  title: {
    textAlign: 'center',
  }
})

export default Header
