import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PrintYourSticker = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.printYourSticker}>
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
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={styles.step1Icon}
        resizeMode="cover"
        source={require("../assets/step-12.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector-52.png")}
      />
      <Text style={styles.collectYourPriceStickerAnd}>
        <Text style={styles.collectYourPriceSticker}>
          <Text style={styles.collectYour}>{`Collect your `}</Text>
          <Text style={styles.priceSticker}>{`Price Sticker `}</Text>
        </Text>
        <Text style={styles.andPayAtTheTill}>
          <Text style={styles.andText}>and</Text>
          <Text style={styles.payAtThe}>{` pay at the till. `}</Text>
        </Text>
      </Text>
      <Text style={styles.thankYouForShoppingWithUs}>
        Thank you for shopping with us. Enjoy!
      </Text>
      <Text style={styles.youreDoneText}>You're done!</Text>
      <View style={styles.frameView} />
      <View style={styles.lineView} />
      <Pressable
        style={styles.productPricePressable}
        onPress={() => navigation.navigate("ChooseAmount01")}
      >
        <View style={styles.rectangleView} />
        <View style={styles.groupView}>
          <Text style={styles.newPurchaseText}>New Purchase</Text>
        </View>
      </Pressable>
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
        <View style={styles.lineView1} />
        <View style={styles.lineView2} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
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
  vectorIcon: {
    position: "absolute",
    height: "49.39%",
    width: "90.67%",
    top: "24.26%",
    right: "4.53%",
    bottom: "26.35%",
    left: "4.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  step1Icon: {
    position: "absolute",
    height: "12.32%",
    width: "26.67%",
    top: "27.96%",
    right: "35.2%",
    bottom: "59.73%",
    left: "38.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    top: 264,
    left: 174,
    width: 38,
    height: 28,
  },
  collectYour: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  priceSticker: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  collectYourPriceSticker: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  andText: {
    fontFamily: "Inter",
  },
  payAtThe: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  andPayAtTheTill: {
    margin: 0,
  },
  collectYourPriceStickerAnd: {
    position: "absolute",
    top: 407,
    left: 88,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    width: 200,
  },
  thankYouForShoppingWithUs: {
    position: "absolute",
    top: 471,
    left: 65,
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 245,
  },
  youreDoneText: {
    position: "absolute",
    height: "3.57%",
    width: "39.2%",
    top: "43.84%",
    right: "30.4%",
    bottom: "52.59%",
    left: "30.4%",
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: 235,
    left: 160,
    width: 67.69,
    height: 67.69,
    overflow: "hidden",
  },
  lineView: {
    position: "absolute",
    top: 545,
    left: 15,
    borderStyle: "dashed",
    borderColor: "#1c1c1e",
    borderRadius: 0.001,
    borderTopWidth: 2,
    width: 346,
    height: 2,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
    width: 340,
    height: 162,
  },
  newPurchaseText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 68,
    left: 94,
    width: 155,
    height: 27,
  },
  productPricePressable: {
    position: "absolute",
    top: 620,
    left: 18,
    width: 340,
    height: 162,
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
    top: 64,
    left: 231,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#3fbb5e",
    textAlign: "center",
  },
  lineView1: {
    position: "absolute",
    top: 35.5,
    left: 94.5,
    borderStyle: "solid",
    borderColor: "#3fbb5e",
    borderTopWidth: 1,
    width: 59,
    height: 1,
  },
  lineView2: {
    position: "absolute",
    top: 35.5,
    left: 186.5,
    borderStyle: "solid",
    borderColor: "#3fbb5e",
    borderTopWidth: 1,
    width: 59,
    height: 1,
  },
  groupIcon: {
    position: "absolute",
    height: "31.21%",
    width: "64.21%",
    top: "16.36%",
    right: "17.84%",
    bottom: "52.43%",
    left: "17.94%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  productPriceView: {
    position: "absolute",
    top: 72,
    left: 18,
    width: 340,
    height: 110,
  },
  printYourSticker: {
    position: "relative",
    backgroundColor: "#1c1c1e",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PrintYourSticker;
