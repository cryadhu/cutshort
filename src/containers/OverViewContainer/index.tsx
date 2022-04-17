import React from "react";
import { ImageBackground, Text, View } from "react-native";

import Images from "../../../assets/images";
import Button from "../../components/Button";
import Indicator from "../../components/Indicator";
import IntroItem from "../../components/IntroItem";
import styles from "./style";

const OverViewContainer = (props) => {
  return (
    <ImageBackground source={Images.intro} style={styles.root}>
      <View style={styles.viewPagerContainer}>
        <Indicator length={3} currentItem={0} style={styles.indicator} />
        <IntroItem
          title="Transfer That Is Safe"
          description="You have nothing to be scared about, we got you covered."
          style={styles.introItem}
        />
        <Button title="Start banking" titleStyle={styles.startBanking}/>
      </View>
    </ImageBackground>
  );
};

export default OverViewContainer;
