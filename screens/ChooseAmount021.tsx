import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseAmount021 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseAmount02View}>
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
      <View style={styles.productPriceView1}>
        <View style={styles.rectangleView} />
        <Text style={styles.setRandAmount}>Set Rand Amount</Text>
        <View style={styles.productPriceView}>
          <View style={styles.setWeightAmount1}>
            <View style={styles.rectangleView1} />
            <Text style={styles.setWeightAmount}>Set Weight Amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.productPriceView2}>
        <View style={styles.rectangleView2} />
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
          <View style={styles.step1View}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.step2View}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text1}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text2}>3</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.continuePressable}
        onPress={() => navigation.navigate("FillYourContainer011")}
      >
        <View style={styles.rectangleView3} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.text3}>0</Text>
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text4}>9</Text>
      <Image
        style={styles.vectorIcon2}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text5}>8</Text>
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text6}>7</Text>
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text7}>6</Text>
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text8}>5</Text>
      <Image
        style={styles.vectorIcon6}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text9}>4</Text>
      <Image
        style={styles.vectorIcon7}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.text10}>3</Text>
      <Image
        style={styles.vectorIcon8}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.text11}>2</Text>
      <Image
        style={styles.vectorIcon9}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.text12}>1</Text>
      <View style={styles.productPriceView3}>
        <View style={styles.rectangleView4} />
        <Text style={styles.gText}>100000g</Text>
        <Text style={styles.maximumWeightExceeded}>
          <Text style={styles.maximumText}>{`Maximum* `}</Text>
          <Text style={styles.weightText}>{`weight `}</Text>
          <Text style={styles.exceededText}>exceeded</Text>
        </Text>
      </View>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("ChooseAmount02")}
      >
        <View style={styles.rectangleView5} />
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
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#fff",
    width: 342,
    height: 50,
  },
  setRandAmount: {
    position: "absolute",
    height: "32%",
    width: "32.16%",
    top: "36%",
    right: "58.89%",
    bottom: "32%",
    left: "8.94%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#27272e",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
    width: 163,
    height: 40,
  },
  setWeightAmount: {
    position: "absolute",
    height: "40%",
    width: "74.85%",
    top: "32.5%",
    right: "12.88%",
    bottom: "27.5%",
    left: "12.27%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  setWeightAmount1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 163,
    height: 40,
  },
  productPriceView: {
    position: "absolute",
    top: 5,
    left: 174,
    width: 163,
    height: 40,
  },
  productPriceView1: {
    position: "absolute",
    top: 282,
    left: 16,
    width: 342,
    height: 50,
  },
  rectangleView2: {
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
  productPriceView2: {
    position: "absolute",
    top: 72,
    left: 18,
    width: 340,
    height: 110,
  },
  rectangleView3: {
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
  continueText: {
    position: "absolute",
    height: "16.67%",
    width: "61.11%",
    top: "41.98%",
    right: "18.52%",
    bottom: "41.36%",
    left: "20.37%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  continuePressable: {
    position: "absolute",
    top: 620,
    left: 196,
    width: 162,
    height: 162,
  },
  vectorIcon: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "66.75%",
    right: "35.47%",
    bottom: "25.86%",
    left: "35.2%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text3: {
    position: "absolute",
    height: "3.45%",
    width: "4%",
    top: "68.72%",
    right: "48%",
    bottom: "27.83%",
    left: "48%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon1: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "58.5%",
    right: "4.53%",
    bottom: "34.11%",
    left: "66.13%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text4: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "60.47%",
    right: "17.33%",
    bottom: "36.08%",
    left: "78.93%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "58.5%",
    right: "35.47%",
    bottom: "34.11%",
    left: "35.2%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text5: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "60.47%",
    right: "48%",
    bottom: "36.08%",
    left: "48.27%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon3: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "58.5%",
    right: "66.4%",
    bottom: "34.11%",
    left: "4.27%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text6: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "60.47%",
    right: "79.2%",
    bottom: "36.08%",
    left: "17.07%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon4: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "50.37%",
    right: "4.53%",
    bottom: "42.24%",
    left: "66.13%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text7: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "52.34%",
    right: "17.33%",
    bottom: "44.21%",
    left: "78.93%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon5: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "50.37%",
    right: "35.47%",
    bottom: "42.24%",
    left: "35.2%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text8: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "52.34%",
    right: "48%",
    bottom: "44.21%",
    left: "48.27%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon6: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "50.37%",
    right: "66.4%",
    bottom: "42.24%",
    left: "4.27%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text9: {
    position: "absolute",
    height: "3.45%",
    width: "4%",
    top: "52.34%",
    right: "78.93%",
    bottom: "44.21%",
    left: "17.07%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon7: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "42.12%",
    right: "4.53%",
    bottom: "50.49%",
    left: "66.13%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text10: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "44.09%",
    right: "17.33%",
    bottom: "52.46%",
    left: "78.93%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon8: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "42.12%",
    right: "35.47%",
    bottom: "50.49%",
    left: "35.2%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text11: {
    position: "absolute",
    height: "3.45%",
    width: "3.73%",
    top: "44.09%",
    right: "48%",
    bottom: "52.46%",
    left: "48.27%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  vectorIcon9: {
    position: "absolute",
    height: "7.39%",
    width: "29.33%",
    top: "42.12%",
    right: "66.4%",
    bottom: "50.49%",
    left: "4.27%",
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text12: {
    position: "absolute",
    height: "3.45%",
    width: "3.2%",
    top: "44.09%",
    right: "79.47%",
    bottom: "52.46%",
    left: "17.33%",
    fontSize: 25,
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ed2a2a",
    borderWidth: 4,
    width: 342,
    height: 80,
  },
  gText: {
    position: "absolute",
    height: "70%",
    width: "56.43%",
    top: "15%",
    right: "7.6%",
    bottom: "15%",
    left: "35.96%",
    fontSize: 48,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#27272e",
    textAlign: "center",
  },
  maximumText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  weightText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  exceededText: {
    margin: 0,
  },
  maximumWeightExceeded: {
    position: "absolute",
    height: "52.5%",
    width: "18.13%",
    top: "23.75%",
    right: "77.19%",
    bottom: "23.75%",
    left: "4.68%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#ed2a2a",
    textAlign: "left",
  },
  productPriceView3: {
    position: "absolute",
    top: 195,
    left: 16,
    width: 342,
    height: 80,
  },
  rectangleView5: {
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
  chooseAmount02View: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChooseAmount021;
