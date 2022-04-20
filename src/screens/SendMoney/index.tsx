import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import StatusBar from "../../components/StatusBar";
import ToolBar from "../../components/ToolBar";
import SendMoneyContainer from "../../containers/SendMoneyContainer";
import colors from "../../utils/color";

const SendMoney = () => {
  const insets = useSafeAreaInsets();

  const onSearch = (query: string) => {};

  return (
    <>
      <StatusBar color={colors.colorPrimaryDark} />
      <ToolBar
        back
        style={{
          marginTop: insets.top,
        }}
        onSearch={onSearch}
      />
      <SendMoneyContainer />
    </>
  );
};

export default SendMoney;
