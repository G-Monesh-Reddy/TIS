export const siteData = {
  schoolName: "Tula's International School",
  shortName: "TIS",
  tagline: "The Modern Gurukul",
  motto: "Where Ancient Wisdom Meets Global Excellence",
  description:
    "Ranked Uttarakhand's #1 Co-Ed Residential School. Nestled across a 22-acre pollution-free green sanctuary in Dehradun, TIS blends traditional Gurukul ethos with CBSE academic rigor, 15+ Olympic sports, and futuristic education for Classes IV to XII.",
  
  contact: {
    helpline: "+91-9837983791",
    landlines: ["0135-2699444", "0135-2699666"],
    email: "info@tis.edu.in",
    address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand), India",
    applyUrl: "https://admission.tis.edu.in/",
    virtualTourUrl: "https://tis.edu.in/virtual-tour/",
    mapCoordinates: { lat: 30.3430336, lng: 77.8891652 }
  },

  stats: [
    { value: "22+", label: "Acre Green Campus", subtext: "Pollution-free Dehradun valley" },
    { value: "15+", label: "Olympic-Grade Sports", subtext: "Equestrian, swimming, shooting & more" },
    { value: "1:8", label: "Teacher-Student Ratio", subtext: "Individual pastoral care & mentorship" },
    { value: "100%", label: "CBSE Pass Rate", subtext: "Placements at premier global universities" },
    { value: "#1", label: "Boarding School", subtext: "Ranked No. 1 in Uttarakhand" },
  ],

  badges: [
    "Ranked #1 Boarding School in Uttarakhand",
    "CBSE Affiliated (Co-Ed Residential)",
    "Member of IAYP Global Award",
    "Admissions Open 2025–26 (Classes IV to IX & XI)"
  ],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Why TIS", href: "#why-tis" },
    { name: "Campus & Sports", href: "#facilities" },
    { name: "Life at TIS", href: "#life-at-tis" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" }
  ],

  academicPrograms: [
    {
      id: "middle",
      stage: "Classes IV – VIII",
      title: "Middle School Program",
      subtitle: "Inquiry, Exploration & Foundational Character",
      description:
        "Building critical thinking, multilingual fluency, mathematical reasoning, and scientific curiosity in a nurturing residential environment guided by compassionate housemasters.",
      highlights: [
        "Experiential Activity-Based Learning",
        "Foundational STEM & Robotics Introduction",
        "Compulsory Performing Arts & Sports",
        "Mindfulness & Vedic Gurukul Values"
      ],
      icon: "Compass",
      accent: "from-amber-500/20 to-amber-700/20"
    },
    {
      id: "secondary",
      stage: "Classes IX – X",
      title: "Secondary School Program",
      subtitle: "Academic Rigor & Holistic Competency",
      description:
        "Deep conceptual mastery tailored to CBSE national standards, complemented by Olympiad coaching, leadership building, laboratory experiments, and public speaking forums.",
      highlights: [
        "Rigorous CBSE Core Curriculum",
        "Atal Tinkering Lab Innovations",
        "Model United Nations & Inter-School Debates",
        "National & State Level Sports Training"
      ],
      icon: "BookOpenCheck",
      accent: "from-blue-500/20 to-indigo-700/20"
    },
    {
      id: "senior",
      stage: "Classes XI – XII",
      title: "Senior Secondary Program",
      subtitle: "Career Specialization & University Readiness",
      description:
        "Specialized academic streams with integrated coaching for competitive examinations (JEE, NEET, CUET, SAT, CLAT) led by experienced faculty and personal career strategists.",
      highlights: [
        "Science (PCM / PCB), Commerce & Humanities",
        "Integrated Competitive Exam Preparation",
        "Mindler 1-on-1 Global Career Guidance",
        "Portfolio & Profile Building for Ivy & Top Colleges"
      ],
      icon: "GraduationCap",
      accent: "from-emerald-500/20 to-teal-700/20"
    }
  ],

  differentiators: [
    {
      title: "The Modern Gurukul System",
      description: "Rooted in timeless Indian values of discipline, empathy, humility, and mindfulness, seamlessly blended with modern international perspectives and digital fluency.",
      icon: "Sparkles"
    },
    {
      title: "15+ Olympic-Level Sports",
      description: "Dedicated equestrian arena for horse riding, semi-Olympic heated pool, 10m shooting range, squash courts, football turf, and professional NIS-certified coaches.",
      icon: "Trophy"
    },
    {
      title: "Pastoral Residential Care",
      description: "Separate warm, climate-controlled boys and girls boarding houses with dedicated house parents, nutritious farm-fresh dining, and 24/7 medical infirmary.",
      icon: "HeartHandshake"
    },
    {
      title: "IAYP & Global Exposure",
      description: "Licensed operator of The International Award for Young People (Duke of Edinburgh's Award), fostering outdoor resilience, community service, and global leadership.",
      icon: "Globe"
    },
    {
      title: "Eco-Friendly 22-Acre Campus",
      description: "Nestled against the Himalayan foothills in Dehradun, surrounded by lush flora, clean mountain air, solar power, and organic botanical orchards.",
      icon: "Trees"
    },
    {
      title: "Unbroken Safety & Surveillance",
      description: "250+ CCTV surveillance, biometric access, zero tolerance for ragging, and strict safety audits ensuring every child thrives with confidence.",
      icon: "ShieldCheck"
    }
  ],

  facilities: [
    {
      name: "Horse Riding & Equestrian Arena",
      category: "Sports",
      description: "Premier equestrian track with thoroughbred horses, trained syces, and certified equestrian instructors.",
      image: "/images/sports-horse-riding.png",
      tag: "Olympic Discipline"
    },
    {
      name: "Semi-Olympic Swimming Pool",
      category: "Aquatics",
      description: "Temperature-regulated swimming pavilion with diving blocks, certified lifeguards, and competitive stroke training.",
      image: "/images/sports-swimming.png",
      tag: "Aquatic Center"
    },
    {
      name: "10m Indoor Shooting Range",
      category: "Precision Sports",
      description: "Precision target range meeting national rifle association standards for rifle and pistol marksmanship.",
      image: "/images/sports-shooting.png",
      tag: "Target Sports"
    },
    {
      name: "Archery Range & Outdoor Field",
      category: "Sports",
      description: "Dedicated Olympic recurve archery arena fostering supreme concentration, balance, and athletic composure.",
      image: "/images/sports-archery.png",
      tag: "Focus & Discipline"
    },
    {
      name: "Residential Boarding Houses",
      category: "Campus Life",
      description: "Spacious, air-cooled dormitories designed for comfort, camaraderie, evening study hours, and pastoral wellness.",
      image: "/images/campus-residential.jpg",
      tag: "Home Away From Home"
    },
    {
      name: "FIFA-Standard Football Turf",
      category: "Sports",
      description: "Full-size lush natural football grounds illuminated with floodlights for evening inter-house leagues.",
      image: "/images/sports-football.png",
      tag: "Team Excellence"
    },
    {
      name: "Glass-Back Squash Courts",
      category: "Indoor Sports",
      description: "Championship wooden squash courts with viewer galleries for high-intensity cardiovascular training.",
      image: "/images/sports-squash.png",
      tag: "Indoor Arena"
    },
    {
      name: "Billiards & Snooker Lounge",
      category: "Indoor Sports",
      description: "Full-size slate tables fostering geometric strategy, composure, and sportsman etiquette.",
      image: "/images/sports-billiards.png",
      tag: "Strategy & Focus"
    }
  ],

  studentLife: [
    {
      category: "Performing Arts",
      title: "Classical & Western Dance",
      description: "Kathak, Bharatnatyam, Contemporary, and Hip-Hop instruction under seasoned choreographers.",
      image: "/images/activity-dance.webp",
      badge: "Creative Arts"
    },
    {
      category: "Creative Crafts",
      title: "Pottery & Sculpture Studio",
      description: "Hands-on pottery wheels, clay modeling, and kiln firing to unleash tactile imagination.",
      image: "/images/activity-pottery.webp",
      badge: "Visual Arts"
    },
    {
      category: "Martial Arts",
      title: "Karate & Taekwondo Academy",
      description: "Self-defense, belt grading, disciplined combat, and mental fortitude under black-belt masters.",
      image: "/images/activity-karate.webp",
      badge: "Self-Defense"
    },
    {
      category: "Elite Sports",
      title: "Horse Riding & Polo",
      description: "One of the few boarding schools in Northern India offering complete equestrian and polo training.",
      image: "/images/activity-polo.webp",
      badge: "Heritage Sport"
    }
  ],

  testimonials: [
    {
      name: "Namita Agarwal",
      relation: "Mother of Krishna Agarwal",
      quote: "Tula's gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
      rating: 5,
      image: "/images/parent-namita.png"
    },
    {
      name: "Tashi Tsering",
      relation: "Father of Jigmet Skaldon",
      quote: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
      rating: 5,
      image: "/images/parent-tashi.png"
    },
    {
      name: "Mrs. Urja Bhayani",
      relation: "Mother of Shikha & Samarth Bhayani",
      quote: "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma'am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.",
      rating: 5,
      image: "/images/parent-urja.png"
    },
    {
      name: "Pinky Sharma",
      relation: "Mother of Swastik Sharma",
      quote: "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.",
      rating: 5,
      image: "/images/parent-pinky.png"
    },
    {
      name: "Sandeep Kumar",
      relation: "Father of Aryan",
      quote: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
      rating: 5,
      image: "/images/parent-sandeep.png"
    },
    {
      name: "Suresh Kumar",
      relation: "Father of Aditya Kumar",
      quote: "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.",
      rating: 5,
      image: "/images/parent-suresh.png"
    }
  ],

  admissionSteps: [
    {
      step: "01",
      title: "Online Registration",
      description: "Fill the quick online registration form with basic student & parent details and submit academic transcripts."
    },
    {
      step: "02",
      title: "Assessment & Interaction (TSA)",
      description: "Take the Tula's Scholarship Assessment (TSA) or participate in an informal personal interaction with faculty."
    },
    {
      step: "03",
      title: "Provisional Offer & Verification",
      description: "Receive the formal admission offer letter along with scholarship confirmation based on TSA score."
    },
    {
      step: "04",
      title: "Welcome to Campus",
      description: "Complete document verification, meet your housemaster, and settle into the warm boarding family."
    }
  ],

  faqs: [
    {
      question: "Which classes are admissions open for at TIS Dehradun?",
      answer: "Admissions are currently open for Classes IV through IX and Class XI (Science, Commerce, and Humanities streams) for the 2025–26 academic session."
    },
    {
      question: "What makes TIS's 'Modern Gurukul' philosophy unique?",
      answer: "The Modern Gurukul blends the timeless values of the ancient Indian Gurukul system—such as character, discipline, humility, yoga, and personal guru-shishya mentorship—with modern STEM education, smart classrooms, 15+ Olympic sports, and global university readiness."
    },
    {
      question: "What sports and fitness facilities are available on campus?",
      answer: "TIS features 15+ Olympic-grade sports including an equestrian arena for horse riding, semi-Olympic heated swimming pool, 10m indoor shooting range, squash courts, football turf, badminton courts, lawn tennis, archery, billiards, and taekwondo."
    },
    {
      question: "How is student safety and healthcare managed for boarders?",
      answer: "TIS operates a secure 22-acre gated campus with 250+ CCTV surveillance, biometric access, and dedicated wardens in separate boys and girls hostels. The campus includes a 24/7 medical infirmary with resident qualified nurses, visiting doctors, and emergency ambulance on standby."
    },
    {
      question: "Does TIS offer scholarships for deserving students?",
      answer: "Yes, TIS conducts the Tula's Scholarship Assessment (T.S.A.) for meritorious academic and sports achievers, along with concessions for defense personnel, siblings, and alumni children."
    }
  ]
};
