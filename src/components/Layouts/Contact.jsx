import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import Input from "../Elements/Input";

const Contact = () => {
  const form = useRef();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const clearFormAfterSubmit = () => {
    console.log("Clear Form After Submit");
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
    setTextInput("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sdxg4ts",
        "template_ubh95q5",
        form.current,
        "cp_QAurEychj_9lad"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent!");

          clearFormAfterSubmit();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          console.log("Failed to send email");
        }
      );
  };

  return (
    <Section id="contact">
      <TitleSection>Contact</TitleSection>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-8 w-full rounded-md p-4 shadow-md"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Input
          value={nameInput}
          type="text"
          name="user_name"
          placeholder="Name"
          text="Name"
          onChange={({ target: { value } }) => setNameInput(value)}
        />
        <Input
          value={emailInput}
          type="email"
          name="user_email"
          placeholder="Email"
          text="Email"
          onChange={({ target: { value } }) => setEmailInput(value)}
        />
        <Input
          value={messageInput}
          type="textarea"
          name="message"
          placeholder="Your Message"
          text="Message"
          onChange={({ target: { value } }) => setMessageInput(value)}
        />
        <button
          type="submit"
          value="Send"
          className="p-4 bg-secondary text-white rounded-lg"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {" "}
          Submit
        </button>
      </form>
    </Section>
  );
};

export default Contact;
