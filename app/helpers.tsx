export const isUserDataNotEmpty = (data: UserData, key: string) => {
  return (
    Object.keys(data).includes(key) &&
    data[key as keyof UserData] !== "" &&
    data[key as keyof UserData] !== "none"
  );
};
