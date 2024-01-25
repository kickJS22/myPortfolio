import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { LanThContext } from "../Context/ContextProvider";
import { useContext } from "react";

export function Contact() {
  const { lan } = useContext(LanThContext)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_an3nv6i", "template_s8j3fog", form.current, "4YeUY9iCysCpXJNzQ");
    e.target.reset();
  };

  return (
    <div id="mailContact">
      <h1>{lan.email.title}</h1>
      <form ref={form} onSubmit={sendEmail}>
        <section>
          <label>{lan.email.name}</label>
          <input type="text" name="user_name"/>
        </section>
        <section>
          <label>Email:</label>
          <input type="email" name="user_email"/>
        </section>
        <section>
          <label>{lan.email.mes}</label>
          <textarea name="message"/>
        </section>
        <input id="sendEmail" type="submit" value={lan.email.send}/>
      </form>
    </div>
  );
}
