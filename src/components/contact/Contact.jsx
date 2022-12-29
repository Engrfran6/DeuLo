import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      contactIcon: <AiOutlineMail />,
      contactTitle: "email",
      contactMeans: "engrfran6uloho@gmail.com",
      contactApi: "mailto:engrfran6uloho@gmail.com",
    },

    {
      id: 2,
      contactIcon: <BsMessenger />,
      contactTitle: "Mesenger",
      contactMeans: "@fran6efe",
      contactApi: "https://web.facebook.com/Engrfran6",
    },

    {
      id: 3,
      contactIcon: <BsWhatsapp />,
      contactTitle: "Whatsapp",
      contactMeans: "+234-7056246872",
      contactApi: "https://api.whatsapp.com/send?phone=2347038689224",
    },
  ];

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_k8elero",
      "template_komzkjh",
      form.current,
      "knq7Q0BAOEuhUq-of"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_apps">
          {contacts.map(
            ({ id, contactIcon, contactTitle, contactMeans, contactApi }) => {
              return (
                <div key={id} className="contact_me">
                  <icon className="contact_icon">{contactIcon}</icon>
                  <h4 className="contact_title">{contactTitle}</h4>
                  <h5 className="contact_means">{contactMeans}</h5>
                  <a href={contactApi} className="contact_api" target="_blank">
                    Send a message
                  </a>
                </div>
              );
            }
          )}
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input
            className="contact_input_field"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="contact_input_field"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact_input_field"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "0 auto", marginTop: "1.5rem" }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
