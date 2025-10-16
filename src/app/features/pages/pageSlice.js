import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pages",
  initialState: {
    title: "Router Sample App",
    author: "AKASH K",
    about: `I am Akash, a passionate student from 3rd Year BTech-IT. I enjoy exploring new technologies and building creative projects. My interests include web development, Java programming, and IoT systems. I have experience working with React, Spring Boot, and MySQL. I enjoy hackathons and technical workshops.`,
    products: [
      { id: 1, name: "Laptop", price: "$999", image: "/1.png" },
  { id: 2, name: "Smartphone", price: "$599", image: "/2.png" },
  { id: 3, name: "Headphones", price: "$199", image: "/5.png" },
  { id: 4, name: "Smartwatch", price: "$249", image: "/3.png" },
  { id: 5, name: "Tablet", price: "$499", image: "/4.png" },
  { id: 6, name: "Bluetooth Speaker", price: "$149", image: "/5.png" },
  { id: 7, name: "Gaming Mouse", price: "$79", image: "/1.png" },
  { id: 8, name: "Mechanical Keyboard", price: "$129", image: "/2.png" },
  { id: 9, name: "Monitor", price: "$299", image: "/3.png" },
  { id: 10, name: "Printer", price: "$199", image: "/4.png" },
  { id: 11, name: "Webcam", price: "$89", image: "/1.png" },
  { id: 12, name: "External Hard Drive", price: "$119", image: "/2.png" },
  { id: 13, name: "SSD 1TB", price: "$139", image: "/3.png" },
  { id: 14, name: "Router", price: "$99", image: "/4.png" },
  { id: 15, name: "Smart TV", price: "$899", image: "/5.png" },
  { id: 16, name: "Camera", price: "$699", image: "/1.png" },
  { id: 17, name: "Tripod", price: "$59", image: "/2.png" },
  { id: 18, name: "Microphone", price: "$129", image: "/3.png" },
  { id: 19, name: "VR Headset", price: "$399", image: "/4.png" },
  { id: 20, name: "Smart Light", price: "$49", image: "/5.png" },
  { id: 21, name: "Drone", price: "$799", image: "/1.png" },
  { id: 22, name: "Power Bank", price: "$39", image: "/2.png" },
  { id: 23, name: "USB Flash Drive", price: "$25", image: "/3.png" },
  { id: 24, name: "Graphics Card", price: "$599", image: "/4.png" },
  { id: 25, name: "CPU", price: "$499", image: "/5.png" },
  { id: 26, name: "Motherboard", price: "$259", image: "/1.png" },
  { id: 27, name: "RAM 16GB", price: "$89", image: "/2.png" },
  { id: 28, name: "Cooling Fan", price: "$35", image: "/3.png" },
  { id: 29, name: "Gaming Chair", price: "$189", image: "/4.png" },
  { id: 30, name: "Desk Lamp", price: "$45", image: "/5.png" }
    ],
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = pageSlice.actions;
export default pageSlice.reducer;
