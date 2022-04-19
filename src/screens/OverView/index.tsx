import React from "react";
import { useNavigation } from "@react-navigation/native";

import OverViewContainer from "../../containers/OverViewContainer";
import { NAVIGATION } from "../../navigation/helper";
import StatusBar from "../../components/StatusBar";

const OverView = () => {
  const navigation = useNavigation();

  const openHome = () => {
    navigation.navigate(NAVIGATION.HOME);
  };

  return (
    <>
      <StatusBar />
      <OverViewContainer openHome={openHome} />
    </>
  );
};

export default OverView;
