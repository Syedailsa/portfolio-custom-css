"use client"

import '@/app/styles/contactForm.css'
import { Send } from "lucide-react";
import React from "react";
import { useState } from "react";

function Contactform() {
  {
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
          className="form"
        >
          {/* Name and Email Fields */}
          <div className="form-section">
            <div className="name">
              <label className="label" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="email">
              <label className="label" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="label mt" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="input"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button mt"
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
