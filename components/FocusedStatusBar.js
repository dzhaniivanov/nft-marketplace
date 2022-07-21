import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

import { COLORS, NFTData } from "../constants";


const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
