import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    preferences: "",
    "bean-type": "",
    quantity: "",
    "grind-option": "",
    deliveries: "",
  },
  disabled: "",
  navigatedItem: "",
  isModalShown: false,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    changeData(state, action) {
      const field:
        | "preferences"
        | "bean-type"
        | "quantity"
        | "grind-option"
        | "deliveries" = action.payload.field;
      state.userData[field] = action.payload.value;

      if (state.userData.preferences === "Capsule") {
        state.userData["grind-option"] = "none";
        state.disabled = "grind-option";
      } else {
        state.disabled = "";
      }
    },
    showModal(state) {
      state.isModalShown = true;
    },
    hideModal(state) {
      state.isModalShown = false;
    },
    setNavigatedItemitem(state, action) {
      state.navigatedItem = action.payload;
    },
  },
});

export const subscriptionActions = subscriptionSlice.actions;
export default subscriptionSlice;
