import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHtml5, FaDocker, FaLeaf, FaDatabase, FaProjectDiagram, FaUsers } from 'react-icons/fa'; // Example icons
import { SiMongodb, SiTailwindcss, SiJava, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Atchayaa",
  title: "Software Developer",
  email: "atchayaaa18@gmail.com",
  linkedin: "https://www.linkedin.com/in/atchayaa18/",
  github: "https://github.com/atchay18",
  resumeLink: "/AtchayaaResume.pdf", // Make sure your resume is in public/
  bio: "I’m a software developer who loves building reliable and efficient apps, mostly using Java, Spring Boot, and Docker. I enjoy solving problems, writing clean code, and exploring new tech to make things better. Always up for a challenge and a good learning experience.",
  shortBio: "Just someone who loves to try, learn, and build." // For Hero section
};

export const education = [
  {
    institution: "Sri Sai Ram Institute of Technology",
    location: "Chennai, India",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Sri_Sai_Ram_Institute_of_Technology_logo.png", // Replace with actual logo URL
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    duration: "AUG 2021 – MAY 2025",
    score: "CGPA: 8.34/10",
  },
  {
    institution: "Sri Ramakrishna Mission Vidyalaya Matriculation Higher Secondary School",
    location: "Chengalpattu, India",
    degree: "Class 12th",
    duration: "JUNE 2020 - MAY 2021",
    score: "87.12%",
  },
  {
    institution: "Sri Ramakrishna Mission Vidyalaya Matriculation Higher Secondary School",
    degree: "Class 10th",
    duration: "JUNE 2018 - MAR 2019",
    score: "88.4%",
  },
];

export const projects = [
  {
    title: "BioBin",
    tech: ["Robotics","Embedded Systems", "Python", "OpenCV"],
    description: "Developed an AI-powered waste segregation robot that sorts waste into biodegradable and non-biodegradable categories using computer vision. Implemented real-time image processing with OpenCV and integrated a microcontroller for automation.",
    date: "MAR 2024 – MAY 2025",
    githubLink: "https://github.com/https://github.com/atchay18/BioBin-Smart-Robotic-System-for-Biomedical-Waste-Management/AgriSure", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Robotics",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Campus Network",
    tech: ["Networking", "Routing", "Switching", "Cisco Packet Tracer", "IP Addressing"],
    description: "Designed and implemented a campus network project as part of Cisco’s virtual internship. Planned network topology, configured routers and switches, and ensured seamless connectivity. This hands-on experience strengthened my understanding of real-world networking concepts including IP addressing, routing, and network troubleshooting in an educational environment.",
    date: "MAY 2023 – JUNE 2024",
    githubLink: "https://github.com/aditiarya37/BuildBridge", // Replace with actual link
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "Spring Boot", icon: <FaLeaf /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Scrum", icon: <FaUsers /> },
    { name :"Java", icon: <SiJava />
    { name: "Python", icon: <SiPython />}
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Treasurer",
    organization: "IEEE SSIT Student Branch",
    duration: "MAY 2023 – APR 2025",
    points: [
      "Treasurer at IEEE Photonics Society; managed finances and conducted various technical and outreach events.",
      "Organized workshops, tech talks, and events to bridge the gap between students and emerging tech.",
    ],
  },
  {
    role: "Vice Chariman",
    organization: "IEEE SSIT Student Branch",
    duration: "MAY 2023 – DEC 2023",
    points: [
      "Actively led and supported chapter activities, collaborated with team members to organize tech events, webinars, and workshops.",
      "Helped promote photonics awareness on campus and provided students with exposure to real-world applications and industry insights.",
    ],
  },
  {
    role: "Joint Secretary",
    organization: "Praestantia - Department of ECE",
    duration: "Sept 2023",
    points: [
      "Led event coordination and managed logistics for a department-level tech fest.",
      "Worked with peers and faculty to ensure smooth operations and student engagement.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
