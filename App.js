import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Star from "./Star";

const PercentageBar = ({ starText, percentage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          width: 50,
          fontSize: 14,
          color: "#2A5BDA",
        }}
      >
        {starText}
      </Text>
      <View
        style={{
          height: 15,
          flex: 1,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#F5F8FF",
            borderRadius: 18,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            padding: 2,
          }}
        >
          <View
            style={{
              flex: 1,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "#ffcc48",
              shadowOpacity: 1.0,
              shadowRadius: 4,
              backgroundColor: "#FFCC48",
              borderRadius: 18,
              width: `${percentage}%`,
              minWidth: 5,
              elevation: 4,
            }}
          />
        </View>
      </View>

      <Text
        style={{
          width: 40,
          fontSize: 14,
          color: "#323357",
        }}
      >
        {percentage}%
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <View></View>
        <Text style={styles.title}>Customer reviews</Text>
        <View style={styles.totalWrap}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </View>
          <Text>4.7 out of 5</Text>
        </View>
        <Text style={styles.amountText}>40 customer ratings</Text>

        <View style={{ marginTop: 40 }}>
          <View style={styles.spacer}>
            <PercentageBar starText="5 star" percentage={84} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="4 star" percentage={9} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="3 star" percentage={4} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="2 star" percentage={2} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="1 star" percentage={1} />
          </View>
        </View>
        <Text style={styles.howWeCalculate}>How do we calculate ratings?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    minWidth: "80%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
    textAlign: "center",
  },
  totalWrap: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "#F5F8FF",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  amountText: {
    fontSize: 16,
    color: "#595B71",
    textAlign: "center",
  },
  howWeCalculate: {
    fontSize: 15,
    color: "#2A5BDA",
    textAlign: "center",
  },
  spacer: {
    marginBottom: 14,
  },
});
