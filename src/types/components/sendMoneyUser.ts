type UserProp = {
  name: string;
  phone: string;
};
type SendMoneyUserViewProps = {
  user?: UserProp | null;
  index: number;
};

export { SendMoneyUserViewProps, UserProp };
