import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_wbjd1eo",
        "template_z038dyg",
        e.target,
        "q0coeJo7Am3YgNXSZ"
      )
      .then(
        (result) => {
          console.log(result);
          setStateMessage("Your message is successfully send!");
          setIsSubmitting(false);
          setEmailValue("");
          setMessageValue("");
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h1>Contact</h1>
      <p>Contact me directly at jankovbojan4@gmail.com</p>
      <div className="contact-form-container">
        <form
          className="form"
          onSubmit={
            messageValue !== "" && emailValue !== "" ? sendEmail : undefined
          }
        >
          <input
            type="text"
            className="user-input"
            name="from_name"
            placeholder="Your name..."
          />
          <input
            type="email"
            className="email-input"
            name="user_email"
            placeholder="Your email..."
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
          <textarea
            name="message"
            className="message-input"
            placeholder="Your message here..."
            value={messageValue}
            onChange={(e) => {
              setMessageValue(e.target.value);
            }}
          ></textarea>
          <div className="submit-form-button-div">
            <button
              className="submit-form-button"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
