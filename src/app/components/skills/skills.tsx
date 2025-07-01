"use client";
import React, { SyntheticEvent, useState } from "react";
import "./skills.css";
import Skill from "./skill/skill";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function skills() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="section">
      <h1>MY SKILLS</h1>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            backgroundColor: "#131111", // Background color of the tabs container
            color: "white",
            boxShadow: "none",
            "& .MuiTabs-indicator": {
              backgroundColor: "#554c8f", // Color of the selected tab indicator
            },
            "& .MuiTab-root": {
              fontFamily: "var(--font-oswald)",
              fontSize: "20px",
              color: "grey", // Inactive tab text color
            },
            "& .MuiTab-root.Mui-selected": {
              color: "white", // Active tab text color
            },
            "& .MuiTabs-flexContainer": {
              borderBottom: "1px solid #181818", // Customize bottom border
            },
          }}
        >
          <Tab label="Backend" {...a11yProps(0)} />
          <Tab label="Databases" {...a11yProps(1)} />
          <Tab label="Frontend" {...a11yProps(2)} />
          <Tab label="Version Control" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="skills-container">
          <div className="skills">
            <Skill
              name="Node JS"
              logo="/icons/nodejs-logo.svg"
              level="Advanced"
            />
            <Skill
              name="Next JS"
              logo="/icons/next-logo.svg"
              level="Beginner"
            />
            <Skill
              name="Python"
              logo="/icons/python-logo.svg"
              level="Intermediate"
            />
            <Skill name="REST" logo="/icons/api.png" level="Intermediate" />
          </div>
          <div className="skills">
            <Skill name="C#" logo="/icons/csharp-logo.svg" level="Advanced" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="skills-container">
          <div className="skills">
            <Skill
              name="PostgreSQl"
              logo="/icons/postgresql-logo.svg"
              level="Advanced"
            />
            <Skill
              name="MySQL"
              logo="/icons/mysql-logo.svg"
              level="Intermediate"
            />
            <Skill
              name="Oracle"
              logo="/icons/oracle-logo.svg"
              level="Intermediate"
            />
          </div>
          <div className="skills">
            <Skill name="NoSQL" logo="/icons/database.png" level="Beginner" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="skills-container">
          <div className="skills">
            <Skill name="React JS" logo="/icons/reactjs.svg" level="Advanced" />
            <Skill
              name="JavaScript"
              logo="/icons/js-logo.svg"
              level="Intermediate"
            />
            <Skill
              name="TypeScript"
              logo="/icons/ts-logo.svg"
              level="Advanced"
            />
          </div>
          <div className="skills">
            <Skill
              name="Xamarin"
              logo="/icons/xamarin-logo.svg"
              level="Intermediate"
            />
            <Skill
              name="Flutter"
              logo="/icons/flutter-logo.svg"
              level="Beginner"
            />
          </div>
          <div className="skills">
            <Skill
              name="Figma"
              logo="/icons/figma-logo.svg"
              level="Intermediate"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="skills-container">
          <div className="skills">
            <Skill name="Git" logo="/icons/git-logo.svg" level="Advanced" />
            <Skill
              name="GitHub"
              logo="/icons/github-logo.svg"
              level="Advanced"
            />
            <Skill
              name="GitLab"
              logo="/icons/gitlab-logo.svg"
              level="Intermediate"
            />
          </div>
        </div>
      </TabPanel>
    </div>
  );
}

export default skills;
