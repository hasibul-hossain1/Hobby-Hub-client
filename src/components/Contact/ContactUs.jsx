import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-xl w-full p-8 shadow-lg bg-base-100 rounded-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

        <div className="divider">OR</div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:shanto22e@gmail.com" className="text-primary hover:text-secondary">
            <FaEnvelope />
          </a>
          <a href="https://github.com/ShantoD0" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/Shant0D" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
