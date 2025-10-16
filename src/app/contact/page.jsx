"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContact, resetContact } from "../features/contact/contactSlice";

function Contact() {
  const dispatch = useDispatch();
  const { name, message } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    dispatch(setContact({ ...{ name, message }, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(resetContact());
  };

  return (
    <div id="di" style={{ padding: "10px" }}>
      <h2 >Feedback Form </h2>
      <label>Name</label><br />
      <input type="text" name="name" value={name} onChange={handleChange} />
      <br /><br />
      <label>Message</label><br />
      <textarea name="message" value={message} onChange={handleChange}></textarea>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Contact;
