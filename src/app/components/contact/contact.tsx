import React from "react";
import Form from "./form/form";
import Coord from "./coord/coord";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h1> LET'S TALK TOGETHER </h1>
      <div className="contact">
        <div className="contact-information">
          <p>
            Thinking about a new project, an event to organize, or just want to
            contact me? Let's do it!
          </p>
          <div className="coords">
            <Coord
              icon={<EmailIcon />}
              name="Email"
              value="amelias.azzi@gmail.com"
            />
            <Coord icon={<PhoneIcon />} name="Phone" value="+33 669 57 35 82" />
            <Coord icon={<HomeIcon />} name="Address" value="Paris, France" />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
