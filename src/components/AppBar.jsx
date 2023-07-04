import { Text, View, Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const AppBar = () => {
  return (
    <View
      className={`w-full bg-black align-bottom p-5 flex flex-row pt-[${Constants.statusBarHeight}]`}
    >
      <ScrollView horizontal>
        <Pressable className="ml-4">
          <Link to="/">
            <Text className="text-white font-bold text-lg">Repositories</Text>
          </Link>
        </Pressable>
        <Pressable className="ml-4">
          <Link to="/signin">
            <Text className="text-white font-bold text-lg">Sign In</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
