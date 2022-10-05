import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchQuery: (state, action) => {
      return action.payload;
    },
  },
});
export const searchReducer = searchSlice.reducer;
export const { searchQuery } = searchSlice.actions;
