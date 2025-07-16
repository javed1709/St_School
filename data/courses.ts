export interface CourseModule {
  title: string
  description: string
  icon: string
}

export interface CourseData {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  students: string
  rating: number
  price: string // Online program fee
  originalPrice?: string // Used for offline program fee or original higher price
  features: string[] // General features
  color: string
  icon: string
  badge: string
  cohortInfo: {
    number?: number // Optional, as it's not always provided in new content
    startDate: string
    placementSupport: string
  }
  curriculum: {
    // Keeping this for detailed curriculum, but will use courseModules for simpler display
    week: string
    title: string
    topics: string[]
    figmaHours?: string
    practicalHours?: string
  }[]
  courseModules: CourseModule[] // Updated to be array of objects
  salaryInfo: {
    average: string
    highest?: string // Optional, removed if not provided
    jobTitle: string
  }
  placedAtCompanies: string[] // New field for companies where students got placed
  whyChooseProgram: string // New field for the descriptive text
  programIncludes: string[] // New field for "How We Teach"
  targetAudience: string[] // New field for "Who Is This For?"
  whyOnly33Students: string // New field for the descriptive text about selective admission
  certificationBenefits: string[] // New field for "Certification & Recognition" benefits
  contactNumber: string // New field for WhatsApp contact
}

export const coursesData: CourseData[] = [
  {
    id: "ui-ux",
    title: "Become a UI/UX Designer — From Scratch to Hired",
    subtitle: "Product Designer Fellowship",
    description:
      "An 8-week online program with 1:1 mentorship, hands-on projects, and career support for up to 6 Months.",
    duration: "8 weeks",
    students: "33 seats",
    rating: 4.9,
    price: "₹30,000", // Online Program Fee
    originalPrice: "₹99,999", // Offline Program Fee
    features: [
      "Master tools like Figma, Notion, Whimsical & more",
      "Build 2+ real case studies & get design reviews",
      "Perfect for students from any background",
      "1:1 mentorship from senior designers",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
    badge: "Product Designer Fellowship",
    cohortInfo: {
      startDate: "August 11th",
      placementSupport: "6 Months",
    },
    curriculum: [], // Keeping empty as new content uses courseModules
    courseModules: [
      {
        title: "UX Fundamentals & Design Thinking",
        description: "Learn the core principles of user experience design and design thinking methodology",
        icon: "brain",
      },
      {
        title: "User Research & Persona Mapping",
        description: "Master user research techniques and create detailed user personas",
        icon: "users",
      },
      {
        title: "Wireframing, Prototyping & User Flows",
        description: "Create wireframes, interactive prototypes, and map user journeys",
        icon: "layout",
      },
      {
        title: "UI Principles, Visual Design & Typography",
        description: "Learn visual design principles, color theory, and typography",
        icon: "palette",
      },
      {
        title: "Mobile & Web Design Systems",
        description: "Build scalable design systems for mobile and web applications",
        icon: "smartphone",
      },
      {
        title: "Figma, Notion, Whimsical & more",
        description: "Master industry-standard design tools and collaboration platforms",
        icon: "tool",
      },
      {
        title: "Dev Handoff & Collaborative Workflows",
        description: "Learn to work effectively with developers and manage design workflows",
        icon: "gitBranch",
      },
    ],
    salaryInfo: {
      average: "₹3–9 LPA",
      jobTitle: "UI/UX Designer",
    },
    placedAtCompanies: ["Ryzer", "Altrova Tech", "GrabOn", "Doms Global", "Multiple fast-growing startups & agencies"],
    whyChooseProgram:
      "At Student Tribe, we've created a learning environment where you're not just watching lectures — you're building real-world UI/UX projects with continuous feedback and personal guidance.",
    programIncludes: [
      "Live Interactive Classes",
      "1:1 Mentorship & Design Reviews",
      "Real-Time Industrial Projects",
      "Weekly Assignments + Feedback",
      "Career Coaching & Communication Skills",
      "Mock Interviews & Portfolio Reviews",
      "Soft Skills + Resume & LinkedIn Building",
      "Mental Health Support & Wellness Check-ins",
      "Only 33 students per batch (selected after screening)",
    ],
    targetAudience: [
      "Beginners with 0 design experience",
      "Students from non-tech/design backgrounds",
      "Professionals looking to switch careers",
      "Creators who want to enter the product design world",
    ],
    whyOnly33Students:
      "We get 1000+ applications per batch — but accept only 33. We believe in focused mentorship and serious outcomes. That's why we interview every applicant and work only with learners who are truly committed to their design career.",
    certificationBenefits: [
      "Completion Certificate from Student Tribe",
      "Mentor-graded design evaluation",
      "Career-readiness report with your strengths",
      "2+ Case Studies to showcase in interviews",
    ],
    contactNumber: "8522883843",
  },
  {
    id: "mern-dsa",
    title: "Become a Full-Stack Developer with MERN + DSA",
    subtitle: "Full Stack Development",
    description:
      "An 8-week online program that teaches you how to build real web apps, master data structures, and crack interviews — with placement support for up to 1 year.",
    duration: "8 weeks",
    students: "33 seats",
    rating: 4.8,
    price: "₹50,000",
    originalPrice: undefined, // No explicit offline price provided for MERN+DSA
    features: [
      "Build scalable apps with MongoDB, Express, React & Node",
      "Ace tech interviews with problem-solving mastery",
      "Ideal for B.Tech and CS aspirants",
      "Live coding sessions and code reviews",
    ],
    color: "from-green-500 to-emerald-500",
    icon: "💻",
    badge: "Full Stack Development",
    cohortInfo: {
      startDate: "August 11th",
      placementSupport: "6 Months", // Consistent with "6 Months Placement Assistance"
    },
    curriculum: [], // Keeping empty as new content uses courseModules
    courseModules: [
      {
        title: "HTML, CSS & JavaScript (Essentials + ES6)",
        description: "Master the fundamentals of web development and modern JavaScript",
        icon: "code",
      },
      {
        title: "React (Hooks, Routing, State Management)",
        description: "Build dynamic user interfaces with React and modern patterns",
        icon: "react",
      },
      {
        title: "Node.js, Express, MongoDB & API Building",
        description: "Create robust backend services and RESTful APIs",
        icon: "server",
      },
      {
        title: "Git, GitHub & Deployment (Netlify/Render)",
        description: "Version control, collaboration, and application deployment",
        icon: "gitFork",
      },
      {
        title: "Data Structures & Algorithms (Arrays, Linked Lists, Trees, Graphs, etc.)",
        description: "Master fundamental data structures and algorithmic thinking",
        icon: "cpu",
      },
      {
        title: "Problem-Solving on Leetcode/CodeChef",
        description: "Practice coding challenges and interview preparation",
        icon: "terminal",
      },
      {
        title: "Project Architecture + Coding Best Practices",
        description: "Learn to structure applications and write maintainable code",
        icon: "building",
      },
    ],
    salaryInfo: {
      average: "₹3–9 LPA",
      jobTitle: "Full-Stack Developer",
    },
    placedAtCompanies: ["Snad Developer", "XPO", "RYZER", "T-Works", "And multiple fast-scaling product startups"],
    whyChooseProgram:
      "At Student Tribe, we combine development and logic. You won't just learn MERN — you'll master DSA, build real-world apps, and get placement-ready skills that companies are hiring for.",
    programIncludes: [
      "Live Coding Classes + Labs",
      "1:1 Mentorship & Weekly Doubt Sessions",
      "Full-Stack Projects (Frontend + Backend)",
      "Weekly Coding Challenges & Mock Interviews",
      "Resume + GitHub Portfolio Building",
      "LinkedIn Profile + Soft Skills",
      "6 Months Placement Assistance",
      "Only 33 Students per Batch — Selected after screening",
      "Mental Health Check-ins & Peer Support",
    ],
    targetAudience: [
      "Final-year students & fresh grads from tech/non-tech",
      "Career switchers wanting to enter development",
      "B.Tech, BSc CS, MCA or coding bootcamp learners",
      "Those preparing for product/startup interviews",
    ],
    whyOnly33Students:
      "We receive 1000+ applications per batch — but select just 33. We believe in depth over numbers. By selecting only committed learners, we ensure every student gets personal guidance, timely feedback, and real progress.",
    certificationBenefits: [
      "Official Completion Certificate from Student Tribe",
      "GitHub Repo with 2+ Full-Stack Projects",
      "Career Readiness Scorecard (Mock Interview Feedback)",
      "LinkedIn & Resume Review with a Personal Branding Checklist",
    ],
    contactNumber: "8522883843",
  },
  {
    id: "embedded",
    title: "Learn Embedded Systems — From Fundamentals to Placement",
    subtitle: "Embedded Systems Course",
    description: "An 8-week career-focused program to master Embedded C, microcontrollers, and real-time systems — with 1:1 mentorship and up to 1 year of placement support.",
    duration: "8 weeks",
    students: "33 seats",
    rating: 4.7,
    price: "₹40,000",
    originalPrice: undefined,
    features: [
      "Work on hardware-level projects with real-time output",
      "Suited for ECE/EEE/Robotics enthusiasts",
      "Industry-standard tools and protocols",
      "Hands-on project-based learning",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🔧",
    badge: "IoT & Hardware Development",
    cohortInfo: {
      startDate: "August 11th",
      placementSupport: "1 year",
    },
    curriculum: [
      {
        week: "Week 1",
        title: "Embedded C Programming",
        topics: ["C Programming for Embedded", "Memory Management", "Pointers & Arrays", "Bit Manipulation"],
        practicalHours: "Arduino Programming",
      },
      {
        week: "Week 2",
        title: "Microcontroller Programming",
        topics: ["8051/ARM Architecture", "GPIO Programming", "Timers & Interrupts", "Serial Communication"],
        practicalHours: "Hardware Interfacing",
      },
      {
        week: "Week 3",
        title: "IoT Protocols & Projects",
        topics: ["WiFi & Bluetooth", "MQTT Protocol", "Sensor Integration", "Real-time Systems"],
        practicalHours: "IoT Project Development",
      },
    ],
    courseModules: [
      { title: "Embedded C Programming", description: "", icon: "code" },
      { title: "Microcontrollers (Arduino, AVR, STM32)", description: "", icon: "cpu" },
      { title: "Sensors, Timers, Interrupts & Protocols (I2C, SPI, UART)", description: "", icon: "thermometer" },
      { title: "IoT Integration + Edge Devices", description: "", icon: "cloud" },
      { title: "Real-Time Operating Systems (RTOS basics)", description: "", icon: "server" },
      { title: "Hardware Debugging Tools", description: "", icon: "tool" },
      { title: "End-to-End Project: Sensor Data → Microcontroller → Output System", description: "", icon: "box" },
    ],
    salaryInfo: { average: "₹3–9 LPA", jobTitle: "Embedded Systems Engineer" },
    placedAtCompanies: ["Qualcomm", "Intel", "Bosch", "And core startups building IoT & embedded tech"],
    whyChooseProgram: "This is India’s only cohort-based embedded systems course focused on real-world applications, 1:1 mentorship, and career outcomes.",
    programIncludes: [
      "Hands-on Labs with Hardware Kits",
      "Live Classes + 1:1 Mentorship Support",
      "Real-Time Projects & Microcontroller Setup",
      "Resume + LinkedIn + Core Project Dossier",
      "Mock Tech Interviews + Viva Practice",
      "Communication + Soft Skills for Interviews",
      "Only 33 Students per Batch",
      "Access to Mentors from Core Tech Companies",
      "Mental Health Check-ins & Growth Sessions",
    ],
    targetAudience: [
      "ECE, EEE, Robotics, or Mechatronics students",
      "Tech enthusiasts who love hardware",
      "Career switchers from generic CS to core embedded",
      "Final-year students or recent graduates targeting Qualcomm/Intel/Bosch-level roles",
    ],
    whyOnly33Students:
      "We receive 1000+ applications every batch. But we work with only 33, so every learner receives individual attention, deep feedback, and long-term mentorship.",
    certificationBenefits: [
      "Completion Certificate with project validation",
      "Microcontroller project documentation + codebase",
      "Mentor feedback + skill rating for placements",
      "LinkedIn + GitHub profile optimization",
    ],
    contactNumber: "8498963240",
  },
  {
    id: "digital-marketing",
    title: "Learn Digital Marketing + AI Tools. Build Real Campaigns. Get Hired.",
    subtitle: "Growth Marketing Specialist",
    description: "An 8-week hands-on program designed to make you job-ready with real-world projects, mentorship, and a portfolio that brands can’t ignore.",
    duration: "8 weeks",
    students: "33 seats",
    rating: 4.9,
    price: "₹34,999",
    originalPrice: undefined,
    features: [
      "Run real campaigns, analyze data, and pitch like an agency",
      "Perfect for creative minds, BBA/MBA/Arts backgrounds",
      "AI-powered marketing automation",
      "Industry case studies and live projects",
    ],
    color: "from-orange-500 to-red-500",
    icon: "📈",
    badge: "Growth Marketing Specialist",
    cohortInfo: {
      startDate: "August 11th",
      placementSupport: "1 year",
    },
    curriculum: [],
    courseModules: [
      { title: "Meta Ads + Google Ads Campaign Management", description: "", icon: "trendingUp" },
      { title: "Social Media Strategy (Organic + Paid)", description: "", icon: "users" },
      { title: "SEO Basics + Keyword Planning", description: "", icon: "lightbulb" },
      { title: "Funnel Building & Email Marketing", description: "", icon: "layout" },
      { title: "AI Tools for Copywriting, Automation, Research", description: "", icon: "brain" },
      { title: "Analytics, Reporting, Budgeting", description: "", icon: "chart" },
      { title: "Influencer Marketing & UGC Campaigns", description: "", icon: "users" },
      { title: "Content Strategy + Pitch Deck Creation", description: "", icon: "penToolIcon" },
      { title: "Tools You’ll Use: ChatGPT, Canva AI, AdCreative.ai, Notion, Meta Business Suite, Google Analytics, Google Tag Manager", description: "", icon: "tool" },
    ],
    salaryInfo: {
      average: "Up to ₹5 LPA",
      jobTitle: "Growth Marketing Manager",
    },
    placedAtCompanies: [
      "RMT",
      "Hotcult",
      "8Views",
      "Gen Y",
      "Jxtapose",
      "Emporia",
      "Ingenious",
      "Ad Unit",
    ],
    whyChooseProgram: "We combine traditional marketing skills with AI-powered tools and real campaign experience. This isn’t a YouTube playlist — this is how you actually get hired.",
    programIncludes: [
      "Live Interactive Classes",
      "Real Client Brief Simulations",
      "1:1 Campaign Feedback from Mentors",
      "Analytics + Performance Review Sessions",
      "Portfolio, Resume & LinkedIn Optimization",
      "Soft Skills + Interview Coaching",
      "Project Work That Reflects Industry Standards",
      "Only 33 Students Selected per Batch",
    ],
    targetAudience: [
      "Students from BBA, BCom, BA, MBA, or any background",
      "Freshers or career-switchers interested in marketing",
      "Content creators, brand builders, or freelance marketers",
      "Anyone who wants to land internships or clients in the digital space",
    ],
    whyOnly33Students: "We focus on outcomes, not mass enrollment. With just 33 students per batch, every learner gets personal mentorship, live feedback, and real growth opportunities.",
    certificationBenefits: [
      "Completion Certificate from Student Tribe",
      "Portfolio with Real Campaigns",
      "Mentor-Reviewed Project Deck",
      "Optimization Score for Resume & LinkedIn",
    ],
    contactNumber: "9182410886",
  },
]

export function getCourseById(id: string): CourseData | undefined {
  return coursesData.find((course) => course.id === id)
}
