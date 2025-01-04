import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type TabsParamList = {
  index: undefined;
  map: undefined;
};

export type TabsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, "index">,
  NativeStackNavigationProp<TabsParamList>
>;