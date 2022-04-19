import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import StatusBar from "../../components/StatusBar";
import ToolBar from "../../components/ToolBar";
import SendMoneyContainer from "../../containers/SendMoneyContainer";
import colors from "../../utils/color";

const SendMoney = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar color={colors.colorPrimaryDark}/>
      <ToolBar
        back
        style={{
          marginTop: insets.top,
        }}
      />
      <SendMoneyContainer />
    </>
  );
};

export default SendMoney;
