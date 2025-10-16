import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pages/pageSlice";
import usersReducer from "./users/userSlice";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    pages: pagesReducer,
    users: usersReducer,
    contact: contactReducer
  }
});

export default store;
