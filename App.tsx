import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import { Listing } from "@/app/Listing";

export default function App() {
    const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Listing />
  );
}

