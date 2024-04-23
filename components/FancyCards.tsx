import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
      <ImageBackground
      source={{
        uri: 'https://c4.wallpaperflare.com/wallpaper/297/678/332/lionel-messi-soccer-photoshop-effects-wallpaper-preview.jpg'
      }}
      style={styles.cardImage}
      resizeMode='cover'
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Leo Messi</Text>
        <Text style={styles.cardLabel}>The GOAT</Text>
        <Text style={styles.cardDescription}>Lionel Andres Messi, the greates
        player to ever grace the football field. There was noone ever like him,
        and there will never be another one like him.</Text>
        <View style={styles.Footer}>
        <Text style={styles.cardFooter}>Leo Messi</Text>

       
        </View>
        </View>
        
      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8
        
    },
    card: {
        width: '100%',
        height:410,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        // backgroundColor: '#FFFFFF',
        // elevation: 3,
        // shadowOffset: {
        //     width: 1,
        //     height: 1
        // }
    },
    cardImage: {
        height: 400,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
    },
    cardBody: {
        flex: 1,
        // flexGrow: 1,
        position: 'absolute',
        paddingHorizontal: 12,
        top: 0, left: 0, right: 0, bottom: 0
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardLabel: {
        color: '#FFFFFF',
        fontSize: 16
    },
    cardDescription: {
        color: '#FFFFFF',
        fontSize: 14,
        marginBottom: 10,
        marginTop: 6,
        flexShrink: 1

    },
    cardFooter: {
        color: '#FFFFFF',
        fontSize: 14,
       
        // alignItems: 'flex-end'
    },
    Footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    overlay: {
        flex: 1,

    }
})