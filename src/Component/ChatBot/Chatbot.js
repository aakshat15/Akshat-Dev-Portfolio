import React, { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { Button } from "./Button";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="h-[90vh] w-full max-w-2xl mx-auto border rounded-2xl flex flex-col shadow-2xl p-6"
      style={{
        backgroundImage: "url('/path-to-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 flex-1 justify-center"
      >
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3 text-white/60" size={18} />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-white/60" size={18} />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
            required
          />
        </div>

        {/* Message */}
        <div className="relative">
          <Phone className="absolute left-3 top-3 text-white/60" size={18} />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 resize-none focus:outline-none focus:ring-1 focus:ring-white/40"
            required
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 bg-white/20 border border-white/20 text-black hover:bg-black/30 transition rounded-xl"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
