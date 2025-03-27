import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

const projects = [
  {
    id: "cyber-ethics-framework",
    title: "Cyber Ethics Framework",
    description:
      "The Cyber Ethics Framework is a comprehensive tool designed to help organizations and government agencies evaluate the ethical implications of cybersecurity policies and technologies. This project bridges the gap between technical implementation and policy considerations, providing a structured approach to ethical decision-making in the digital realm.\n\nThe framework consists of a series of assessment modules that analyze various aspects of cybersecurity initiatives, including privacy implications, potential for bias, accessibility concerns, and societal impact. Each module generates a detailed report with recommendations for mitigating ethical risks while maintaining security objectives.\n\nAs the lead developer, I designed both the backend analysis engine using Python and the frontend visualization dashboard with React. The project incorporates research methodologies from both computer science and policy studies, creating a truly interdisciplinary approach to cyber ethics.",
    image: "/images/cyberbackground.jpg",
    technologies: ["Python", "React", "D3.js", "Policy Analysis", "Research Methods", "Flask", "PostgreSQL", "Docker"],
    dates: "January 2023 - May 2023",
    link: "https://attack.mitre.org/",
    github: "https://github.com",
    features: [
      "Interactive assessment modules for evaluating ethical implications",
      "Visualization dashboard for policy makers",
      "Customizable framework for different organizational contexts",
      "Comprehensive reporting with actionable recommendations",
      "Integration with existing policy management systems",
      "Case study database with historical examples",
      "Collaborative annotation and discussion tools",
      "Export capabilities for regulatory compliance",
    ],
  },
  {
    id: "secure-voting-system",
    title: "Secure Voting System Prototype",
    description:
      "The Secure Voting System Prototype demonstrates how blockchain technology can enhance democratic processes while maintaining security, privacy, and accessibility. This project was developed as part of my research into the intersection of technology and democratic institutions.\n\nThe system uses Ethereum smart contracts to create a transparent yet private voting mechanism that prevents fraud while protecting voter anonymity. Each vote is recorded on the blockchain with cryptographic verification, but personal identifiers are separated through a zero-knowledge proof system.\n\nThe frontend interface was designed with accessibility in mind, ensuring that the technology doesn't create barriers to participation. The system includes features like audit trails, voter verification, and resistance to various attack vectors including DDoS attempts and manipulation attacks.\n\nThis project won first place in the university's technology innovation competition and was presented to state election officials as a proof-of-concept for future voting systems.",
    image: "/images/votingbackground.jpg",
    technologies: [
      "Solidity",
      "Ethereum",
      "React",
      "Node.js",
      "Cryptography",
      "Web3.js",
      "MetaMask Integration",
      "Zero-knowledge Proofs",
    ],
    dates: "August 2022 - December 2022",
    link: "https://www.eac.gov/voters/election-security",
    github: "https://github.com",
    features: [
      "Blockchain-based vote recording and verification",
      "Anonymous voting with cryptographic security",
      "Transparent audit trail for election officials",
      "Voter verification without compromising privacy",
      "Resistance to common attack vectors",
      "Accessible interface design",
      "Real-time results tabulation",
      "Simulation mode for educational purposes",
    ],
  },
  {
    id: "privacy-policy-analyzer",
    title: "Privacy Policy Analyzer",
    description:
      "The Privacy Policy Analyzer is an AI-powered tool that helps users understand the privacy implications of the digital services they use. By analyzing privacy policies and terms of service agreements, the tool highlights potential privacy concerns and simplifies complex legal language into accessible summaries.\n\nUsing natural language processing and machine learning techniques, the analyzer identifies key privacy aspects such as data collection practices, third-party sharing, user rights, and compliance with regulations like GDPR and CCPA. The system assigns a privacy score and generates a detailed breakdown of potential concerns.\n\nThe backend is built with Python using state-of-the-art NLP libraries, while the frontend provides an intuitive interface for uploading documents or providing URLs to analyze. The tool also includes a browser extension that can automatically analyze policies as users browse the web.\n\nThis project was developed in collaboration with the university's law school and has been used as an educational tool in digital literacy programs.",
    image: "/images/privacybackground.jpg",
    technologies: ["Python", "NLP", "Machine Learning", "Flask", "React", "BERT", "spaCy", "MongoDB"],
    dates: "March 2022 - July 2022",
    link: "https://epic.org/issues/privacy-laws/united-states/",
    github: "https://github.com",
    features: [
      "AI-powered analysis of privacy policies and terms of service",
      "Simplified summaries of complex legal language",
      "Privacy scoring system with detailed breakdowns",
      "Identification of potential privacy concerns",
      "Regulatory compliance checking (GDPR, CCPA, etc.)",
      "Browser extension for real-time analysis",
      "Historical tracking of policy changes",
      "Comparative analysis between services",
    ],
  },
  {
    id: "cyber-threat-dashboard",
    title: "Cyber Threat Intelligence Dashboard",
    description:
      "The Cyber Threat Intelligence Dashboard is a real-time visualization tool designed to make complex cybersecurity information accessible to policy makers and non-technical stakeholders. The dashboard aggregates data from various threat intelligence sources and presents it in an intuitive interface that highlights trends, vulnerabilities, and potential impacts.\n\nThe system features interactive maps showing attack origins and targets, timeline visualizations of threat evolution, and sector-specific risk assessments. Policy makers can quickly understand the technical landscape without requiring deep cybersecurity expertise, enabling more informed decision-making about digital security policies.\n\nBuilt with a JavaScript frontend using D3.js for visualizations and a Node.js backend for data processing, the dashboard connects to multiple threat intelligence APIs to provide comprehensive coverage. The system includes customizable alerts and reporting features to keep stakeholders informed about emerging threats relevant to their areas of interest.\n\nThis project was developed during my internship on Capitol Hill and has been used in briefings with congressional staffers working on cybersecurity legislation.",
    image: "/images/cyberdashboardbackground.jpg",
    technologies: [
      "JavaScript",
      "D3.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Threat Intelligence APIs",
      "GeoJSON",
    ],
    dates: "September 2021 - February 2022",
    link: "https://us.norton.com/#",
    github: "https://github.com",
    features: [
      "Real-time visualization of cyber threats",
      "Interactive maps of attack origins and targets",
      "Sector-specific risk assessments",
      "Timeline visualization of threat evolution",
      "Policy implications summaries",
      "Customizable alerts for emerging threats",
      "Exportable reports for briefings",
      "API integration with major threat intelligence sources",
    ],
  },
  {
    id: "fishing-spot-finder",
    title: "Fishing Spot Finder App",
    description:
      "The Fishing Spot Finder is a mobile application that combines my technical skills with my passion for fishing. The app helps anglers find optimal fishing locations based on multiple data sources including weather conditions, fish species data, seasonal patterns, and user reports.\n\nUsers can discover new fishing spots based on their preferences, view real-time conditions including water temperature and clarity, and track their catches over time. The app includes features like fish species identification, regulations lookup by location, and a social component where anglers can share tips and photos.\n\nBuilt with React Native for cross-platform compatibility, the app uses Firebase for backend services and integrates with multiple APIs including weather services, fish and wildlife databases, and mapping services. Location data is enhanced with machine learning algorithms that predict fishing conditions based on historical patterns and current factors.\n\nThis personal project allowed me to apply my software development skills to create a practical tool for the fishing community while incorporating data analysis techniques to provide valuable insights to users.",
    image: "/images/fishingbackground.jpg",
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Weather API",
      "Node.js",
      "TensorFlow Lite",
      "Expo",
      "Redux",
    ],
    dates: "May 2021 - August 2021",
    link: "https://dwrapps.utah.gov/fishing/",
    github: "https://github.com",
    features: [
      "Location-based fishing spot recommendations",
      "Real-time weather and water conditions",
      "Fish species identification and information",
      "Fishing regulations lookup by location",
      "Catch logging and statistics",
      "Community tips and reports",
      "Offline maps for remote areas",
      "Predictive analytics for optimal fishing times",
    ],
  },
];

export default async function ProjectPage({ params }: Promise<{ params: { name: string } }>) {
  const { name } = await params;
  const project = projects.find((p) => p.id === name);

  if (!project) notFound();

  return <ProjectClient project={project} />;
}
