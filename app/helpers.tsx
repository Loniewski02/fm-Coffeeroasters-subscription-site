export const isUserDataNotEmpty = (data: UserData, key: string) => {
  return (
    Object.keys(data).includes(key) &&
    data[key as keyof UserData] !== "" &&
    data[key as keyof UserData] !== "none"
  );
};

export const checkDataValue = (data: UserData, key: string, value: string) => {
  return (
    Object.keys(data).includes(key) && data[key as keyof UserData] !== value
  );
};
