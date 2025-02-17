import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-center mb-8 text-gray-600">
          We'd love to hear from you! Reach out to us for any queries or support.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
