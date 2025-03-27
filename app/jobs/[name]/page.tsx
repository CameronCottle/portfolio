import { notFound } from "next/navigation";
import JobClient from "./JobClient";

// Sample jobs data
const jobs = [
  {
    id: "technova-developer",
    title: "Full Stack Developer",
    company: "TechNova Solutions",
    logo: "/images/technova.webp",
    location: "Logan, UT",
    type: "Full-time",
    description:
      "As a Full Stack Developer at TechNova Solutions, I work on developing secure web applications with a strong focus on implementing cybersecurity best practices. My role involves both frontend and backend development, with an emphasis on creating robust, secure, and scalable solutions for enterprise clients.\n\nOn the frontend, I develop responsive and accessible user interfaces using React and modern JavaScript frameworks. I implement security features such as proper authentication flows, input validation, and protection against common web vulnerabilities like XSS and CSRF attacks.\n\nOn the backend, I design and develop RESTful APIs and microservices using Node.js, with a focus on secure coding practices. I work with AWS cloud services to deploy and maintain applications, implementing proper access controls and security configurations.\n\nI also participate in security code reviews, vulnerability assessments, and collaborate with the security team to ensure our applications meet industry standards and compliance requirements. This position has allowed me to combine my technical development skills with my interest in cybersecurity, providing valuable experience that aligns with my career goals in cyber policy.",
    dates: "January 2022 - Present",
    skills: [
      "React",
      "Node.js",
      "AWS",
      "Security Implementation",
      "Full Stack Development",
      "API Design",
      "DevOps",
      "Secure Coding",
    ],
    responsibilities: [
      "Develop and maintain secure web applications for enterprise clients",
      "Implement frontend interfaces using React and modern JavaScript frameworks",
      "Design and develop backend services and APIs with Node.js",
      "Deploy and configure applications on AWS infrastructure",
      "Conduct security code reviews and vulnerability assessments",
      "Implement authentication, authorization, and data protection measures",
      "Collaborate with cross-functional teams on product development",
      "Stay current with emerging security threats and mitigation strategies",
    ],
  },
  {
    id: "capitol-hill-intern",
    title: "Legislative Intern",
    company: "U.S. Senate Committee on Homeland Security",
    logo: "/images/captiol.webp",
    location: "Washington, D.C.",
    type: "Internship",
    description:
      "During my internship with the U.S. Senate Committee on Homeland Security, I assisted with research on cybersecurity policy and digital privacy legislation. This experience provided invaluable insight into the legislative process and the challenges of developing effective technology policy at the federal level.\n\nMy primary responsibilities included conducting research on emerging cybersecurity threats and their implications for national security, analyzing proposed legislation related to digital privacy and data protection, and preparing briefing materials for committee hearings. I also attended hearings and briefings, taking detailed notes and summarizing key points for committee staff.\n\nOne of my significant contributions was developing a technical explainer document that translated complex cybersecurity concepts into accessible language for policymakers without technical backgrounds. This document was used to brief committee members before a hearing on critical infrastructure protection.\n\nThis internship allowed me to apply my technical knowledge in a policy context and strengthened my understanding of how technology policy is developed and implemented at the federal level. The experience confirmed my interest in pursuing a career at the intersection of cybersecurity and policy.",
    dates: "May 2023 - August 2023",
    skills: [
      "Policy Research",
      "Legislative Analysis",
      "Technical Writing",
      "Cybersecurity Policy",
      "Government Relations",
      "Stakeholder Communication",
      "Public Policy",
      "National Security",
    ],
    responsibilities: [
      "Conducted research on cybersecurity threats and policy implications",
      "Analyzed proposed legislation related to digital privacy and data protection",
      "Prepared briefing materials for committee hearings and meetings",
      "Developed technical explainer documents for non-technical policymakers",
      "Attended and summarized congressional hearings and briefings",
      "Assisted with responses to constituent inquiries on technology issues",
      "Collaborated with committee staff on policy analysis projects",
      "Monitored news and developments in cybersecurity and technology policy",
    ],
  },
  {
    id: "cyber-research-assistant",
    title: "Cybersecurity Research Assistant",
    company: "Utah State University",
    logo: "/images/usu.webp",
    location: "Logan, UT",
    type: "Part-time",
    description:
      "As a Cybersecurity Research Assistant at Utah State University, I worked with faculty in the Computer Science department on research projects examining the intersection of cybersecurity, ethics, and policy. This position allowed me to develop my research skills while exploring topics directly related to my academic and career interests.\n\nMy responsibilities included conducting literature reviews on emerging cybersecurity threats and their policy implications, collecting and analyzing data for academic studies, and assisting with the preparation of research papers and grant proposals. I also helped develop and implement research methodologies for studying user behavior in response to security policies.\n\nA key project I contributed to examined the effectiveness of various cybersecurity awareness training approaches in organizational settings. I helped design survey instruments, analyze response data, and develop recommendations for improving security training programs based on our findings.\n\nThis research experience enhanced my understanding of how academic research can inform policy development and provided me with valuable skills in data analysis and research methodology. The position also allowed me to build relationships with faculty mentors who have supported my academic and professional development.",
    dates: "September 2021 - December 2022",
    skills: [
      "Research Methods",
      "Data Analysis",
      "Cybersecurity",
      "Academic Writing",
      "Python",
      "Statistical Analysis",
      "Literature Review",
      "Survey Design",
    ],
    responsibilities: [
      "Conducted literature reviews on cybersecurity threats and policy responses",
      "Collected and analyzed data for academic research projects",
      "Assisted with the preparation of research papers and grant proposals",
      "Developed survey instruments and research methodologies",
      "Analyzed research data using Python and statistical tools",
      "Contributed to presentations for academic conferences",
      "Maintained research databases and documentation",
      "Collaborated with faculty and graduate students on research initiatives",
    ],
  },
  {
    id: "tech-policy-fellow",
    title: "Technology Policy Fellow",
    company: "Digital Rights Foundation",
    logo: "/images/digitalrights.webp",
    location: "Remote",
    type: "Fellowship",
    description:
      "As a Technology Policy Fellow at the Digital Rights Foundation, I participated in a competitive fellowship program focused on digital rights and technology policy. This experience allowed me to explore the legal and ethical dimensions of technology while developing practical skills in policy analysis and advocacy.\n\nDuring the fellowship, I contributed to policy briefs on topics including data privacy legislation, algorithmic accountability, and digital surveillance. I also helped develop public education materials explaining complex technology policy issues in accessible language for non-technical audiences.\n\nA significant project I worked on was analyzing the privacy implications of proposed state-level data protection legislation. I conducted comparative analysis with existing frameworks like GDPR and CCPA, identifying strengths and weaknesses in the proposed approach. My analysis was incorporated into the organization&apos;s formal comments submitted during the public consultation period.\n\nThis fellowship broadened my understanding of digital rights issues and provided practical experience in translating technical knowledge into policy recommendations. It reinforced my interest in working at the intersection of technology and policy, particularly in areas related to privacy and data protection.",
    dates: "September 2022 - December 2022",
    skills: [
      "Policy Analysis",
      "Digital Rights",
      "Privacy Advocacy",
      "Public Education",
      "Stakeholder Engagement",
      "Legal Research",
      "Comparative Analysis",
      "Technical Writing",
    ],
    responsibilities: [
      "Contributed to policy briefs on data privacy and digital rights issues",
      "Analyzed proposed legislation and regulatory frameworks",
      "Developed public education materials on technology policy topics",
      "Participated in working groups on specific policy initiatives",
      "Conducted comparative analysis of different regulatory approaches",
      "Assisted with drafting formal comments for public consultations",
      "Engaged with stakeholders including policymakers and advocacy groups",
      "Represented the organization at virtual policy forums and events",
    ],
  },
  {
    id: "junior-developer",
    title: "Junior Web Developer",
    company: "Mountain West Digital",
    logo: "/images/mountainwest.webp",
    location: "Salt Lake City, UT",
    type: "Part-time",
    description:
      "As a Junior Web Developer at Mountain West Digital, I gained my first professional experience in software development while still early in my computer science studies. This role provided a foundation in web development practices and client-focused project work.\n\nMy responsibilities included developing and maintaining websites for local businesses using HTML, CSS, JavaScript, and PHP. I implemented responsive designs to ensure optimal user experience across different devices and integrated basic security features to protect client websites from common vulnerabilities.\n\nI worked on a variety of projects, from simple informational websites to more complex e-commerce platforms built on WordPress and WooCommerce. This diversity of projects allowed me to develop a broad skill set and adaptability to different client needs and technical requirements.\n\nThis position taught me valuable lessons about the software development lifecycle, client communication, and the importance of security considerations in even small-scale web projects. The experience confirmed my interest in pursuing software development professionally and sparked my curiosity about cybersecurity, which later became a major focus of my studies and career.",
    dates: "June 2020 - August 2021",
    skills: [
      "JavaScript",
      "HTML/CSS",
      "PHP",
      "WordPress",
      "Responsive Design",
      "Client Communication",
      "Web Security",
      "Problem Solving",
    ],
    responsibilities: [
      "Developed and maintained websites for local businesses",
      "Implemented responsive designs for cross-device compatibility",
      "Integrated basic security features to protect against common vulnerabilities",
      "Customized WordPress themes and plugins to meet client requirements",
      "Performed website maintenance and updates",
      "Collaborated with designers to implement visual elements",
      "Assisted clients with content management and website updates",
      "Documented development processes and website features for clients",
    ],
  },
];

type JobProps = {
  params: Promise<{ name: string }>
}

export default async function JobPage({ params }: JobProps) {
  const { name } = await params
  const job = jobs.find((p) => p.id === name)

  if (!job) notFound()

  return <JobClient job={job} />
}

