import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FillYourContainer08 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fillYourContainer08}>
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
      <View style={styles.rectangleView1} />
      <Text style={styles.dispensingHasStopped}>Dispensing has stopped.</Text>
      <Text style={styles.youHaveDispensedR6250gO}>
        <Text style={styles.youHaveDispensed}>You have dispensed</Text>
        <Text style={styles.r6250g}>R6 / 250g of your</Text>
        <Text style={styles.r10250}>R10 / 250 order.</Text>
      </Text>
      <Text style={styles.pleaseSelectOneOfTheOptio}>
        Please select one of the options below:
      </Text>
      <View style={styles.groupView1}>
        <Text style={styles.iText}>i</Text>
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-801.png")}
        />
      </View>
      <Text
        style={styles.myContainerIsUnderTheSpou}
      >{`My container is under the spout & I want to
top up:`}</Text>
      <Text style={styles.iHaveEnoughProduct}>I have enough product:</Text>
      <Pressable
        style={styles.productPricePressable}
        onPress={() => navigation.navigate("PrintYourSticker")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.printStickerText}>
          <Text style={styles.printText}>Print</Text>
          <Text style={styles.stickerText1}>Sticker</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.productPricePressable1}
        onPress={() => navigation.navigate("FillYourContainer03")}
      >
        <View style={styles.rectangleView3} />
        <View style={styles.groupView2}>
          <Text style={styles.continueDispensingText}>
            <Text style={styles.continueText}>Continue</Text>
            <Text style={styles.dispensingText}>Dispensing</Text>
          </Text>
        </View>
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
  rectangleView1: {
    position: "absolute",
    top: 197,
    left: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 340,
    height: 314,
  },
  dispensingHasStopped: {
    position: "absolute",
    height: "3.82%",
    width: "66.93%",
    top: "28.57%",
    right: "16.53%",
    bottom: "67.61%",
    left: "16.53%",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  youHaveDispensed: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r6250g: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r10250: {
    margin: 0,
  },
  youHaveDispensedR6250gO: {
    position: "absolute",
    height: "10.84%",
    width: "64%",
    top: "35.96%",
    right: "17.87%",
    bottom: "53.2%",
    left: "18.13%",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  pleaseSelectOneOfTheOptio: {
    position: "absolute",
    height: "5.3%",
    width: "45.33%",
    top: "50%",
    right: "27.47%",
    bottom: "44.7%",
    left: "27.2%",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  iText: {
    position: "absolute",
    height: "57.69%",
    width: "61.54%",
    top: "19.23%",
    right: "23.08%",
    bottom: "23.08%",
    left: "15.38%",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: "Open Sans",
    color: "#27272e",
    textAlign: "center",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 26,
    height: 26,
  },
  groupView1: {
    position: "absolute",
    height: "3.2%",
    width: "6.93%",
    top: "57.27%",
    right: "10.13%",
    bottom: "39.53%",
    left: "82.93%",
  },
  myContainerIsUnderTheSpou: {
    position: "absolute",
    height: "5.42%",
    width: "42.4%",
    top: "70.57%",
    right: "52%",
    bottom: "24.01%",
    left: "5.6%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  iHaveEnoughProduct: {
    position: "absolute",
    height: "3.69%",
    width: "38.93%",
    top: "72.29%",
    right: "6.93%",
    bottom: "24.01%",
    left: "54.13%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
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
  printText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  stickerText1: {
    margin: 0,
  },
  printStickerText: {
    position: "absolute",
    height: "33.33%",
    width: "47.53%",
    top: "33.33%",
    right: "26.26%",
    bottom: "33.33%",
    left: "26.2%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  productPricePressable: {
    position: "absolute",
    top: 620,
    left: 194,
    width: 162,
    height: 162,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#3fbb5e",
    borderWidth: 2,
    width: 162,
    height: 162,
  },
  continueText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  dispensingText: {
    margin: 0,
  },
  continueDispensingText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#3fbb5e",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    top: 54,
    left: 21,
    width: 122,
    height: 54,
  },
  productPricePressable1: {
    position: "absolute",
    top: 620,
    left: 18,
    width: 162,
    height: 162,
  },
  fillYourContainer08: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FillYourContainer08;
