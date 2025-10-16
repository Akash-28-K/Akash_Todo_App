import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pages/pageSlice";
import todosReducer from "./todo/todoSlice";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    pages: pagesReducer,
    todos: todosReducer,
    contact: contactReducer
  }
});

export default store;
