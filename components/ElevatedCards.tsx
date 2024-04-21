import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
     <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>voila!</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>heya 😎</Text>
        </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      container: {
        padding: 8
      },
      card: {
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:100,
        width: 100,
        borderRadius: 4
    
      },
      cardElevated: {
        backgroundColor: 'grey',
        elevation: 4,
      }
})