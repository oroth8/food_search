import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useId from "../hooks/useId";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [getResultById, result, errorMsg] = useId();

  useEffect(() => {
    getResultById(id);
  }, []);

  console.log(result);

  if (!result) {
    return null;
  }

  return (
    <>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
      <Text>{result.is_open_now === true ? "Open" : "Closed"}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsShowScreen;
