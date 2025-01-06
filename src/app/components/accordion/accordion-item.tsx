"use client";
import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./accordion-item.css";

export function AccordionItem({
  title,
  startDate,
  endDate,
  subTitle,
  location,
  children,
  details,
  stacks,
}: {
  title: string;
  startDate: string;
  endDate: string;
  subTitle: string;
  location: string;
  children?: ReactNode;
  details?: string[];
  stacks?: string[];
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      disableGutters
      sx={{
        width: "100%",
        backgroundColor: "var(--dark-grey-color)",
        color: "white",
      }}
    >
      <AccordionSummary
        onClick={handleExpandClick}
        expandIcon={
          expanded ? (
            <RemoveIcon sx={{ color: "orange" }} />
          ) : (
            <AddIcon sx={{ color: "orange" }} />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: "0px",
        }}
      >
        <Typography
          component="span"
          sx={{ width: "100%", paddingRight: "32px", fontSize: "24px" }}
        >
          <div className="title">
            <h5>{title}</h5>
            <h5>
              {startDate} - {endDate}
            </h5>
          </div>
          <div className="title">
            <h6> {subTitle} </h6>
            <h6>{location}</h6>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ color: "grey", paddingTop: "0px", fontSize: "18px" }}
      >
        {children}
        {details?.map((detail, index) => (
          <p key={index}>
            {details.length > 1 && "-"} {detail}
          </p>
        ))}
        <p className="stack">
          {stacks?.map((stack, index) =>
            index === stacks.length - 1 ? `#${stack}` : `#${stack}|`
          )}
        </p>
      </AccordionDetails>
    </Accordion>
  );
}
