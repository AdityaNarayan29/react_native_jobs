import {useState} from "react";
import { Text, ScrollView,SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";

export default function Index() {
  const Router = useRouter();
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
