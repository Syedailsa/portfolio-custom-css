"use client"

import { Send } from "lucide-react";
import React from "react";
import { useState } from "react";

function Contactform() {
  {
    // State for form data (optional if you plan to process the form later)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    return (
      <div>
        <form
          action="https://formspree.io/f/mjkvbojj"
          method="POST"
          className="space-y-6"
        >
          {/* Name and Email Fields */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-themeblack text-themewhite rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-themeblack text-themewhite rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 bg-themeblack text-themewhite rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-themeblue hover:bg-teal-600 text-themewhite text-opacity-95 rounded-xl font-semibold py-3 transition duration-300 flex justify-center items-center gap-2"
          >
            Send Message
            <Send />
          </button>
        </form>
      </div>
    );
  }
}

export default Contactform;
