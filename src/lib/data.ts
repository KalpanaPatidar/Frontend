// Dummy data for the demo

export const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "Bangalore, Karnataka",
    skillsMatch: 95,
    duration: "3 months",
    stipend: "₹15,000/month",
    description: "Build responsive web applications using React and TypeScript",
    tags: ["React", "TypeScript", "CSS"],
    deadline: "2024-01-15"
  },
  {
    id: 2,
    title: "AI/ML Research Intern",
    company: "InnovateAI Labs",
    location: "Hyderabad, Telangana",
    skillsMatch: 88,
    duration: "6 months",
    stipend: "₹20,000/month",
    description: "Work on cutting-edge machine learning projects and research",
    tags: ["Python", "TensorFlow", "Research"],
    deadline: "2024-01-20"
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataMinds Inc",
    location: "Pune, Maharashtra",
    skillsMatch: 92,
    duration: "4 months",
    stipend: "₹18,000/month",
    description: "Analyze large datasets and build predictive models",
    tags: ["Python", "SQL", "Analytics"],
    deadline: "2024-01-10"
  },
  {
    id: 4,
    title: "Backend Developer Intern",
    company: "CloudTech Systems",
    location: "Mumbai, Maharashtra",
    skillsMatch: 85,
    duration: "3 months",
    stipend: "₹16,000/month",
    description: "Develop scalable server-side applications and APIs",
    tags: ["Node.js", "MongoDB", "REST API"],
    deadline: "2024-01-25"
  },
  {
    id: 5,
    title: "Mobile App Developer Intern",
    company: "MobileFirst Ltd",
    location: "Delhi, NCR",
    skillsMatch: 90,
    duration: "5 months",
    stipend: "₹17,000/month",
    description: "Create cross-platform mobile applications using React Native",
    tags: ["React Native", "JavaScript", "Mobile"],
    deadline: "2024-01-18"
  }
];

export const courses = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    provider: "NPTEL - IIT Madras",
    duration: "12 weeks",
    level: "Beginner",
    rating: 4.8,
    students: "45,230",
    thumbnail: "ai-course.jpg",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    provider: "NPTEL - IIT Bombay",
    duration: "16 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: "32,140",
    thumbnail: "web-dev.jpg",
    category: "Programming"
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    provider: "NPTEL - IIT Kharagpur",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: "58,670",
    thumbnail: "dsa-course.jpg",
    category: "Computer Science"
  },
  {
    id: 4,
    title: "Cloud Computing Fundamentals",
    provider: "NPTEL - IISc Bangalore",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.6,
    students: "28,450",
    thumbnail: "cloud-course.jpg",
    category: "Cloud"
  },
  {
    id: 5,
    title: "Mobile Application Development",
    provider: "NPTEL - IIT Delhi",
    duration: "14 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: "36,890",
    thumbnail: "mobile-dev.jpg",
    category: "Mobile"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CS Student, IIT Delhi",
    content: "The AI recommendations were spot-on! I found my dream internship at a top tech company within just 2 weeks of using this platform.",
    rating: 5,
    avatar: "student1.jpg"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "ECE Student, NIT Surat",
    content: "Amazing platform! The personalized course suggestions helped me upskill before applying for internships. Highly recommended!",
    rating: 5,
    avatar: "student2.jpg"
  },
  {
    id: 3,
    name: "Ananya Krishnan",
    role: "IT Student, VIT Vellore",
    content: "Thanks to this platform, I secured an internship with 95% skill match. The interface is intuitive and the recommendations are accurate.",
    rating: 5,
    avatar: "student3.jpg"
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "ME Student, BITS Pilani",
    content: "The AI-powered matching system is revolutionary. It saved me hours of searching and connected me with the perfect opportunities.",
    rating: 5,
    avatar: "student4.jpg"
  }
];

export const partners = [
  { id: 1, name: "TCS", logo: "tcs-logo.png" },
  { id: 2, name: "Infosys", logo: "infosys-logo.png" },
  { id: 3, name: "Wipro", logo: "wipro-logo.png" },
  { id: 4, name: "HCL", logo: "hcl-logo.png" },
  { id: 5, name: "Tech Mahindra", logo: "techm-logo.png" },
  { id: 6, name: "Cognizant", logo: "cognizant-logo.png" },
  { id: 7, name: "Accenture", logo: "accenture-logo.png" },
  { id: 8, name: "IBM", logo: "ibm-logo.png" },
  { id: 9, name: "Microsoft", logo: "microsoft-logo.png" },
  { id: 10, name: "Google", logo: "google-logo.png" },
  { id: 11, name: "Amazon", logo: "amazon-logo.png" },
  { id: 12, name: "Flipkart", logo: "flipkart-logo.png" }
];

export const userChoices = [
  {
    id: 1,
    title: "I want to Learn",
    subtitle: "Explore courses and upskill",
    description: "Browse through curated courses from top institutions",
    icon: "BookOpen",
    color: "bg-blue-500",
    route: "/courses"
  },
  {
    id: 2,
    title: "I want to Explore",
    subtitle: "Discover new opportunities",
    description: "Find internships across different industries and domains",
    icon: "Compass",
    color: "bg-green-500",
    route: "/explore"
  },
  {
    id: 3,
    title: "I want an Internship",
    subtitle: "Get AI-powered recommendations",
    description: "Find the perfect internship match based on your profile",
    icon: "Briefcase",
    color: "bg-purple-500",
    route: "/internships"
  },
  {
    id: 4,
    title: "Not Sure Yet",
    subtitle: "Take our career assessment",
    description: "Let our AI guide you to the right path for your career",
    icon: "HelpCircle",
    color: "bg-orange-500",
    route: "/assessment"
  }
];