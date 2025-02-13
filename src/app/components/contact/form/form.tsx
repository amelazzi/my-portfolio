"use client";

import React from "react";
import TextField from "../text-field/text-field";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import "./form.css";

function Form() {
  return (
    <form>
      <div className="form-information">
        <div className="form-container">
          <TextField
            label="Name"
            placeholder="type your full name"
            icon={<PersonIcon />}
            required={true}
          />
          <TextField
            label="Phone"
            placeholder="type phone number"
            icon={<PhoneIcon />}
          />
        </div>
        <div className="form-container">
          <TextField
            label="Company"
            placeholder="company name"
            icon={<BusinessIcon />}
          />
          <TextField
            label="Email address"
            placeholder="type your email"
            icon={<EmailIcon />}
            required={true}
          />
        </div>
      </div>
      <TextField
        label="How can I help"
        placeholder="type your message here"
        icon={<ChatIcon />}
        multiline={true}
        required
      />
      <button>Send Message</button>
    </form>
  );
}

export default Form;
