import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FillYourContainer03 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fillYourContainer03}>
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
      <View style={styles.rectangleView} />
      <Image
        style={styles.dispensing3x1Icon}
        resizeMode="cover"
        source={require("../assets/dispensing3x-1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-803.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-805.png")}
      />
      <Text style={styles.r400Text}>R400</Text>
      <Text style={styles.randsText}>Rands</Text>
      <Text style={styles.gramsText}>Grams</Text>
      <Text style={styles.gText}>1000g</Text>
      <View style={styles.productPriceView}>
        <View style={styles.rectangleView1} />
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
        <View style={styles.groupView}>
          <Image
            style={styles.step1Icon}
            resizeMode="cover"
            source={require("../assets/step-1.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-5.png")}
          />
          <View style={styles.step2View}>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text1}>3</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.productPricePressable}
        onPress={() => navigation.navigate("FillYourContainer08")}
      >
        <View style={styles.rectangleView2} />
        <View style={styles.groupView1}>
          <Text style={styles.stopText}>Stop</Text>
        </View>
      </Pressable>
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-804.png")}
      />
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
    top: 197,
    left: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 340,
    height: 400,
  },
  dispensing3x1Icon: {
    position: "absolute",
    top: 331,
    left: 70,
    width: 253,
    height: 253,
  },
  ellipseIcon: {
    position: "absolute",
    top: 320,
    left: 66,
    width: 240,
    height: 240,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 430.5,
    left: 176.5,
    width: 129,
    height: 129,
  },
  r400Text: {
    position: "absolute",
    height: "4.68%",
    width: "36%",
    top: "30.79%",
    right: "52.53%",
    bottom: "64.53%",
    left: "11.47%",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1c1c1e",
    textAlign: "left",
  },
  randsText: {
    position: "absolute",
    height: "2.59%",
    width: "13.6%",
    top: "27.83%",
    right: "74.67%",
    bottom: "69.58%",
    left: "11.73%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#1c1c1e",
    textAlign: "left",
  },
  gramsText: {
    position: "absolute",
    height: "2.59%",
    width: "14.4%",
    top: "27.83%",
    right: "30.13%",
    bottom: "69.58%",
    left: "55.47%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#1c1c1e",
    textAlign: "left",
  },
  gText: {
    position: "absolute",
    height: "4.68%",
    width: "35.47%",
    top: "30.79%",
    right: "9.33%",
    bottom: "64.53%",
    left: "55.2%",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1c1c1e",
    textAlign: "left",
  },
  rectangleView1: {
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
    top: 69,
    left: 48,
    fontSize: 8,
    fontFamily: "Inter",
    color: "#fff",
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
    top: 64,
    left: 141,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#3fbb5e",
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
  step1Icon: {
    position: "absolute",
    height: "100%",
    width: "15.72%",
    top: "0%",
    right: "84.28%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon: {
    position: "absolute",
    top: 12,
    left: 10,
    width: 14.25,
    height: 10.75,
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
  text: {
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
  text1: {
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
  groupView: {
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
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#ed2a2a",
    width: 340,
    height: 162,
  },
  stopText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 69,
    left: 145,
    width: 51,
    height: 27,
  },
  productPricePressable: {
    position: "absolute",
    top: 620,
    left: 18,
    width: 340,
    height: 162,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 320.5,
    left: 66.5,
    width: 129,
    height: 129,
  },
  fillYourContainer03: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FillYourContainer03;
