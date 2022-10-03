import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseAmount02 = () => {
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
      <View style={styles.productPriceView}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Text style={styles.smallText}>Small</Text>
        <Text style={styles.r5125g}>
          <Text style={styles.r5}>{`R5 / `}</Text>
          <Text style={styles.gText}>125g</Text>
        </Text>
      </View>
      <View style={styles.productPriceView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.mediumText}>Medium</Text>
        <Text style={styles.r10250g}>
          <Text style={styles.r10}>{`R10 / `}</Text>
          <Text style={styles.gText1}>250g</Text>
        </Text>
      </View>
      <View style={styles.productPriceView2}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Text style={styles.largeText}>Large</Text>
        <Text style={styles.r15375g}>
          <Text style={styles.r15}>{`R15 / `}</Text>
          <Text style={styles.gText2}>375g</Text>
        </Text>
      </View>
      <Image
        style={styles.tickIcon}
        resizeMode="cover"
        source={require("../assets/tick.png")}
      />
      <View style={styles.productPriceView3}>
        <View style={styles.rectangleView3} />
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
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/step-1.png")}
            />
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.step2View}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text1}>2</Text>
          </View>
          <View style={styles.step3View}>
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Text style={styles.text2}>3</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={styles.frameIcon2}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={styles.frameIcon3}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Pressable
        style={styles.continuePressable}
        onPress={() => navigation.navigate("FillYourContainer011")}
      >
        <View style={styles.rectangleView4} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("ChooseAmount01")}
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
    backgroundColor: "#2c2c2e",
    width: 340,
    height: 100,
  },
  ellipseIcon: {
    position: "absolute",
    height: "34.33%",
    width: "10.1%",
    top: "33%",
    right: "7.84%",
    bottom: "32.67%",
    left: "82.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  smallText: {
    position: "absolute",
    height: "10%",
    width: "9.41%",
    top: "10%",
    right: "82.65%",
    bottom: "80%",
    left: "7.94%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  r5: {
    fontSize: 34,
  },
  gText: {
    fontSize: 29,
  },
  r5125g: {
    position: "absolute",
    height: "41%",
    width: "42.06%",
    top: "49%",
    right: "50.59%",
    bottom: "10%",
    left: "7.35%",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  productPriceView: {
    position: "absolute",
    top: 197,
    left: 18,
    width: 340,
    height: 100,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#2c2c2e",
    width: 340,
    height: 100,
  },
  mediumText: {
    position: "absolute",
    height: "10%",
    width: "11.47%",
    top: "10%",
    right: "80.59%",
    bottom: "80%",
    left: "7.94%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  r10: {
    fontSize: 34,
  },
  gText1: {
    fontSize: 29,
  },
  r10250g: {
    position: "absolute",
    height: "41%",
    width: "49.12%",
    top: "49%",
    right: "43.53%",
    bottom: "10%",
    left: "7.35%",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  productPriceView1: {
    position: "absolute",
    top: 313,
    left: 18,
    width: 340,
    height: 100,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#2c2c2e",
    width: 340,
    height: 100,
  },
  ellipseIcon1: {
    position: "absolute",
    height: "34.33%",
    width: "10.1%",
    top: "33%",
    right: "7.84%",
    bottom: "32.67%",
    left: "82.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  largeText: {
    position: "absolute",
    height: "10%",
    width: "9.41%",
    top: "10%",
    right: "82.65%",
    bottom: "80%",
    left: "7.94%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  r15: {
    fontSize: 34,
  },
  gText2: {
    fontSize: 29,
  },
  r15375g: {
    position: "absolute",
    height: "41%",
    width: "47.94%",
    top: "49%",
    right: "44.71%",
    bottom: "10%",
    left: "7.35%",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  productPriceView2: {
    position: "absolute",
    top: 429,
    left: 18,
    width: 340,
    height: 100,
  },
  tickIcon: {
    position: "absolute",
    top: 346,
    left: 297,
    width: 35,
    height: 35,
  },
  rectangleView3: {
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
  productPriceView3: {
    position: "absolute",
    top: 72,
    left: 18,
    width: 340,
    height: 110,
  },
  frameIcon: {
    position: "absolute",
    height: "1.64%",
    width: "5.33%",
    top: "27.71%",
    right: "82.67%",
    bottom: "70.65%",
    left: "12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameIcon1: {
    position: "absolute",
    top: 341,
    left: 45,
    width: 20,
    height: 13.33,
    overflow: "hidden",
  },
  frameIcon2: {
    position: "absolute",
    height: "1.64%",
    width: "5.33%",
    top: "56.4%",
    right: "82.4%",
    bottom: "41.95%",
    left: "12.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameIcon3: {
    position: "absolute",
    height: "1.64%",
    width: "5.33%",
    top: "56.4%",
    right: "75.47%",
    bottom: "41.95%",
    left: "19.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView4: {
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
    backgroundColor: "#1b1b1d",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChooseAmount02;
