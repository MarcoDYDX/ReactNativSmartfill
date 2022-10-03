const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FillYourContainer01 from "./screens/FillYourContainer01";
import ChooseAmount02 from "./screens/ChooseAmount02";
import ChooseAmount021 from "./screens/ChooseAmount021";
import FillYourContainer011 from "./screens/FillYourContainer011";
import PrintYourSticker from "./screens/PrintYourSticker";
import FillYourContainer08 from "./screens/FillYourContainer08";
import FillYourContainer03 from "./screens/FillYourContainer03";
import FillYourContainer012 from "./screens/FillYourContainer012";
import FillYourContainer02 from "./screens/FillYourContainer02";
import ChooseAmount01 from "./screens/ChooseAmount01";
import NutritionalInformation from "./screens/NutritionalInformation";
import Allergens from "./screens/Allergens";
import ProductInformation from "./screens/ProductInformation";
import LandingPage from "./screens/LandingPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FillYourContainer01"
              component={FillYourContainer01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseAmount02"
              component={ChooseAmount02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseAmount021"
              component={ChooseAmount021}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FillYourContainer011"
              component={FillYourContainer011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrintYourSticker"
              component={PrintYourSticker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FillYourContainer08"
              component={FillYourContainer08}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FillYourContainer03"
              component={FillYourContainer03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FillYourContainer012"
              component={FillYourContainer012}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FillYourContainer02"
              component={FillYourContainer02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseAmount01"
              component={ChooseAmount01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NutritionalInformation"
              component={NutritionalInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Allergens"
              component={Allergens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductInformation"
              component={ProductInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
