"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

function About() {
  const { author, about } = useSelector((state) => state.pages);
  return (
    <div style={{ padding: "5px" ,alignItems: "center"}} id="di">
      <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}}>
  <h1 style={{ color: "#ff42b3ff" }}>{author}</h1>
  <Image src="/img.jpg" alt="akash" width={200} height={200} />
</div>

      <br/>
      <br/>
      <p>{about}</p>
      <br />
      <p>
        Apart from academics, I am passionate about technology trends and innovation.
I enjoy designing user-friendly web applications that make everyday tasks easier.
My curiosity pushes me to experiment with new tools and frameworks regularly.
I actively contribute to group projects and help my peers with programming concepts.
In my free time, I explore topics like AI, IoT, and cybersecurity to broaden my skills.
I believe that consistent practice and creativity lead to mastery in technology.
Learning from failures and improving with every challenge keeps me motivated.
My long-term goal is to create impactful software solutions for real-world problems.
I aspire to contribute to the tech industry through innovation and collaboration.
Every line of code I write brings me closer to becoming a professional developer.
      </p>
    </div>
  );
}

export default About;
