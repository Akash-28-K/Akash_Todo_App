"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContact, resetContact } from "../features/contact/contactSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const { name: reduxName, message: reduxMessage } = useSelector((state) => state.contact);

  // Local state to avoid hydration mismatch
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Component has mounted: sync local state with Redux
    setName(reduxName);
    setMessage(reduxMessage);
    setMounted(true);
  }, [reduxName, reduxMessage]);

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    if (field === "name") setName(value);
    else setMessage(value);

    dispatch(setContact({ ...{ name, message }, [field]: value }));
  };

  const handleSubmit = () => {
    alert(`Thank you ${name}! Your message: ${message}`);
    dispatch(resetContact());
    setName("");
    setMessage("");
  };

  // Don't render until mounted to avoid hydration errors
  if (!mounted) return null;

  return (
    <div id="d" style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Feedback Form</h2>
      <label>Name</label><br />
      <input type="text" name="name" value={name} onChange={handleChange} style={{ width: "100%", padding: "5px" }} />
      <br /><br />
      <label>Message</label><br />
      <textarea name="message" value={message} onChange={handleChange} style={{ width: "100%", padding: "5px" }} />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: "8px 16px", cursor: "pointer" }}>Submit</button>
    </div>
  );
}
