import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./correo.css";
import aqui from "./grifo.png";

export const Correo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jn40vb8",
        "template_adasgum",
        form.current,
        "dkt0nyBNDtwZB1fvR"
      )
      .then(
        (result) => {
          // Clear all input field values
          form.current.reset();

          // Success toast message
          Swal.success(
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Correo enviado satisfactoriamente",
              showConfirmButton: false,
              timer: 1500,
            })
          );
        },
        (error) => {
          Swal.error(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="Acerca" id="Contact">
        Contactame
      </h1>
      <div class="flip-card1">
        <div class="flip-card-inner1">
          <div class="flip-card-front1">
            <h2>Contactame</h2>
            <img className="Aqui" src={aqui} alt="" />
          </div>
          <div class="flip-card-back1">
            <div class="flip1">
              <div class="content1">
                <div class="back1">
                  <div className="containerEmail">
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Nombre"
                        required
                        className="border border-slate-600 p-3 rounded"
                      />
                      <label className="titulos">Email</label>
                      <input
                        type="email"
                        name="user_email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        placeholder="Correo"
                        required
                        className="border border-slate-600 p-3 rounded"
                      />
                      <label className="titulos">Message</label>

                      <textarea
                        type="text"
                        name="message"
                        placeholder="Mensaje"
                        className="border border-slate-600 p-3 rounded h-44 input2"
                        required
                      ></textarea>
                      <div>
                        <button className="send" onClick={Swal.success}>
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
