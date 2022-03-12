import React from 'react';
import { View } from 'react-native';
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

  const screenWidth = Dimensions.get("window").width;
  const Grafico = () => {
    return (
  <View>
  <LineChart
    data={{
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [
        {
          data: [
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5
          ]
        }
      ]
    }}
    width={(Dimensions.get("window").width) - 150} // from react-native
    height={215}
    yAxisLabel="R$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#FF781F",
      backgroundGradientFrom:"#363636",
      backgroundGradientTo: "#363636",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 10
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 10
    }}
  />
</View>
    )}

export default Grafico