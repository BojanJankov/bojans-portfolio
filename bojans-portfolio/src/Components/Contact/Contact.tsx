import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

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
          setStateMessage("Message sent!");
          setIsSubmitting(false);
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
        <form className="form" onSubmit={sendEmail}>
          <input
            type="text"
            className="user-input"
            name="from_name"
            placeholder="Your name..."
          />
          <input
            type="text"
            className="email-input"
            name="user_email"
            placeholder="Your email..."
          />
          <textarea
            name="message"
            className="message-input"
            placeholder="Your message here..."
          ></textarea>
          <div className="submit-form-button-div">
            {stateMessage && <p>{stateMessage}</p>}
            <button
              className="submit-form-button"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
