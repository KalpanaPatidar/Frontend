export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  sector: string;
  skills: string[];
  description: string;
  applicants: number;
  postedDate: string;
}

export const mockInternships: Internship[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "Bangalore",
    duration: "6 months",
    stipend: "₹15,000/month",
    sector: "Information Technology",
    skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
    description: "Work on cutting-edge web applications using modern frontend technologies. Learn from experienced developers and contribute to real projects.",
    applicants: 245,
    postedDate: "2024-01-15"
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "Creative Agency",
    location: "Mumbai",
    duration: "3 months",
    stipend: "₹8,000/month",
    sector: "Marketing & Communications",
    skills: ["Social Media", "Content Writing", "SEO", "Analytics"],
    description: "Join our dynamic marketing team to learn digital marketing strategies, social media management, and content creation.",
    applicants: 189,
    postedDate: "2024-01-20"
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "DataTech Labs",
    location: "Hyderabad",
    duration: "6 months",
    stipend: "₹20,000/month",
    sector: "Information Technology",
    skills: ["Python", "Machine Learning", "SQL", "Statistics", "Pandas"],
    description: "Work with large datasets, build predictive models, and gain hands-on experience in data analysis and machine learning.",
    applicants: 356,
    postedDate: "2024-01-10"
  },
  {
    id: "4",
    title: "UI/UX Design Intern",
    company: "Design Studio Pro",
    location: "Delhi",
    duration: "4 months",
    stipend: "₹12,000/month",
    sector: "Design & Creative",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    description: "Create beautiful and intuitive user interfaces. Work closely with our design team on various client projects.",
    applicants: 167,
    postedDate: "2024-01-18"
  },
  {
    id: "5",
    title: "Financial Analyst Intern",
    company: "Investment Partners",
    location: "Mumbai",
    duration: "6 months",
    stipend: "₹18,000/month",
    sector: "Finance & Accounting",
    skills: ["Excel", "Financial Modeling", "Research", "PowerPoint", "Bloomberg"],
    description: "Assist in financial analysis, market research, and investment recommendations. Great opportunity to learn finance.",
    applicants: 134,
    postedDate: "2024-01-22"
  },
  {
    id: "6",
    title: "Content Writing Intern",
    company: "Media House",
    location: "Remote",
    duration: "3 months",
    stipend: "₹6,000/month",
    sector: "Marketing & Communications",
    skills: ["Writing", "Research", "SEO", "WordPress", "Editing"],
    description: "Create engaging content for various platforms including blogs, social media, and websites. Remote work opportunity.",
    applicants: 298,
    postedDate: "2024-01-25"
  },
  {
    id: "7",
    title: "Software Development Intern",
    company: "StartupTech",
    location: "Pune",
    duration: "6 months",
    stipend: "₹14,000/month",
    sector: "Information Technology",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"],
    description: "Build scalable backend services and APIs. Work in an agile environment with experienced software engineers.",
    applicants: 278,
    postedDate: "2024-01-12"
  },
  {
    id: "8",
    title: "HR Operations Intern",
    company: "People First HR",
    location: "Chennai",
    duration: "4 months",
    stipend: "₹10,000/month",
    sector: "Human Resources",
    skills: ["Communication", "MS Office", "Recruitment", "Data Entry"],
    description: "Support HR operations including recruitment, employee onboarding, and administrative tasks.",
    applicants: 156,
    postedDate: "2024-01-19"
  },
  {
    id: "9",
    title: "Graphic Design Intern",
    company: "Creative Solutions",
    location: "Bangalore",
    duration: "3 months",
    stipend: "₹9,000/month",
    sector: "Design & Creative",
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding", "Typography"],
    description: "Create visual designs for print and digital media. Work on branding projects and marketing materials.",
    applicants: 223,
    postedDate: "2024-01-16"
  },
  {
    id: "10",
    title: "Business Development Intern",
    company: "Growth Partners",
    location: "Gurgaon",
    duration: "5 months",
    stipend: "₹11,000/month",
    sector: "Sales & Business Development",
    skills: ["Sales", "Communication", "Market Research", "CRM", "Presentation"],
    description: "Identify new business opportunities, conduct market research, and support the sales team in client acquisition.",
    applicants: 189,
    postedDate: "2024-01-21"
  },
  {
    id: "11",
    title: "Mobile App Development Intern",
    company: "AppTech Solutions",
    location: "Hyderabad",
    duration: "6 months",
    stipend: "₹16,000/month",
    sector: "Information Technology",
    skills: ["React Native", "Flutter", "JavaScript", "Firebase", "Mobile UI"],
    description: "Develop cross-platform mobile applications. Learn modern mobile development frameworks and best practices.",
    applicants: 267,
    postedDate: "2024-01-14"
  },
  {
    id: "12",
    title: "Research Intern",
    company: "Innovation Labs",
    location: "Bangalore",
    duration: "6 months",
    stipend: "₹13,000/month",
    sector: "Research & Development",
    skills: ["Research", "Data Analysis", "Technical Writing", "Statistics"],
    description: "Conduct research on emerging technologies and contribute to innovation projects in our R&D department.",
    applicants: 145,
    postedDate: "2024-01-17"
  },
  {
    id: "13",
    title: "Social Media Intern",
    company: "Brand Builders",
    location: "Remote",
    duration: "3 months",
    stipend: "₹7,000/month",
    sector: "Marketing & Communications",
    skills: ["Instagram", "Twitter", "Facebook", "Content Creation", "Analytics"],
    description: "Manage social media accounts, create engaging content, and analyze social media performance metrics.",
    applicants: 312,
    postedDate: "2024-01-23"
  },
  {
    id: "14",
    title: "Quality Assurance Intern",
    company: "TestPro Services",
    location: "Chennai",
    duration: "4 months",
    stipend: "₹10,000/month",
    sector: "Information Technology",
    skills: ["Testing", "Selenium", "Bug Tracking", "Documentation", "Agile"],
    description: "Learn software testing methodologies, perform manual and automated testing, and ensure software quality.",
    applicants: 178,
    postedDate: "2024-01-20"
  },
  {
    id: "15",
    title: "Sales Intern",
    company: "SalesForce Pro",
    location: "Mumbai",
    duration: "4 months",
    stipend: "₹9,500/month",
    sector: "Sales & Business Development",
    skills: ["Sales", "Customer Relations", "CRM", "Communication", "Negotiation"],
    description: "Learn sales techniques, interact with customers, and support the sales team in achieving targets.",
    applicants: 203,
    postedDate: "2024-01-24"
  },
  {
    id: "16",
    title: "Video Editing Intern",
    company: "Media Production House",
    location: "Delhi",
    duration: "3 months",
    stipend: "₹8,500/month",
    sector: "Design & Creative",
    skills: ["Premiere Pro", "After Effects", "Video Editing", "Motion Graphics"],
    description: "Edit promotional videos, social media content, and assist in post-production workflows.",
    applicants: 234,
    postedDate: "2024-01-13"
  },
  {
    id: "17",
    title: "Cybersecurity Intern",
    company: "SecureIT",
    location: "Bangalore",
    duration: "6 months",
    stipend: "₹17,000/month",
    sector: "Information Technology",
    skills: ["Network Security", "Penetration Testing", "Risk Assessment", "Linux"],
    description: "Learn cybersecurity best practices, conduct security assessments, and help protect organizational assets.",
    applicants: 198,
    postedDate: "2024-01-11"
  },
  {
    id: "18",
    title: "Product Management Intern",
    company: "ProductTech",
    location: "Pune",
    duration: "5 months",
    stipend: "₹14,500/month",
    sector: "Information Technology",
    skills: ["Product Strategy", "User Research", "Analytics", "Roadmapping", "Agile"],
    description: "Work with product managers to understand user needs, analyze metrics, and contribute to product strategy.",
    applicants: 167,
    postedDate: "2024-01-19"
  },
  {
    id: "19",
    title: "Event Management Intern",
    company: "EventPro",
    location: "Delhi",
    duration: "4 months",
    stipend: "Unpaid",
    sector: "Marketing & Communications",
    skills: ["Event Planning", "Coordination", "Vendor Management", "Communication"],
    description: "Assist in planning and executing corporate events, conferences, and marketing activations.",
    applicants: 289,
    postedDate: "2024-01-26"
  },
  {
    id: "20",
    title: "Mechanical Engineering Intern",
    company: "EngineeringWorks",
    location: "Chennai",
    duration: "6 months",
    stipend: "₹12,500/month",
    sector: "Engineering",
    skills: ["CAD", "AutoCAD", "SolidWorks", "Manufacturing", "Design"],
    description: "Work on mechanical design projects, create technical drawings, and learn manufacturing processes.",
    applicants: 145,
    postedDate: "2024-01-15"
  }
];