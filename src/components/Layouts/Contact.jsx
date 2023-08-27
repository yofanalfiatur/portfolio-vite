import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import Input from "../Elements/Input";

const Contact = () => {
  const form = useRef();

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
      >
        <Input type="text" name="user_name" placeholder="Name" text="Name" />
        <Input
          type="email"
          name="user_email"
          placeholder="Email"
          text="Email"
        />
        <Input
          type="textarea"
          name="message"
          placeholder="Your Message"
          text="Message"
        />
        <button
          type="submit"
          value="Send"
          className="p-4 bg-secondary text-white rounded-lg"
        >
          {" "}
          Submit
        </button>
      </form>
    </Section>
  );
};

export default Contact;
