import { configureStore } from "@reduxjs/toolkit";

import subscriptionSlice from "./subscription-slice";

export const store = configureStore({
  reducer: {
    subscription: subscriptionSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
