import React from "react";
import ContactForm from "./ContactForm";
import DescriptionContact from "./DescriptionContact";
import "./ContactCSS/Contact.css";

function Contact() {
  return (
    <main className="main_contact">
      <ContactForm />
      <DescriptionContact />
    </main>
  );
}

export default Contact;
