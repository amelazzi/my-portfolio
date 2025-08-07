"use client";

import React, { useRef, useState } from "react";
import TextField from "../text-field/text-field";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import Alert, { AlertColor } from "@mui/material/Alert";
import { CircularProgress, Snackbar } from "@mui/material";
import "./form.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const [alertStatus, setAlertStatus] = useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  function isValidEmail(email: string) {
    return EMAIL_REGEX.test(email);
  }

  const valideForm = () => {
    if (
      !nameRef.current!.value ||
      !emailRef.current!.value ||
      !messageRef.current!.value
    ) {
      return false;
    }
    return true;
  };

  function displayAlert(status: AlertColor, message: string) {
    setShowAlert(true);
    setAlertStatus(status);
    setAlertMessage(message);
  }

  const sendEmail = () => {
    if (!valideForm()) {
      displayAlert("error", "Please complete the missing information");
      return false;
    }

    if (!isValidEmail(emailRef.current!.value)) {
      displayAlert("error", "Please enter a valid email address");
      return false;
    }

    setIsLoading(true);
    const emailData = {
      sender: {
        name: "Portfolio contact",
        address: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      },
      recipient: {
        name: "Amel AZZI",
        address: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      },
      message: `<p><strong>Full name: </strong> ${nameRef.current!.value}</p>
      <p><strong>Email: </strong> ${emailRef.current!.value}</p>
      ${
        phoneRef.current!.value && (
          <p>
            <strong>Phone number: </strong> ${companyRef.current!.value}
          </p>
        )
      }
      ${
        companyRef.current!.value && (
          <p>
            <strong>Company: </strong> ${companyRef.current!.value}
          </p>
        )
      }
      <p><strong>Message: </strong> ${messageRef.current!.value}</p>`,
    };

    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        displayAlert("success", "Your email has been sent successfully!");
      })
      .catch((error) => {
        console.log("error: ", error);
        displayAlert("error", "Failed to send email. Please try again later.");
      })
      .finally(() => {
        nameRef.current!.value = "";
        phoneRef.current!.value = "";
        companyRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
        setIsLoading(false);
      });
  };

  return (
    <form>
      <div className="form-fields">
        <div className="form-information">
          <div className="form-container">
            <TextField
              label="Name"
              placeholder="type your full name"
              icon={<PersonIcon />}
              ref={nameRef}
              required={true}
            />
            <TextField
              label="Phone"
              placeholder="type phone number"
              icon={<PhoneIcon />}
              ref={phoneRef}
            />
          </div>
          <div className="form-container">
            <TextField
              label="Company"
              placeholder="company name"
              icon={<BusinessIcon />}
              ref={companyRef}
            />
            <TextField
              label="Email address"
              placeholder="type your email"
              icon={<EmailIcon />}
              ref={emailRef}
              required={true}
            />
          </div>
        </div>
        <TextField
          label="How can I help"
          placeholder="type your message here"
          icon={<ChatIcon />}
          multiline={true}
          ref={messageRef}
          required
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        {isLoading ? (
          <CircularProgress size={32} color="while" />
        ) : (
          "Send Message"
        )}
      </button>
      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        onClose={() => {
          setShowAlert(false);
        }}
      >
        <Alert className="alert" severity={alertStatus}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </form>
  );
}

export default Form;
