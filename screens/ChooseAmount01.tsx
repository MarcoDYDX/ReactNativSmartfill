import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseAmount01 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseAmount01}>
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
      <Pressable
        style={styles.productPricePressable}
        onPress={() => navigation.navigate("LandingPage")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.kelloggsCornFlakes}>Kelloggs Corn Flakes</Text>
      </Pressable>
      <Pressable
        style={styles.productPricePressable1}
        onPress={() => navigation.navigate("ChooseAmount02")}
      >
        <View style={styles.rectangleView1} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-129.png")}
        />
        <View style={styles.groupView}>
          <Text style={styles.popularAmountsText}> Popular Amounts</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.productPricePressable2}
        onPress={() => navigation.navigate("ChooseAmount021")}
      >
        <View style={styles.rectangleView2} />
        <View style={styles.groupView1}>
          <Text style={styles.customAmountText}>Custom Amount</Text>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-180.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.productPricePressable3}
        onPress={() => navigation.navigate("FillYourContainer02")}
      >
        <View style={styles.rectangleView3} />
        <View style={styles.groupView2}>
          <Text style={styles.fillUpByFreeFlow}>Fill Up By Free Flow</Text>
        </View>
        <Image
          style={styles.freeFlowIcon}
          resizeMode="cover"
          source={require("../assets/free-flow-icon.png")}
        />
      </Pressable>
      <View style={styles.productPriceView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.chooseAmountFreeFlow}>
          <Text style={styles.chooseAmountText}>Choose Amount</Text>
          <Text style={styles.freeFlowText}> / Free Flow</Text>
        </Text>
        <Text style={styles.fillYourContainer}>
          <Text style={styles.fillYourText}>Fill Your</Text>
          <Text style={styles.containerText}>Container</Text>
        </Text>
        <Text style={styles.printPriceSticker}>
          <Text style={styles.printPriceText}>Print Price</Text>
          <Text style={styles.stickerText}>Sticker</Text>
        </Text>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <View style={styles.groupView3}>
          <View style={styles.step1View}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.step2View}>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text1}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text2}>3</Text>
          </View>
        </View>
      </View>
      <Text style={styles.r4100g}>
        <Text style={styles.r4Text}>R4 /</Text>
        <Text style={styles.text3}>{` `}</Text>
        <Text style={styles.gText}>100g</Text>
      </Text>
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
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2c2c2e",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: 340,
    height: 267,
  },
  kelloggsCornFlakes: {
    position: "absolute",
    height: "12.88%",
    width: "81.47%",
    top: "21.21%",
    right: "9.12%",
    bottom: "65.91%",
    left: "9.41%",
    fontSize: 28,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  productPricePressable: {
    position: "absolute",
    top: 197,
    left: 18,
    width: 340,
    height: 267,
  },
  rectangleView1: {
    position: "absolute",
    height: "99.25%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.75%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
  },
  groupIcon: {
    position: "absolute",
    height: "28.8%",
    width: "8%",
    top: "34.74%",
    right: "84.5%",
    bottom: "36.47%",
    left: "7.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon: {
    position: "absolute",
    height: "37.85%",
    width: "10.1%",
    top: "30.88%",
    right: "83.14%",
    bottom: "31.27%",
    left: "6.76%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  popularAmountsText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "28.67%",
    width: "52.35%",
    top: "35.29%",
    right: "25.29%",
    bottom: "36.04%",
    left: "22.35%",
  },
  productPricePressable1: {
    position: "absolute",
    top: 480,
    left: 18,
    width: 340,
    height: 90.68,
  },
  rectangleView2: {
    position: "absolute",
    height: "99.25%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.75%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
  },
  customAmountText: {
    position: "absolute",
    height: "78.79%",
    width: "76.37%",
    top: "10.61%",
    right: "0%",
    bottom: "10.61%",
    left: "23.63%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupIcon1: {
    position: "absolute",
    height: "100%",
    width: "12.41%",
    top: "0%",
    right: "87.59%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView1: {
    position: "absolute",
    height: "36.39%",
    width: "61.62%",
    top: "31.43%",
    right: "30.59%",
    bottom: "32.18%",
    left: "7.79%",
  },
  productPricePressable2: {
    position: "absolute",
    top: 587,
    left: 18,
    width: 340,
    height: 90.68,
  },
  rectangleView3: {
    position: "absolute",
    height: "99.25%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.75%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
  },
  fillUpByFreeFlow: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    height: "28.67%",
    width: "57.06%",
    top: "35.29%",
    right: "20.59%",
    bottom: "36.04%",
    left: "22.35%",
  },
  freeFlowIcon: {
    position: "absolute",
    height: "29.51%",
    width: "8.82%",
    top: "35.29%",
    right: "84.12%",
    bottom: "35.2%",
    left: "7.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  productPricePressable3: {
    position: "absolute",
    top: 694,
    left: 18,
    width: 340,
    height: 90.68,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2c2c2e",
    width: 340,
    height: 110,
  },
  chooseAmountText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  freeFlowText: {
    margin: 0,
  },
  chooseAmountFreeFlow: {
    position: "absolute",
    top: 63,
    left: 31,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#3fbb5e",
    textAlign: "center",
  },
  fillYourText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  containerText: {
    margin: 0,
  },
  fillYourContainer: {
    position: "absolute",
    top: 69,
    left: 152,
    fontSize: 8,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  printPriceText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  stickerText: {
    margin: 0,
  },
  printPriceSticker: {
    position: "absolute",
    top: 69,
    left: 243,
    fontSize: 8,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  lineView: {
    position: "absolute",
    top: 35.5,
    left: 94.5,
    borderStyle: "solid",
    borderColor: "#3fbb5e",
    borderTopWidth: 1,
    width: 59,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 35.5,
    left: 186.5,
    borderStyle: "solid",
    borderColor: "#3fbb5e",
    borderTopWidth: 1,
    width: 59,
    height: 1,
  },
  ellipseIcon1: {
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
  text: {
    position: "absolute",
    height: "37.87%",
    width: "20.39%",
    top: "29.13%",
    right: "38.82%",
    bottom: "33%",
    left: "40.78%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  step1View: {
    position: "absolute",
    height: "100%",
    width: "15.72%",
    top: "0%",
    right: "84.28%",
    bottom: "0%",
    left: "0%",
  },
  ellipseIcon2: {
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
  text1: {
    position: "absolute",
    height: "37.87%",
    width: "20.39%",
    top: "29.13%",
    right: "41.74%",
    bottom: "33%",
    left: "37.87%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  step2View: {
    position: "absolute",
    height: "100%",
    width: "15.72%",
    top: "0%",
    right: "42.14%",
    bottom: "0%",
    left: "42.14%",
  },
  ellipseIcon3: {
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
  text2: {
    position: "absolute",
    height: "37.87%",
    width: "20.39%",
    top: "29.13%",
    right: "38.82%",
    bottom: "33%",
    left: "40.78%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  step3View: {
    position: "absolute",
    height: "100%",
    width: "15.72%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "84.28%",
  },
  groupView3: {
    position: "absolute",
    height: "31.21%",
    width: "64.21%",
    top: "16.36%",
    right: "17.84%",
    bottom: "52.43%",
    left: "17.94%",
  },
  productPriceView: {
    position: "absolute",
    top: 72,
    left: 18,
    width: 340,
    height: 110,
  },
  r4Text: {
    fontSize: 58,
  },
  text3: {
    fontSize: 48,
  },
  gText: {
    fontSize: 38,
  },
  r4100g: {
    position: "absolute",
    height: "8.62%",
    width: "58.67%",
    top: "39.66%",
    right: "20.53%",
    bottom: "51.72%",
    left: "20.8%",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  chooseAmount01: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChooseAmount01;
