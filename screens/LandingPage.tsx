import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPageView}>
      <Image
        style={styles.circleIcon}
        resizeMode="cover"
        source={require("../assets/circle.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow.png")}
      />
      <Text style={styles.r4100g}>
        <Text style={styles.r4}>{`R4 / `}</Text>
        <Text style={styles.gText}>100g</Text>
      </Text>
      <View style={styles.saleView}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-133.png")}
        />
        <Text style={styles.saleText}>Sale</Text>
      </View>
      <Pressable
        style={styles.productPricePressable}
        onPress={() => navigation.navigate("ChooseAmount01")}
      >
        <View style={styles.rectangleView} />
        <View style={styles.groupView}>
          <Text style={styles.startText}>Start</Text>
        </View>
      </Pressable>
      <View style={styles.productPriceView}>
        <Image
          style={styles.riceCrispiesGrande6c75e655Icon}
          resizeMode="cover"
          source={require("../assets/rice-crispies-grande-6c75e6554bab4b3ba206197adf6c01d1-grande-1.png")}
        />
      </View>
      <Image
        style={styles.cG99722LOGO1Icon}
        resizeMode="cover"
        source={require("../assets/cg99722logo-1.png")}
      />
      <View style={styles.productPriceView1}>
        <View style={styles.groupView1}>
          <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("Allergens")}
          >
            <Text style={styles.allergensText}>Allergens</Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group10.png")}
            />
          </Pressable>
          <Pressable
            style={styles.groupPressable1}
            onPress={() => navigation.navigate("NutritionalInformation")}
          >
            <Text style={styles.nutrionalInfomationText}>
              <Text style={styles.nutrionalText}>Nutrional</Text>
              <Text style={styles.infomationText}>Infomation</Text>
            </Text>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
          </Pressable>
          <Pressable
            style={styles.groupPressable2}
            onPress={() => navigation.navigate("ProductInformation")}
          >
            <Text style={styles.productBackgroundText}>
              <Text style={styles.productText}>Product</Text>
              <Text style={styles.backgroundText}>Background</Text>
            </Text>
            <Image
              style={styles.groupIcon2}
              resizeMode="cover"
              source={require("../assets/group12.png")}
            />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector14.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleIcon: {
    position: "absolute",
    top: -66,
    left: -93,
    width: 186,
    height: 186,
    display: "none",
  },
  arrowIcon: {
    position: "absolute",
    top: 358,
    left: 257,
    width: 6.28,
    height: 12,
    display: "none",
  },
  r4: {
    fontSize: 48,
  },
  gText: {
    fontSize: 29,
  },
  r4100g: {
    position: "absolute",
    height: "7.14%",
    width: "47.47%",
    top: "59.36%",
    right: "24.27%",
    bottom: "33.5%",
    left: "28.27%",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1c1c1e",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  saleText: {
    position: "absolute",
    height: "33.33%",
    width: "79.17%",
    top: "29.13%",
    right: "6.27%",
    bottom: "37.54%",
    left: "14.57%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  saleView: {
    position: "absolute",
    height: "4.23%",
    width: "9.15%",
    top: "58.13%",
    right: "12.71%",
    bottom: "37.64%",
    left: "78.13%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: 340,
    height: 100,
  },
  startText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 33,
    left: 136,
    width: 69,
    height: 34,
  },
  productPricePressable: {
    position: "absolute",
    top: 690,
    left: 18,
    width: 340,
    height: 100,
  },
  riceCrispiesGrande6c75e655Icon: {
    position: "absolute",
    top: 36,
    left: 119,
    width: 600,
    height: 338,
  },
  productPriceView: {
    position: "absolute",
    top: -36,
    left: -119,
    width: 600,
    height: 338,
  },
  cG99722LOGO1Icon: {
    position: "absolute",
    top: 331,
    left: 106,
    width: 165,
    height: 123,
  },
  allergensText: {
    position: "absolute",
    top: 56,
    left: 0,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#2c2c2e",
    textAlign: "center",
    width: 89,
    height: 15,
  },
  groupIcon: {
    position: "absolute",
    height: "68.31%",
    width: "54.49%",
    top: "-0.35%",
    right: "19.94%",
    bottom: "32.04%",
    left: "25.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 89,
    height: 71,
  },
  nutrionalText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  infomationText: {
    margin: 0,
  },
  nutrionalInfomationText: {
    position: "absolute",
    top: 56,
    left: 0,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#2c2c2e",
    textAlign: "center",
    width: 58,
    height: 22,
  },
  groupIcon1: {
    position: "absolute",
    height: "62.18%",
    width: "83.62%",
    top: "-0.32%",
    right: "8.19%",
    bottom: "38.14%",
    left: "8.19%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable1: {
    position: "absolute",
    top: 0,
    left: 112,
    width: 58,
    height: 78,
  },
  productText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  backgroundText: {
    margin: 0,
  },
  productBackgroundText: {
    position: "absolute",
    top: 56,
    left: 0,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#2c2c2e",
    textAlign: "center",
    width: 60,
    height: 22,
  },
  groupIcon2: {
    position: "absolute",
    height: "62.18%",
    width: "80.83%",
    top: "-0.32%",
    right: "11.25%",
    bottom: "38.14%",
    left: "7.92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon: {
    position: "absolute",
    height: "37.88%",
    width: "45.08%",
    top: "11.83%",
    right: "32.46%",
    bottom: "50.29%",
    left: "22.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable2: {
    position: "absolute",
    top: 0,
    left: 203,
    width: 60,
    height: 78,
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 263,
    height: 78,
  },
  productPriceView1: {
    position: "absolute",
    top: 575,
    left: 47,
    width: 263,
    height: 78,
  },
  landingPageView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LandingPage;
