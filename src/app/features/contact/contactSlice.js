import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "",
    message: ""
  },
  reducers: {
    setContact(state, action) {
      const { name, message } = action.payload;
      state.name = name;
      state.message = message;
    },
    resetContact(state) {
      state.name = "";
      state.message = "";
    }
  }
});

export const { setContact, resetContact } = contactSlice.actions;
export default contactSlice.reducer;
