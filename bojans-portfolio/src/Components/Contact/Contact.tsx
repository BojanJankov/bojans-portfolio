import "./Contact.css";

function Contact() {
  return (
    <section id="Contact">
      <h1>Contact</h1>
      <p>Contact me directly at jankovbojan4@gmail.com</p>
      <div className="contact-form-container">
        <form className="form">
          <input
            type="text"
            className="email-input"
            placeholder="Your email..."
          />
          <textarea
            className="message-input"
            placeholder="Your message here..."
          ></textarea>
          <div className="submit-form-button-div">
            <button className="submit-form-button">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
