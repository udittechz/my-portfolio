// =====================================================================
//  EDIT THIS FILE ONLY. Every section of the website reads from here.
//  Anything written as "[ ... ]" is a placeholder: replace it with your own details.
//  Empty strings ("") hide the related button, link or contact item.
// =====================================================================

export const personal = {
  name: "Udit Narayan Mandal",
  title: "Aspiring Software Developer",
  roles: ["Full-Stack Developer", "AI & ML Enthusiast", "Data Science Learner", "Python Developer"],
  tagline: "I turn ideas into clean, working software.",
  intro: "College student building web apps and data-driven tools with Python, JavaScript and Streamlit.",
  goals: "I want to grow into a full-stack developer who builds practical AI-powered products.",
  photo: "\profile.jpeg", // put your photo in /public and change this, e.g. "/me.jpg"
  resume: "", // e.g. "/resume.pdf" (file placed in /public). Empty hides the Resume button.
  siteTitleShort: "Udit",
};

export const about = {
  photo: "C:\Coding works\portfolio\portfolio\public\projects\placeholder.jpg", // optional second photo, e.g. "/about.jpg"
  paragraphs: [
    "I’m Udit Narayan Mandal, a student from Rajbiraj, Nepal, currently pursuing my B.Tech in Artificial Intelligence and Machine Learning in Tiruchirappalli, Tamil Nadu, India. I completed my higher secondary education at Arniko College, Biratnagar, Nepal, and moved to India with a clear goal—to build my future in the world of technology and AI. Coming from Nepal and adapting to a new place has taught me to be independent, open-minded, and ready to face new challenges. I’m curious about how technology can solve real-world problems, and I’m excited to learn, grow, and create something meaningful through AI and Machine Learning."
  ],
  interests: ["Artificial Intelligence", "Machine Learning", "Data Science", "Full-Stack Development"],
  strengths: ["Quick learner", "Problem solving", "[Add a strength]"],
  goals: "[Describe your career goals, e.g. the kind of role or team you want to join.]",
};

export const education = [
  {
    institution: "[SRM Institute Of Science & Technology]",
    degree: "[ B.Tech]",
    field: "[CSE/AIML]",
    period: "[2026 - 2030]",
    details: "[]",
  },
  {
    institution: "[Arniko Awasiya,Biratnagar,Nepal]",
    degree: "[High School]",
    field: "[Computer Science]",
    period: "[2023-2025]",
    details: "[]",
  },
  {
    institution: "[Kantipur secondary school,Biratnagar,Nepal]",
    degree: "[secoundary School]",
    field: "[SEE]",
    period: "[2019-2023]",
    details: "[]",
  }
  // Add more entries by copying the block above.
];

// type: "academic" | "award" | "certification" | "competition" | "workshop" | "hackathon" | "other"
export const achievements = [
  {
    title: "[Achievement or certification title]",
    issuer: "[Issuing organization]",
    date: "[Year]",
    type: "certification",
    description: "[One sentence about what it was for.]",
    image: "", // optional certificate image, e.g. "/certs/cert1.png"
    link: "", // optional verification URL. Empty hides the link.
  },
  
];

// Leave "image" empty to use the placeholder. Leave "live" or "github" empty to hide that button.
export const projects = [
  {
    title: "MoleculeVerse",
    description: "A chemoinformatics virtual laboratory in the browser for exploring and analysing molecules.",
    image: "",
    tech: ["Python", "Streamlit", "RDKit", "3Dmol.js", "Plotly", "ReportLab"],
    features: ["Molecule analysis with RDKit", "Interactive 3D molecule viewer", "PDF report export"],
    github: "",
    live: "",
  },
  {
    title: "VitalGuard AI",
    description: "A healthcare monitoring web app with a live dashboard, alerts and AI-generated insights.",
    image: "",
    tech: ["JavaScript", "HTML", "CSS", "AI"],
    features: ["Real-time health dashboard", "Smart alerts", "AI insights", "Demo mode"],
    github: "",
    live: "",
  },
];

// "level" is optional: "Beginner" | "Intermediate" | "Advanced". Delete it to hide the indicator.
export const skills = {
  "Programming Languages": [{ name: "C" }, { name: "Python" }, { name: "JavaScript" }],
  "Frontend Development": [{ name: "HTML" }, { name: "CSS" }],
  "Frameworks and Libraries": [{ name: "Streamlit" }],
  "Developer Tools": [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
  "Soft Skills": [{ name: "[Add a soft skill]" }],
};

export const contact = {
  email: "uditmandal314@gmail.com", // shown as a mailto link when filled
  phone: "+917782876717",
  location: "Tiruchirappali,Tamil Nadu,Indial",
};

// Only platforms with a URL are shown. Add the full https:// link.
export const socials = {
  linkedin: "",
  github: "",
  instagram: "",
  facebook: "",
  twitter: "",
  youtube: "",
  leetcode: "",
  hackerrank: "",
  geeksforgeeks: "",
};

export const navLinks = [
  ["home", "Home"], ["about", "About"], ["education", "Education"], ["achievements", "Achievements"],
  ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"],
];
