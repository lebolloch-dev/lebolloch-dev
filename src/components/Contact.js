import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // sendFeedback("***TEMPLAYE_ID***", {
    //   name,
    //   email,
    //   subject,
    //   message,
    // });
  };
  return (
    <form>
      <div className="contact-groupe-info">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          onChange={(e) => setName(e.target.value)}
          required="required"
          value={name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail *"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required="required"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Message *"
        required="required"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <div className="button-A" onClick={handleSubmit}>
        <span></span>
        <h4>Send message !</h4>
      </div>
      <div className="form-message"></div>
    </form>
  );
};

export default Contact;
