import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_wbjd1eo",
        "template_z038dyg",
        formRef.current as HTMLFormElement,
        "q0coeJo7Am3YgNXSZ"
      )
      .then(
        () => {
          setStateMessage("Your message has been successfully sent!");
          setIsSubmitting(false);
          setEmailValue("");
          setMessageValue("");
          formRef.current?.reset();
        },
        () => {
          setStateMessage("Something went wrong, please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Email me at{" "}
          <a href="mailto:jankovbojan4@gmail.com">jankovbojan4@gmail.com</a>
        </p>

        <div className="contact-form-container">
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              required
            ></textarea>

            <div className="button-div">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {stateMessage && <p className="state-message">{stateMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
