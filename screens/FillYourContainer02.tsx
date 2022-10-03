import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FillYourContainer02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fillYourContainer02}>
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
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text1}>3</Text>
          </View>
        </View>
      </View>
      <Text style={styles.youHaveSelectedToPurchase}>
        You have selected to purchase your produce by free flow.
      </Text>
      <Text style={styles.youHaveSelectedToPurchase2}>
        <Text style={styles.youHaveSelectedToPurchase1}>
          <Text style={styles.youHaveSelected}>
            You have selected to purchase your produce by free flow.
          </Text>
        </Text>
        <Text style={styles.blankLineText1}>
          <Text style={styles.blankLineText}> </Text>
        </Text>
        <Text style={styles.placeYourContainerUnderThe}>
          <Text
            style={styles.placeYourContainer}
          >{`Place your container under the spout and click `}</Text>
          <Text style={styles.dispenseNow}>
            <Text style={styles.dispenseNowText}>Dispense Now</Text>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.toStartText1}>
            <Text style={styles.toStartText}>to start.</Text>
          </Text>
        </Text>
      </Text>
      <Text style={styles.pressStopWhenYouHaveEnoug}>
        <Text style={styles.pressStopWhenYou}>
          <Text style={styles.pressText}>{`Press `}</Text>
          <Text style={styles.stopText}>Stop</Text>
          <Text style={styles.whenYou}>{` when you `}</Text>
        </Text>
        <Text style={styles.haveEnoughText1}>
          <Text style={styles.haveEnoughText}>have enough.</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.dispenseNowPressable}
        onPress={() => navigation.navigate("FillYourContainer03")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.dispenseNowText1}>
          <Text style={styles.dispenseText}>Dispense</Text>
          <Text style={styles.nowText}>Now</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("FillYourContainer012")}
      >
        <View style={styles.rectangleView3} />
        <Text style={styles.backText}>Back</Text>
      </Pressable>
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
  youHaveSelectedToPurchase: {
    position: "absolute",
    height: "8.13%",
    width: "64.53%",
    top: "28.57%",
    right: "17.87%",
    bottom: "63.3%",
    left: "17.6%",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  youHaveSelected: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  youHaveSelectedToPurchase1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  placeYourContainer: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  dispenseNowText: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  text2: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  dispenseNow: {
    color: "#3fbb5e",
  },
  toStartText: {
    color: "#27272e",
  },
  toStartText1: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  placeYourContainerUnderThe: {
    margin: 0,
  },
  youHaveSelectedToPurchase2: {
    position: "absolute",
    height: "14.53%",
    width: "64.53%",
    top: "40.89%",
    right: "17.6%",
    bottom: "44.58%",
    left: "17.87%",
    fontSize: 16,
    textAlign: "center",
  },
  pressText: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  stopText: {
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#ed2a2a",
  },
  whenYou: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  pressStopWhenYou: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  haveEnoughText: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  haveEnoughText1: {
    margin: 0,
  },
  pressStopWhenYouHaveEnoug: {
    position: "absolute",
    height: "4.68%",
    width: "46.93%",
    top: "58%",
    right: "26.67%",
    bottom: "37.32%",
    left: "26.4%",
    fontSize: 16,
    textAlign: "center",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
  },
  dispenseText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nowText: {
    margin: 0,
  },
  dispenseNowText1: {
    position: "absolute",
    height: "33.33%",
    width: "62.96%",
    top: "36.42%",
    right: "16.67%",
    bottom: "30.25%",
    left: "20.37%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  dispenseNowPressable: {
    position: "absolute",
    top: 620,
    left: 196,
    width: 162,
    height: 162,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 162,
    height: 162,
  },
  backText: {
    position: "absolute",
    top: 70.56,
    left: 55.66,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  backPressable: {
    position: "absolute",
    top: 620,
    left: 18,
    width: 162,
    height: 162,
  },
  fillYourContainer02: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FillYourContainer02;
