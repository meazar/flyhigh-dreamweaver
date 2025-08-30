export interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  ranking: string;
  qsRanking: string;
  image: string;
  website: string;
  description: string;
  established: string;
  studentPopulation: string;
  internationalStudents: string;
  campuses: string;
  tuitionRange: string;
  acceptanceRate: string;
  studentRatio: string;
  programs: string[];
  level: string[];
  highlights: string[];
  faculties: {
    name: string;
    programs: string[];
    description: string;
  }[];
  admissionRequirements: {
    undergraduate: string[];
    postgraduate: string[];
  };
  costs: {
    tuition: string;
    living: string;
    books: string;
    health: string;
  };
  intakes: {
    semester: string;
    period: string;
    deadline: string;
  }[];
}

export const universities: University[] = [
  {
    id: 1,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    ranking: "#33 Global",
    qsRanking: "#14 QS World",
    image: "/src/assets/universities/melbourne.jpg",
    website: "https://www.unimelb.edu.au",
    description: "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria. The university is consistently ranked among the leading universities in the world.",
    established: "1853",
    studentPopulation: "47,000+",
    internationalStudents: "18,000+",
    campuses: "7 campuses",
    tuitionRange: "$35,000 - $45,000 AUD",
    acceptanceRate: "70%",
    studentRatio: "1:18",
    programs: ["Engineering", "Business", "Medicine", "Computer Science"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Top research university in Australia",
      "Strong industry partnerships",
      "Excellent graduate employability",
      "Beautiful campus in Melbourne",
      "Diverse international community"
    ],
    faculties: [
      {
        name: "Faculty of Engineering and Information Technology",
        programs: ["Computer Science", "Software Engineering", "Electrical Engineering", "Civil Engineering"],
        description: "Leading engineering education with state-of-the-art facilities"
      },
      {
        name: "Melbourne Business School",
        programs: ["MBA", "Master of Management", "Master of Finance", "Bachelor of Commerce"],
        description: "Consistently ranked among the world's top business schools"
      },
      {
        name: "Faculty of Medicine, Dentistry and Health Sciences",
        programs: ["Medicine", "Dentistry", "Nursing", "Public Health"],
        description: "Excellence in medical education and research"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school completion with strong grades",
        "IELTS 6.5 (no band less than 6.0) or equivalent",
        "ATAR score of 80+ (for Australian students)",
        "Subject prerequisites vary by program"
      ],
      postgraduate: [
        "Bachelor's degree with good grades",
        "IELTS 6.5 (no band less than 6.0) or equivalent",
        "Relevant work experience (for some programs)",
        "GMAT/GRE scores (for some business programs)"
      ]
    },
    costs: {
      tuition: "$35,000 - $45,000 AUD per year",
      living: "$20,000 - $25,000 AUD per year",
      books: "$1,500 - $2,500 AUD per year",
      health: "$460 AUD per year"
    },
    intakes: [
      { semester: "Semester 1", period: "February - June", deadline: "December 31" },
      { semester: "Semester 2", period: "July - November", deadline: "May 31" }
    ]
  },
  {
    id: 2,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    ranking: "#21 Global",
    qsRanking: "#25 QS World",
    image: "/src/assets/universities/toronto.jpg",
    website: "https://www.utoronto.ca",
    description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in Upper Canada.",
    established: "1827",
    studentPopulation: "97,000+",
    internationalStudents: "23,000+",
    campuses: "3 campuses",
    tuitionRange: "$25,000 - $35,000 CAD",
    acceptanceRate: "43%",
    studentRatio: "1:15",
    programs: ["Computer Science", "Engineering", "Business", "Medicine"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Canada's top research university",
      "Strong international reputation",
      "Diverse academic programs",
      "Vibrant multicultural campus",
      "Excellent industry connections"
    ],
    faculties: [
      {
        name: "Faculty of Applied Science & Engineering",
        programs: ["Computer Engineering", "Mechanical Engineering", "Biomedical Engineering", "Industrial Engineering"],
        description: "One of Canada's premier engineering schools"
      },
      {
        name: "Rotman School of Management",
        programs: ["MBA", "Bachelor of Commerce", "Master of Finance", "Master of Management Analytics"],
        description: "Leading business school with innovative programs"
      },
      {
        name: "Faculty of Medicine",
        programs: ["Medicine", "Medical Radiation Sciences", "Occupational Therapy", "Physical Therapy"],
        description: "World-class medical education and research"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school completion with minimum 85% average",
        "IELTS 6.5 (no band less than 6.0) or TOEFL 100",
        "Subject prerequisites for specific programs",
        "Supplementary application required for some programs"
      ],
      postgraduate: [
        "Bachelor's degree with minimum B+ average",
        "IELTS 7.0 or TOEFL 93+",
        "GRE/GMAT scores for some programs",
        "Letters of recommendation and statement of purpose"
      ]
    },
    costs: {
      tuition: "$25,000 - $35,000 CAD per year",
      living: "$15,000 - $20,000 CAD per year",
      books: "$1,000 - $2,000 CAD per year",
      health: "$612 CAD per year"
    },
    intakes: [
      { semester: "Fall Term", period: "September - December", deadline: "January 15" },
      { semester: "Winter Term", period: "January - April", deadline: "October 1" }
    ]
  },
  {
    id: 3,
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    ranking: "#4 Global",
    qsRanking: "#4 QS World",
    image: "/src/assets/universities/oxford.jpg",
    website: "https://www.ox.ac.uk",
    description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
    established: "1096",
    studentPopulation: "24,000+",
    internationalStudents: "11,000+",
    campuses: "1 main campus",
    tuitionRange: "$30,000 - $50,000 GBP",
    acceptanceRate: "17%",
    studentRatio: "1:11",
    programs: ["Law", "Business", "Medicine", "Liberal Arts"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "World's oldest English-speaking university",
      "Tutorial system of learning",
      "Exceptional research facilities",
      "Historic and prestigious institution",
      "Global alumni network"
    ],
    faculties: [
      {
        name: "Saïd Business School",
        programs: ["MBA", "Executive MBA", "MSc Financial Economics", "Executive Education"],
        description: "Leading business school with global impact"
      },
      {
        name: "Faculty of Law",
        programs: ["BA Jurisprudence", "BCL", "MJur", "DPhil in Law"],
        description: "One of the world's most prestigious law schools"
      },
      {
        name: "Medical Sciences Division",
        programs: ["Medicine", "Biomedical Sciences", "Clinical Medicine", "Population Health"],
        description: "Excellence in medical education and breakthrough research"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "A-levels: AAA or equivalent international qualifications",
        "IELTS 7.5 (no band less than 7.0) or equivalent",
        "Oxford admissions test for most subjects",
        "Interview as part of selection process"
      ],
      postgraduate: [
        "First-class honours degree or equivalent",
        "IELTS 7.5 (no band less than 7.0) or equivalent",
        "GRE/GMAT for some programs",
        "Strong academic references and personal statement"
      ]
    },
    costs: {
      tuition: "$30,000 - $50,000 GBP per year",
      living: "$15,000 - $20,000 GBP per year",
      books: "$1,000 - $1,500 GBP per year",
      health: "Covered by NHS"
    },
    intakes: [
      { semester: "Michaelmas Term", period: "October - December", deadline: "October 15" },
      { semester: "Hilary Term", period: "January - March", deadline: "January 6" }
    ]
  },
  {
    id: 4,
    name: "Harvard University",
    country: "United States",
    city: "Cambridge",
    ranking: "#3 Global",
    qsRanking: "#5 QS World",
    image: "/src/assets/universities/harvard.jpg",
    website: "https://www.harvard.edu",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher education in the United States.",
    established: "1636",
    studentPopulation: "31,000+",
    internationalStudents: "5,000+",
    campuses: "1 main campus",
    tuitionRange: "$50,000 - $60,000 USD",
    acceptanceRate: "5%",
    studentRatio: "1:7",
    programs: ["Business", "Law", "Medicine", "Computer Science"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Oldest university in the United States",
      "World-renowned faculty and research",
      "Extensive alumni network",
      "Generous financial aid programs",
      "State-of-the-art facilities"
    ],
    faculties: [
      {
        name: "Harvard Business School",
        programs: ["MBA", "Executive Education", "Doctoral Programs", "Online Learning"],
        description: "World's leading business school"
      },
      {
        name: "Harvard Law School",
        programs: ["JD", "LLM", "SJD", "Executive Education"],
        description: "Premier law school with global influence"
      },
      {
        name: "Harvard Medical School",
        programs: ["MD", "PhD", "MD-PhD", "Master's Programs"],
        description: "Leading medical school and research institution"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school diploma with exceptional grades",
        "SAT or ACT scores",
        "TOEFL 100+ or IELTS 7.0+ for international students",
        "Strong extracurricular activities and essays"
      ],
      postgraduate: [
        "Bachelor's degree with outstanding academic record",
        "GRE/GMAT/LSAT depending on program",
        "TOEFL 100+ or IELTS 7.0+ for international students",
        "Research experience and strong recommendations"
      ]
    },
    costs: {
      tuition: "$50,000 - $60,000 USD per year",
      living: "$20,000 - $25,000 USD per year",
      books: "$1,000 - $1,500 USD per year",
      health: "$1,500 - $2,000 USD per year"
    },
    intakes: [
      { semester: "Fall Semester", period: "September - December", deadline: "January 1" },
      { semester: "Spring Semester", period: "January - May", deadline: "November 1" }
    ]
  },
  {
    id: 5,
    name: "University of Sydney",
    country: "Australia",
    city: "Sydney",
    ranking: "#19 Global",
    qsRanking: "#41 QS World",
    image: "/src/assets/universities/melbourne.jpg",
    website: "https://www.sydney.edu.au",
    description: "The University of Sydney is a public research university located in Sydney, Australia. Founded in 1850, it is the first university in Australia and is regarded as one of the world's leading universities.",
    established: "1850",
    studentPopulation: "70,000+",
    internationalStudents: "22,000+",
    campuses: "10 campuses",
    tuitionRange: "$32,000 - $48,000 AUD",
    acceptanceRate: "65%",
    studentRatio: "1:20",
    programs: ["Engineering", "Business", "Medicine", "Arts", "Law"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Australia's first university",
      "Beautiful sandstone campus",
      "Strong research output",
      "Excellent graduate employability",
      "Diverse international community"
    ],
    faculties: [
      {
        name: "Faculty of Engineering",
        programs: ["Aerospace Engineering", "Chemical Engineering", "Civil Engineering", "Software Engineering"],
        description: "Leading engineering programs with industry connections"
      },
      {
        name: "University of Sydney Business School",
        programs: ["MBA", "Bachelor of Commerce", "Master of Commerce", "Master of Professional Accounting"],
        description: "AACSB and EQUIS accredited business school"
      },
      {
        name: "Sydney Medical School",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Health Sciences"],
        description: "Comprehensive health sciences education"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school completion with strong grades",
        "IELTS 6.5 (no band less than 6.0) or equivalent",
        "ATAR score of 75+ (for Australian students)",
        "Portfolio or interview for some programs"
      ],
      postgraduate: [
        "Bachelor's degree with credit average",
        "IELTS 6.5 (no band less than 6.0) or equivalent",
        "Professional experience for some programs",
        "GMAT for MBA program"
      ]
    },
    costs: {
      tuition: "$32,000 - $48,000 AUD per year",
      living: "$20,000 - $27,000 AUD per year",
      books: "$1,500 - $2,500 AUD per year",
      health: "$460 AUD per year"
    },
    intakes: [
      { semester: "Semester 1", period: "February - June", deadline: "January 31" },
      { semester: "Semester 2", period: "August - November", deadline: "June 30" }
    ]
  },
  {
    id: 6,
    name: "University of British Columbia",
    country: "Canada",
    city: "Vancouver",
    ranking: "#34 Global",
    qsRanking: "#47 QS World",
    image: "/src/assets/universities/toronto.jpg",
    website: "https://www.ubc.ca",
    description: "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia, Canada. Established in 1908, UBC is British Columbia's oldest university.",
    established: "1908",
    studentPopulation: "66,000+",
    internationalStudents: "17,000+",
    campuses: "2 campuses",
    tuitionRange: "$28,000 - $38,000 CAD",
    acceptanceRate: "52%",
    studentRatio: "1:16",
    programs: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Beautiful Vancouver campus",
      "Strong research reputation",
      "Diverse student body",
      "Excellent co-op programs",
      "Sustainable campus initiatives"
    ],
    faculties: [
      {
        name: "Faculty of Applied Science",
        programs: ["Computer Engineering", "Electrical Engineering", "Materials Engineering", "Mining Engineering"],
        description: "Innovative engineering programs with co-op opportunities"
      },
      {
        name: "Sauder School of Business",
        programs: ["Bachelor of Commerce", "MBA", "Master of Business Analytics", "PhD in Business"],
        description: "Leading business school in Western Canada"
      },
      {
        name: "Faculty of Medicine",
        programs: ["Medicine", "Pharmacy", "Rehabilitation Sciences", "Population and Public Health"],
        description: "Comprehensive health sciences programs"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school completion with minimum 84% average",
        "IELTS 6.5 (no band less than 6.0) or TOEFL 90",
        "Subject prerequisites for specific programs",
        "Personal profile and supplemental application"
      ],
      postgraduate: [
        "Bachelor's degree with minimum B+ average",
        "IELTS 6.5 or TOEFL 90+",
        "GRE/GMAT for some programs",
        "Research proposal for research-based programs"
      ]
    },
    costs: {
      tuition: "$28,000 - $38,000 CAD per year",
      living: "$15,000 - $22,000 CAD per year",
      books: "$1,500 - $2,500 CAD per year",
      health: "$300 CAD per year"
    },
    intakes: [
      { semester: "Winter Session", period: "September - April", deadline: "January 15" },
      { semester: "Summer Session", period: "May - August", deadline: "February 28" }
    ]
  },
  {
    id: 7,
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    ranking: "#2 Global",
    qsRanking: "#2 QS World",
    image: "/src/assets/universities/oxford.jpg",
    website: "https://www.cam.ac.uk",
    description: "The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world.",
    established: "1209",
    studentPopulation: "24,000+",
    internationalStudents: "8,000+",
    campuses: "1 main campus",
    tuitionRange: "$32,000 - $55,000 GBP",
    acceptanceRate: "25%",
    studentRatio: "1:12",
    programs: ["Mathematics", "Engineering", "Natural Sciences", "Computer Science", "Economics"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Second-oldest university in English-speaking world",
      "Outstanding research reputation",
      "College system of education",
      "Nobel Prize winners among faculty",
      "Historic and beautiful campus"
    ],
    faculties: [
      {
        name: "Faculty of Engineering",
        programs: ["Aerospace Engineering", "Chemical Engineering", "Civil Engineering", "Information Engineering"],
        description: "World-leading engineering research and education"
      },
      {
        name: "Cambridge Judge Business School",
        programs: ["MBA", "Executive MBA", "Master in Finance", "Master in Management"],
        description: "Top-ranked business school with global reach"
      },
      {
        name: "School of Clinical Medicine",
        programs: ["Medicine", "Veterinary Medicine", "Graduate Medicine", "Clinical Research"],
        description: "Premier medical education and research"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "A-levels: A*A*A or equivalent international qualifications",
        "IELTS 7.5 (no band less than 7.0) or equivalent",
        "Cambridge admissions assessments",
        "Interview as part of selection process"
      ],
      postgraduate: [
        "First-class honours degree or equivalent",
        "IELTS 7.5 (no band less than 7.0) or equivalent",
        "Research proposal for PhD programs",
        "Strong academic references"
      ]
    },
    costs: {
      tuition: "$32,000 - $55,000 GBP per year",
      living: "$12,000 - $18,000 GBP per year",
      books: "$1,000 - $1,500 GBP per year",
      health: "Covered by NHS"
    },
    intakes: [
      { semester: "Michaelmas Term", period: "October - December", deadline: "October 15" },
      { semester: "Lent Term", period: "January - March", deadline: "January 15" }
    ]
  },
  {
    id: 8,
    name: "Stanford University",
    country: "United States",
    city: "Stanford",
    ranking: "#5 Global",
    qsRanking: "#6 QS World",
    image: "/src/assets/universities/harvard.jpg",
    website: "https://www.stanford.edu",
    description: "Stanford University is a private research university in Stanford, California. Founded in 1885, it is one of the world's leading universities and is known for its entrepreneurial character and proximity to Silicon Valley.",
    established: "1885",
    studentPopulation: "17,000+",
    internationalStudents: "3,500+",
    campuses: "1 main campus",
    tuitionRange: "$55,000 - $65,000 USD",
    acceptanceRate: "4%",
    studentRatio: "1:5",
    programs: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
    level: ["Bachelor", "Master", "PhD"],
    highlights: [
      "Gateway to Silicon Valley",
      "Outstanding entrepreneurship programs",
      "World-class research facilities",
      "Strong industry connections",
      "Beautiful California campus"
    ],
    faculties: [
      {
        name: "School of Engineering",
        programs: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Bioengineering"],
        description: "Leading engineering school with Silicon Valley connections"
      },
      {
        name: "Stanford Graduate School of Business",
        programs: ["MBA", "MSx", "PhD", "Executive Programs"],
        description: "Top-ranked business school fostering innovation"
      },
      {
        name: "School of Medicine",
        programs: ["Medicine", "Biomedical Informatics", "Health Research and Policy", "Neurosciences"],
        description: "Cutting-edge medical education and research"
      }
    ],
    admissionRequirements: {
      undergraduate: [
        "High school diploma with outstanding academic record",
        "SAT or ACT scores",
        "TOEFL 100+ or IELTS 7.0+ for international students",
        "Exceptional extracurricular achievements"
      ],
      postgraduate: [
        "Bachelor's degree with excellent grades",
        "GRE/GMAT/LSAT depending on program",
        "TOEFL 100+ or IELTS 7.0+ for international students",
        "Strong research background and recommendations"
      ]
    },
    costs: {
      tuition: "$55,000 - $65,000 USD per year",
      living: "$25,000 - $30,000 USD per year",
      books: "$1,500 - $2,000 USD per year",
      health: "$2,000 - $3,000 USD per year"
    },
    intakes: [
      { semester: "Autumn Quarter", period: "September - December", deadline: "January 2" },
      { semester: "Winter Quarter", period: "January - March", deadline: "October 15" }
    ]
  }
];

export const getUniversityById = (id: number): University | undefined => {
  return universities.find(uni => uni.id === id);
};

export const getUniversitiesByCountry = (country: string): University[] => {
  if (!country) return universities;
  return universities.filter(uni => 
    uni.country.toLowerCase() === country.toLowerCase()
  );
};