import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Game } from "./src/game/Game";
import { theme } from "./src/theme";

export default function App() {
  const [hasBeenLoaded] = useFonts({
    Mytupi: require("./assets/fonts/mytupi.ttf"),
  });

  if (!hasBeenLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Game />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
