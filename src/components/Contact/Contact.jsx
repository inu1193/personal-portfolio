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

    formData.append("access_key", "7422b072-d0cf-4747-b6ec-36639647b7c8");

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
              <a href="mailto:yathish120420@gmail.com">
                <img src={email} alt="email" />
                yathish120420@gmail.com
              </a>
            </li>
            <li>
              <img src={phone} alt="phone number" />
              +91 8296302220
            </li>
            <li>
              <img src={gps} alt="location"  />
              Jayanagar East End, Bengaluru
            </li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8512408013685!2d77.59425217454579!3d12.917281016067934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151cd5d1e9bb%3A0x3beba853f26b4e4a!2sSri%20Navadurga%20PG%20for%20Gents!5e0!3m2!1sen!2sin!4v1717957141776!5m2!1sen!2sin"
              
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
