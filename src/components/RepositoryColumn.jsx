import React from "react";
import { Text, View } from "react-native";

const RepositoryColumn = ({ number, title }) => {
  return (
    <View className="flex flex-col">
      <Text className="font-bold text-center">{number}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default RepositoryColumn;
