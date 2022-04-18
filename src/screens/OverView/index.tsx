import React from "react";
import { useNavigation } from "@react-navigation/native";

import OverViewContainer from "../../containers/OverViewContainer";
import { NAVIGATION } from "../../navigation/helper";

const OverView = () => {
  const navigation = useNavigation();

  const openHome = () => {
    navigation.navigate(NAVIGATION.HOME);
  };

  return <OverViewContainer openHome={openHome} />;
};

export default OverView;
