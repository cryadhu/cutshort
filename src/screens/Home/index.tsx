import React from "react";
import { useNavigation } from "@react-navigation/core";

import HomeContainer from "../../containers/HomeContainer";
import { NAVIGATION } from "../../navigation/helper";

const Home = () => {
  const navigation = useNavigation();

  const requestMoney = () => {
    navigation.navigate(NAVIGATION.NEW_REQUEST);
  };

  const sendMoney = () => {
    navigation.navigate(NAVIGATION.SEND_MONEY);
  };

  return <HomeContainer requestMoney={requestMoney} sendMoney={sendMoney} />;
};

export default Home;
