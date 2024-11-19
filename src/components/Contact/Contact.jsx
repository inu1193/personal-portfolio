import "./Contact.css";
import email from "../../assets/Emailemail.png";
import phone from "../../assets/Callcall.png";
import gps from "../../assets/Gpsgps.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const{theme}=useTheme();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d7e64799-33d4-47a9-a073-b0b8a6d38b42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="contact" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos="fade-right">
        Contact Me
      </span>
      <div className="conts">
        <div className="contactCol" data-aos="fade-right">
          <div className="cont1">
            <h3>Get in touch</h3>
            <p>
              I'd love to hear from you! Reach out with any questions, project
              inquiries, or collaboration ideas.
            </p>
          </div>
          <ul>
            <li>
              <a href="mailto:inayath2410@gmail.com">
                <img src={email} alt="email" />
                inayath2410@gmail.com
              </a>
            </li>
            <li>
              <img src={phone} alt="phone number" />
              +91 7019023285
            </li>
            <li>
              <img src={gps} alt="location"  />
              Vijaynagar, Bengaluru
            </li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2542610796136!2d77.52776642412009!3d12.955575265231332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e7055436bcd%3A0xa9dcfbd5f803bd12!2sVijaynagar%2C%20RPC%20Layout%2C%20Attiguppe%2C%20Bengaluru%2C%20Karnataka%20560040!5e0!3m2!1sen!2sin!4v1731642059906!5m2!1sen!2sin"
              
              style={{ border: 0,width:"500",
                height:"300" }}
              allowFullScreen=""
              // loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ul>
        </div>
        <div className="contactColA" data-aos="fade-left">
          <form onSubmit={onSubmit}>
            <div>
              <label>Your Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full name"
                required
              />
            </div>
            <div>
              <label>Your Mobile Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile number"
                required
              />
            </div>
            <div>
              <label>Your message here</label>
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="navBtn darkBtn">
              Submit
            </button>
          </form>
          <div className="res" style={{marginTop:'',color:'#009688'}}>{result}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
