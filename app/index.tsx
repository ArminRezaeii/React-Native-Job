import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'


const page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")])
  return (
    <View style={style.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          resizeMode={ResizeMode.COVER}
          shouldPlay
          source={{ uri: assets[0].uri }} style={style.video} />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={style.header}>Ready to cahnge the way you money?</Text>
      </View>

      <View style={style.buttons}>
        <Link href={"/login"} asChild style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              Log in
            </Text>
          </TouchableOpacity></Link>
        <Link href={"/signup"} asChild style={[defaultStyles.pillButton, { flex: 1, backgroundColor: "white" }]}>
          <TouchableOpacity>
            <Text style={{ color: "black", fontSize: 22, fontWeight: "500" }}>
              Sing up
            </Text>
          </TouchableOpacity></Link>
      </View>

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
    position: "absolute"
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  }

})
export default page