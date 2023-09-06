import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactCSS/ContactForm.css";

function ContactForm() {
  // Definindo um estado para armazenar os valores dos campos do formulario.
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Função para lidar com o envio do formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    // Parâmetros que serão enviados para o serviço de email.
    const templateParams = {
      from_name: contact.name,
      message: contact.message,
      email: contact.email,
    };

    // Envia o email usando a biblioteca emailjs
    emailjs
      .send(
        "service_uik5sea",
        "template_e7ap0ec",
        templateParams,
        "5yaJVLhrl40ACrMS4"
      )
      .then((res) => {
        console.log("E-MAIL ENVIADO", res.status, res.text);

        // Limpa os campos do formulário após o envio bem-sucedido.
        setContact({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("ERRO:", err);
      });
  };
  // Função para atulizar o estado quando os campos do formulário são alterados.
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <section className="section_form_contact">
      <article className="article_form_contact">
        <h5>Say hi to LC - Code</h5>
        <h2>Contact Us</h2>
      </article>
      <form className="form_contact" onSubmit={handleSubmit}>
        <p>
          Feel free to contact us and we will get back to you as soon as we can.
        </p>
        <input
          type="text"
          required
          autoComplete="none"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          required
          autoComplete="none"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
        <input
          type="text"
          required
          autoComplete="none"
          placeholder="Message"
          name="message"
          value={contact.message}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
