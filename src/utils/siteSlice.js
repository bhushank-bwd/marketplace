import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    name: "MarketPlace",
  },
});
export default siteSlice.reducer;
