import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8">NANARFLIX</h1>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-bold mb-2">
              Nom:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-black font-bold mb-2"
            >
              Objet:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-black font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
