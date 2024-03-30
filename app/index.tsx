import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { Video } from 'expo-av'

const page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")])
  return (
    <View style={style.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }} style={style.video} />
      )}
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",

  }

})
export default page