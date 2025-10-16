import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pages/pageSlice";
import usersReducer from "./users/userSlice";
import todosReducer from "./todo/todoSlice";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    pages: pagesReducer,
    users: usersReducer,
    todos: todosReducer,
    contact: contactReducer
  }
});

export default store;
