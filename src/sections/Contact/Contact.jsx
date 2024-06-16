// import styles from "./ContactStyle.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "../../hooks/AlertContext";
import { useTheme } from "../../common/ThemeContext";

const Contact = () => {
  // const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  console.log("THEME", theme);
  const { showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kishan",
          from_email: form.email,
          to_email: "mishra.kishan1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        window.setTimeout(() => {
          hideAlert();
        }, 5000);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        showAlert({
          show: true,
          text: "Oops! I didn't receive your message.",
          type: "danger",
        });
        window.setTimeout(() => {
          hideAlert();
        }, 5000);
      });
  };

  const labelClass = `${
    theme == "dark" ? "text-white" : "text-black-500"
  } font-semibold`;

  return (
    <section
      id="contact"
      className="relative flex lg:flex-row flex-col max-container"
    >
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h3 className="subhead-text">Get in Touch</h3>
        <form
          className="w-full flex flex-col gap-7 mt-5"
          onSubmit={handleSubmit}
        >
          <label className={labelClass}>
            Name
            <input
              type="text"
              name="name"
              autoComplete="off"
              className="input"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>

          <label className={labelClass}>
            Email
            <input
              type="text"
              name="email"
              className="input"
              autoComplete="off"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>

          <label className={labelClass}>
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Looking to add top talent to your team? Shoot me an email."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
