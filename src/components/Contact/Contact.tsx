import React, { useState } from "react";
import "./Contact.css";
import { toast } from "sonner";

export function Contact() {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const resetForm = () => {
    setValues({
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(
      async () => {
          const res = await fetch('http://localhost:5000/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });



          const data = await res.json();
          console.log(data)
      },
      {
        loading: 'Enviando correo...',
        success: () => {
          resetForm()
          return  '¡Correo enviado con éxito!'
        },
        error: 'Hubo un error al enviar el correo',
      }
    
    )
  }
  

  return (
    <>
      <section className="container-contact" id="contact">
        <div className="contact" style={{ position: "relative" }}>
          <div
            className="decorator"
            style={{ top: "6rem", left: "8rem", filter: "blur(100px)" }}
          ></div>

          <div
            className="decorator"
            style={{ bottom: "2rem", right: "8rem", filter: "blur(100px)" }}
          ></div>

          <h2 className="contact-title">Contact</h2>

          <form
            action=""
            className="contact-form blur-bg"
            method="POST"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <input
                type="email"
                placeholder="Email..."
                name="email"
                onChange={handleChange}
                value={values.email}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="subject..."
                name="subject"
                onChange={handleChange}
                value={values.subject}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                rows={5}
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Message..."
                required
              ></textarea>
            </div>

            <input type="submit" className="contact-btn" />
          </form>
        </div>
      </section>
    </>
  );
}
