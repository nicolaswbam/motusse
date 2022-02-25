import { ThemeProvider } from "@shopify/restyle";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { theme } from "./src/theme";

export default function App() {
  const [hasBeenLoaded] = useFonts({
    Mytupi: require("./assets/fonts/mytupi.ttf"),
  });

  if (!hasBeenLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
