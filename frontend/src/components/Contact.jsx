// import React from 'react'

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formValues);
    await axios
      .post("https://event-planner-4ccy.vercel.app/api/message/send", formValues, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>City ABC , XYZ</p>
        </div>
        <div className="item">
          <h4>Call us</h4>
          <p>+123 456 789</p>
        </div>
        <div className="item">
          <h4>Mail us</h4>
          <p>abc@xyz.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1467442939!2d66.49586577475172!3d25.191739990875543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710326579620!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="item">
          <form onSubmit={handleSubmit}>
            <h2>CONTACT</h2>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            <textarea
              rows={10}
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
