import React, { useState, useEffect } from "react";
import { db } from '../firebase/confi';
import icon1 from '../images/contact1.png'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" flex items-center text-center justify-center bg-blue bg-opacity-[50%] shadow-md rounded-[25px] px-8 pt-6 pb-8 mb-4 w-full md:w-1/2">
      <form className="w-[50%] mx-5" onSubmit={handleSubmit}>
        

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">Nombre</label>
          <input
            className="shadow appearance-none border rounded-[30px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none rounded-[30px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-500 text-sm font-bold mb-2">Mensaje</label>
          <textarea
            className="shadow appearance-none border rounded-[30px] w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Escribe tu mensaje/solicitud "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-center items-center">
        <div className=" w-[70%] items-center bg-blue justify-center text-center items-center rounded-[30px] cursor-pointer">
          <button
            className={`bg-blue hover:bg-blue-700 justify-center text-center items-center text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline ${loader ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            type="submit"
            disabled={loader}
          >
            Enviar
          </button>
        </div>
        </div>
      </form>
      <div className="px-10">
      <img src={icon1} alt="logo" className="inline-block mb-4 w-50" />
      </div>
    </div>
  );
};

export default Contact;
