import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FillYourContainer01 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fillYourContainer01}>
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
      <View style={styles.step2View}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <Pressable
        style={styles.step3Pressable}
        onPress={() => navigation.navigate("FillYourContainer012")}
      >
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={styles.text1}>3</Text>
      </Pressable>
      <Pressable
        style={styles.step4Pressable}
        onPress={() => navigation.navigate("FillYourContainer011")}
      >
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={styles.text2}>1</Text>
      </Pressable>
      <Text style={styles.youHaveSelectedR10250gO}>
        <Text style={styles.youHaveSelected}>You have selected</Text>
        <Text style={styles.r10250g}>{`R10 / 250g of `}</Text>
        <Text style={styles.kelloggsRiceKrispies}>
          Kellogg's Rice Krispies.
        </Text>
      </Text>
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
          <View style={styles.step2View1}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text3}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text4}>3</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.x2Icon}
        resizeMode="cover"
        source={require("../assets/022x-2.png")}
      />
      <Text style={styles.pressDispenseNowToStart}>
        <Text style={styles.pressDispense}>
          <Text style={styles.pressText}>{`Press `}</Text>
          <Text style={styles.dispenseText1}>
            <Text style={styles.dispenseText}>{`Dispense `}</Text>
          </Text>
        </Text>
        <Text style={styles.nowToStart}>
          <Text style={styles.nowText1}>
            <Text style={styles.nowText}>Now</Text>
            <Text style={styles.text5}>{` `}</Text>
          </Text>
          <Text style={styles.toStartText1}>
            <Text style={styles.toStartText}>to start.</Text>
          </Text>
        </Text>
      </Text>
      <Pressable
        style={styles.dispenseNowPressable}
        onPress={() => navigation.navigate("FillYourContainer03")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.dispenseNowText}>
          <Text style={styles.dispenseText2}>Dispense</Text>
          <Text style={styles.nowText2}>Now</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("FillYourContainer011")}
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
    height: "70%",
    width: "40%",
    top: "15%",
    right: "30%",
    bottom: "15%",
    left: "30%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  step2View: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "67.73%",
    right: "48.27%",
    bottom: "29.8%",
    left: "46.4%",
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
    height: "70%",
    width: "40%",
    top: "15%",
    right: "30%",
    bottom: "15%",
    left: "30%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3fbb5e",
    textAlign: "left",
  },
  step3Pressable: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "67.73%",
    right: "40.8%",
    bottom: "29.8%",
    left: "53.87%",
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
  text2: {
    position: "absolute",
    height: "70%",
    width: "40%",
    top: "15%",
    right: "30%",
    bottom: "15%",
    left: "30%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3fbb5e",
    textAlign: "left",
  },
  step4Pressable: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "67.73%",
    right: "55.73%",
    bottom: "29.8%",
    left: "38.93%",
  },
  youHaveSelected: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r10250g: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  kelloggsRiceKrispies: {
    margin: 0,
  },
  youHaveSelectedR10250gO: {
    position: "absolute",
    height: "8.13%",
    width: "64%",
    top: "28.57%",
    right: "17.87%",
    bottom: "63.3%",
    left: "18.13%",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
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
  text3: {
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
  step2View1: {
    position: "absolute",
    height: "100%",
    width: "15.72%",
    top: "0%",
    right: "42.14%",
    bottom: "0%",
    left: "42.14%",
  },
  ellipseIcon4: {
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
  text4: {
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
  x2Icon: {
    position: "absolute",
    top: 332,
    left: 134,
    width: 114.5,
    height: 150.5,
  },
  pressText: {
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
  },
  dispenseText: {
    color: "#3fbb5e",
  },
  dispenseText1: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  pressDispense: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nowText: {
    color: "#3fbb5e",
  },
  text5: {
    color: "#27272e",
  },
  nowText1: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  toStartText: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  toStartText1: {
    color: "#27272e",
  },
  nowToStart: {
    margin: 0,
  },
  pressDispenseNowToStart: {
    position: "absolute",
    top: 492,
    left: 127,
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
  dispenseText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nowText2: {
    margin: 0,
  },
  dispenseNowText: {
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
  fillYourContainer01: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FillYourContainer01;
