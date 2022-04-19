import { ImageSourcePropType, StyleProp, ViewProps } from "react-native";
import { TRANSACTION_TYPE } from "../../utils/transactions";

export type TransactionItemProps = {
  name: string;
  image: ImageSourcePropType;
  type: TRANSACTION_TYPE;
  amount: string;
  index: number;
  style: StyleProp<ViewProps>;
};
