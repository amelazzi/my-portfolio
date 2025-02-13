import React, { ReactElement, cloneElement, forwardRef } from "react";
import { InputLabel, Input, InputAdornment, FormControl } from "@mui/material";
import "./text-field.css";

interface TextFieldProps {
  label: string;
  placeholder: string;
  icon: ReactElement;
  multiline?: boolean;
  required?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, placeholder, icon, multiline = false, required = false }, ref) => {
    return (
      <div>
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
              width: "100%",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "lightgrey",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#3f51b5",
            },
            "& .MuiInput-input": {
              color: "white",
              fontSize: "14px",
            },
          }}
        >
          <InputLabel htmlFor="input-with-icon-adornment">
            <div className="input-label">
              {cloneElement(icon, {
                sx: { color: "#3f51b5", fontSize: "28px" },
              })}
              <p>
                {label} {required && <span style={{ color: "red" }}>*</span>}
              </p>
            </div>
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            placeholder={placeholder}
            multiline={multiline}
            startAdornment={<InputAdornment position="start" />}
            inputRef={ref}
            required={required}
          />
        </FormControl>
      </div>
    );
  }
);

export default TextField;
