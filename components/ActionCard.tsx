import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                You'll Never Walk Alone
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://c4.wallpaperflare.com/wallpaper/716/897/202/steven-gerrard-footballers-liverpool-fc-premier-league-wallpaper-preview.jpg'
        }}
        style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla necessitatibus, nemo dolorum quas suscipit. Porro dolorum voluptas veritatis laboriosam laborum, explicabo amet reiciendis voluptatem, molestias numquam id iusto eligendi.
                Ipsum, quisquam dolor harum, aliquid dicta quod voluptatem aliquam hic natus odit fuga culpa animi quibusdam dignissimos inventore, alias ratione maiores consequuntur. Unde quod quaerat neque porro eligendi, distinctio consectetur.
            </Text>
         </View>
         <View style={styles.footerContainer}>
           <TouchableOpacity
           onPress={() => openWebsite('https://leetcode.com/problems/h-index-ii/description/?envType=study-plan-v2&envId=binary-search')}
           >
                <Text>Read More</Text>
           </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100
    },
    bodyContainer: {},
    footerContainer: {},
})