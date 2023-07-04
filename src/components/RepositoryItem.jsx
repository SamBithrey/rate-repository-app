import React from "react";
import { Image, Text, View } from "react-native";
import RepositoryColumn from "./RepositoryColumn";

const RepositoryItem = ({ repository }) => {
  var {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  console.log(ownerAvatarUrl);
  if (stargazersCount > 1000) {
    stargazersCount = stargazersCount / 1000;
    stargazersCount = `${stargazersCount.toFixed(1)}k`;
  }
  if (reviewCount > 1000) {
    reviewCount = reviewCount / 1000;
    reviewCount = `${reviewCount.toFixed(1)}k`;
  }
  if (forksCount > 1000) {
    forksCount = forksCount / 1000;
    forksCount = `${forksCount.toFixed(1)}k`;
  }
  return (
    <View className="border border-solid border-gray-500 rounded-md p-5 bg-white">
      <View className="flex flex-row p-5">
        <View>
          <Image source={{ uri: ownerAvatarUrl }} className="h-16 w-16" />
        </View>
        <View className="flex flex-col pl-10">
          <View>
            <Text className="font-bold text-3xl">{fullName}</Text>
            <Text className="font-medium pt-2">{description}</Text>
          </View>
          <View className="flex-row pt-2">
            <Text className="bg-blue-500 w-fit rounded-md p-1 text-white font-bold">
              {language}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row h-10 justify-evenly">
        <RepositoryColumn title="Stars" number={stargazersCount} />
        <RepositoryColumn title="Forks" number={forksCount} />
        <RepositoryColumn title="Reviews" number={reviewCount} />
        <RepositoryColumn title="Rating" number={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
