import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Allergens = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.allergensView}>
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
      <View style={styles.statusBarView}>
        <View style={styles.batteryView}>
          <View style={styles.borderView} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacityView} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyleView}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
      </View>
      <Text style={styles.r4100gText}>R4/100g</Text>
      <Text style={styles.nowText}>Now</Text>
      <Text style={styles.wasText}>Was</Text>
      <Text style={styles.r5100gText}>R5/100g</Text>
      <View style={styles.productPriceView}>
        <View style={styles.rectangleView} />
        <View style={styles.groupView}>
          <Text style={styles.startText}>Start</Text>
        </View>
      </View>
      <View style={styles.productPriceView1}>
        <View style={styles.groupView1}>
          <Text style={styles.allergensText}>Allergens</Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={styles.nutrionalInfomationText}>
            <Text style={styles.nutrionalText}>Nutrional</Text>
            <Text style={styles.infomationText}>Infomation</Text>
          </Text>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <Text style={styles.productBackgroundText}>
            <Text style={styles.productText}>Product</Text>
            <Text style={styles.backgroundText}>Background</Text>
          </Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
      </View>
      <View style={styles.productPriceView2}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
      </View>
      <Image
        style={styles.productPriceIcon}
        resizeMode="cover"
        source={require("../assets/product-price1.png")}
      />
      <View style={styles.overlayView} />
      <View style={styles.rectangleView1} />
      <Pressable
        style={styles.fillPressable}
        onPress={() => navigation.navigate("LandingPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/fill.png")}
        />
      </Pressable>
      <View style={styles.paginationView}>
        <Pressable
          style={styles.ellipsePressable}
          onPress={() => navigation.navigate("ProductInformation")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/ellipse-771.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ellipsePressable1, styles.ml24]}
          onPress={() => navigation.navigate("NutritionalInformation")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/ellipse-771.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupIcon3, styles.ml24]}
          resizeMode="cover"
          source={require("../assets/group-177.png")}
        />
      </View>
      <Text style={styles.thisProductContainsTheFoll}>
        <Text style={styles.thisProductText1}>
          <Text style={styles.thisProductText}>This product</Text>
        </Text>
        <Text style={styles.containsTheFollowingAllerge}>
          <Text style={styles.containsTheFollowing}>
            contains the following allergens:
          </Text>
          <Text style={styles.text}></Text>
        </Text>
        <Text style={styles.blankLineText1}>
          <Text style={styles.blankLineText}> </Text>
        </Text>
        <Text style={styles.oatsText1}>
          <Text style={styles.oatsText}>Oats</Text>
        </Text>
        <Text style={styles.wheatText1}>
          <Text style={styles.wheatText}>Wheat</Text>
        </Text>
        <Text style={styles.maizeText1}>
          <Text style={styles.maizeText}>Maize</Text>
        </Text>
        <Text style={styles.barleyText1}>
          <Text style={styles.barleyText}>Barley</Text>
        </Text>
        <Text style={styles.blankLineText3}>
          <Text style={styles.blankLineText2}> </Text>
        </Text>
        <Text style={styles.thisProductMayContainTree}>
          <Text
            style={styles.thisProductMay}
          >{`This product may contain tree nuts, peanuts, soy & dairy products.`}</Text>
        </Text>
      </Text>
      <Text style={styles.allergensText1}>Allergens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml24: {
    marginLeft: 24,
  },
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
  borderView: {
    position: "absolute",
    top: 0,
    right: 2.33,
    borderRadius: 2.67,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    width: 22,
    height: 11.33,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    top: 3.67,
    right: 0,
    width: 1.33,
    height: 4,
    opacity: 0.4,
  },
  capacityView: {
    position: "absolute",
    top: 2,
    right: 4.33,
    borderRadius: 1.33,
    backgroundColor: "#e0e0e0",
    width: 18,
    height: 7.33,
  },
  batteryView: {
    position: "absolute",
    top: 17.33,
    right: 14.67,
    width: 24.33,
    height: 11.33,
  },
  wifiIcon: {
    position: "relative",
    width: 15.27,
    height: 10.97,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 10.67,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 14,
    letterSpacing: -0.28,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Open Sans",
    color: "#e0e0e0",
    textAlign: "center",
  },
  timeStyleView: {
    position: "absolute",
    height: "47.73%",
    width: "14.4%",
    top: "20.45%",
    right: "80%",
    bottom: "31.82%",
    left: "5.6%",
  },
  statusBarView: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    height: 44,
  },
  r4100gText: {
    position: "absolute",
    height: "7.14%",
    width: "56.53%",
    top: "44.33%",
    right: "35.2%",
    bottom: "48.52%",
    left: "8.27%",
    fontSize: 48,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1c1c1e",
    textAlign: "left",
  },
  nowText: {
    position: "absolute",
    height: "1.48%",
    width: "5.87%",
    top: "42.83%",
    right: "85.6%",
    bottom: "55.7%",
    left: "8.53%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1c1c1e",
    textAlign: "left",
  },
  wasText: {
    position: "absolute",
    height: "1.48%",
    width: "5.33%",
    top: "52.43%",
    right: "86.13%",
    bottom: "46.09%",
    left: "8.53%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#1c1c1e",
    textAlign: "left",
  },
  r5100gText: {
    position: "absolute",
    height: "6.53%",
    width: "52.8%",
    top: "53.91%",
    right: "38.93%",
    bottom: "39.56%",
    left: "8.27%",
    fontSize: 48,
    fontFamily: "Inter",
    color: "#1c1c1e",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#3fbb5e",
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  productPriceView: {
    position: "absolute",
    top: 690,
    left: 18,
    width: 340,
    height: 100,
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
    height: "62.18%",
    width: "18.44%",
    top: "-0.32%",
    right: "72.91%",
    bottom: "38.14%",
    left: "8.65%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    left: 112,
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
    width: "18.44%",
    top: "-0.32%",
    right: "37.17%",
    bottom: "38.14%",
    left: "44.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    left: 203,
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
    width: "18.44%",
    top: "-0.32%",
    right: "2.57%",
    bottom: "38.14%",
    left: "78.99%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon: {
    position: "absolute",
    height: "37.88%",
    width: "10.28%",
    top: "11.83%",
    right: "7.41%",
    bottom: "50.29%",
    left: "82.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  rectangleIcon: {
    position: "absolute",
    top: 1,
    left: 74,
    borderRadius: 6,
    width: 522.86,
    height: 183,
  },
  productPriceView2: {
    position: "absolute",
    top: -1,
    left: -74,
    width: 522.86,
    height: 183,
  },
  productPriceIcon: {
    position: "absolute",
    top: 213,
    left: 80.25,
    width: 212.51,
    height: 87,
  },
  overlayView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    width: 375,
    height: 812,
    opacity: 0.55,
  },
  rectangleView1: {
    position: "absolute",
    top: 170,
    left: 17,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 340,
    height: 400,
  },
  icon: {
    height: "1.92%",
    width: "4.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fillPressable: {
    position: "absolute",
    left: "87.31%",
    top: "23.08%",
    right: "8.54%",
    bottom: "75%",
  },
  icon1: {
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  ellipsePressable: {
    position: "relative",
  },
  icon2: {
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  ellipsePressable1: {
    position: "relative",
  },
  groupIcon3: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  paginationView: {
    position: "absolute",
    top: 555,
    left: 222,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  thisProductText: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  thisProductText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  containsTheFollowing: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  text: {
    fontWeight: "200",
    fontFamily: "Inter",
  },
  containsTheFollowingAllerge: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  blankLineText: {
    fontWeight: "200",
    fontFamily: "Inter",
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  oatsText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  oatsText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  wheatText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  wheatText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  maizeText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  maizeText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  barleyText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  barleyText1: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  blankLineText2: {
    fontWeight: "200",
    fontFamily: "Inter",
  },
  blankLineText3: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  thisProductMay: {
    fontWeight: "200",
    fontFamily: "Inter",
  },
  thisProductMayContainTree: {
    margin: 0,
  },
  thisProductContainsTheFoll: {
    position: "absolute",
    height: "31.65%",
    width: "70.13%",
    top: "32.39%",
    right: "14.93%",
    bottom: "35.96%",
    left: "14.93%",
    fontSize: 16,
    color: "#27272e",
    textAlign: "center",
  },
  allergensText1: {
    position: "absolute",
    height: "3.57%",
    width: "30.13%",
    top: "25%",
    right: "34.67%",
    bottom: "71.43%",
    left: "35.2%",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#27272e",
    textAlign: "center",
  },
  allergensView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Allergens;
