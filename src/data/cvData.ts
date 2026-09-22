export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrUniversity: string;
  year: string;
  percentage?: string;
  isDoctorate?: boolean;
  supervisor?: string;
  thesisTitle?: string;
  awardDate?: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  department?: string;
  institution: string;
  period: string;
  joiningDate?: string;
  employmentType?: string;
  roleType: 'faculty' | 'guest' | 'academic_duty';
}

export interface PublicationItem {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  volumeIssue?: string;
  pages?: string;
  indexing?: string;
  doi?: string;
  doiUrl?: string;
  bibtex: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  details: string;
  rank?: string;
  score?: string;
  percentile?: string;
  badge: string;
}

export interface SeminarItem {
  id: string;
  title: string;
  type: string;
  dates: string;
  organizer: string;
  location?: string;
  year: number;
}

export interface ProfessionalDevelopmentItem {
  id: string;
  title: string;
  role: 'Participated' | 'Organised' | 'Completed';
  dates: string;
  organizer: string;
  year: number;
  description?: string;
}

export interface ResearchTopic {
  id: string;
  title: string;
  summary: string;
  mathematicalContext: string;
  modelIcon: 'phase-portrait' | 'marine-reserve' | 'bifurcation' | 'population' | 'ecosystem' | 'sustainable-yield';
}

export const CV_DATA = {
  profile: {
    fullName: "Dr. Debabrata Das",
    title: "Assistant Professor (Grade I)",
    department: "Department of Mathematics",
    institution: "B. P. Poddar Institute of Management and Technology, Kolkata",
    address: "Kabi Sukanta Sarani, Kolkata-700127, India",
    phone: "(+91) 9051551676",
    email: "debuju84@gmail.com",
    institutionalEmail: "debabrata.das@bppimt.ac.in",
    cvDownloadPath: "/assets/Curriculum_Vitae.pdf",
    // Feature toggle: Set to true whenever you want to re-enable CV Download and Preview options
    enableCvDownloadAndPreview: false,
    photoPath: "/assets/profile.png",
    thematicEmphasis: "Mathematical Biology • Population Dynamics • Ecological Modelling • Fisheries Management • Stability & Bifurcation",
    careerObjective: "I am highly interested in the educational field. I aim to obtain an honorable faculty position in a reputed institution offering challenge, responsibility, and advancement opportunities while utilizing my best knowledge of academics.",
    declaration: "I hereby declare that the information furnished above is true to the best of my knowledge.",
    links: {
      googleScholar: {
        label: "Google Scholar",
        url: "https://scholar.google.co.in/citations?user=1S5qWtcAAAAJ&hl=en",
        placeholderKey: ""
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/debabrata-das-phd-481626307/",
        placeholderKey: ""
      },
      webpage: {
        label: "Personal Webpage",
        url: "",
        placeholderKey: "[ADD PERSONAL WEBPAGE URL]"
      }
    }
  },

  researchArea: {
    broadArea: "Mathematical Biology",
    description: "Investigation of deterministic non-linear dynamical systems arising in ecological communities and marine environments. Primary focus on stability analysis, Hopf and Bogdanov-Takens bifurcations, bio-economic harvesting strategies, marine reserve network design, and multi-species trophic interactions under harvesting and anthropogenic pressures.",
    keywords: [
      "Stability and bifurcation theory",
      "Population management",
      "Management and conservation of fisheries",
      "Ecosystem services",
      "Impact of maximum sustainable yield policy",
      "Designing marine protected areas"
    ],
    topics: [
      {
        id: "topic-1",
        title: "Stability and Bifurcation Theory",
        summary: "Analysis of non-linear differential equations governing trophic chains, identifying transcritical, saddle-node, and Hopf bifurcations, limit cycles, and regime shifts.",
        mathematicalContext: "dx/dt = f(x, y; μ), dy/dt = g(x, y; μ) with Jacobian evaluation J(E*) and characteristic eigenvalue spectra.",
        modelIcon: "bifurcation"
      },
      {
        id: "topic-2",
        title: "Management & Conservation of Fisheries",
        summary: "Bio-economic modeling of commercial fisheries, evaluating balanced harvesting schemes to preserve age/size structures and maintain ecological resilience.",
        mathematicalContext: "Coupled differential equations with Catch-per-Unit-Effort (CPUE) dynamics: H(t) = q E(t) x(t).",
        modelIcon: "marine-reserve"
      },
      {
        id: "topic-3",
        title: "Population Management & Ecological Services",
        summary: "Assessment of ecological systems incorporating infection, prey refuges, and invasive species disrupting ecosystem services in harvested food webs.",
        mathematicalContext: "Prey refuge parameterization: (1 - m)x representing accessible biomass subjected to holling-type functional responses.",
        modelIcon: "ecosystem"
      },
      {
        id: "topic-4",
        title: "Marine Protected Areas (MPAs) & Ecotourism",
        summary: "Designing reserve zoning with unharvested core zones and adjacent fishing / ecotourism grounds, theoretical modeling inspired by the Sundarbans.",
        mathematicalContext: "Two-patch dispersal system: dx₁/dt = f₁(x₁) - d(x₁ - x₂), dx₂/dt = f₂(x₂) - H - d(x₂ - x₁).",
        modelIcon: "phase-portrait"
      },
      {
        id: "topic-5",
        title: "Maximum Sustainable Yield (MSY) Policy",
        summary: "Evaluating the ecological consequences and overfishing risks associated with MSY policy compared to balanced multi-species harvest thresholds.",
        mathematicalContext: "Optimization of net economic yield: Π = (p q x - c) E subject to equilibrium biomass constraints.",
        modelIcon: "sustainable-yield"
      }
    ] as ResearchTopic[]
  },

  education: [
    {
      id: "edu-5",
      degree: "Ph.D. in Bio-Mathematics",
      institution: "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
      boardOrUniversity: "IIEST Shibpur",
      year: "2021",
      awardDate: "25th January 2021",
      isDoctorate: true,
      supervisor: "Professor Tapan Kumar Kar",
      thesisTitle: "Modelling Some Aspects of The Population Dynamics Relevant to The Management of Marine Fisheries"
    },
    {
      id: "edu-4",
      degree: "Master of Science (M.Sc.) in Mathematics",
      institution: "Jadavpur University",
      boardOrUniversity: "Jadavpur University",
      year: "2005–2007"
  
    },
    {
      id: "edu-3",
      degree: "Bachelor of Science (B.Sc.) in Mathematics",
      institution: "Jadavpur University",
      boardOrUniversity: "Jadavpur University",
      year: "2002–2005"
      
    },
    {
      id: "edu-2",
      degree: "Higher Secondary",
      institution: "West Bengal Council of Higher Secondary Education",
      boardOrUniversity: "WBCHSE",
      year: "2000–2002"
      
    },
    {
      id: "edu-1",
      degree: "Madhyamik",
      institution: "West Bengal Board of Secondary Education",
      boardOrUniversity: "WBBSE",
      year: "2000"
      
    }
  ] as EducationItem[],

  experience: [
    {
      id: "exp-1",
      position: "Asst. Professor (Grade I)",
      department: "Department of Mathematics",
      institution: "B. P. Poddar Institute of Management and Technology, Kolkata",
      period: "2008 – Present",
      joiningDate: "6th August 2008",
      employmentType: "Full time, Permanent",
      roleType: "faculty"
    },
    {
      id: "exp-2",
      position: "Moderator",
      institution: "St. Xavier's University Kolkata",
      period: "2022",
      roleType: "academic_duty"
    },
    {
      id: "exp-3",
      position: "Guest Faculty",
      department: "Department of Applied Optics and Photonics",
      institution: "University of Calcutta",
      period: "2020",
      roleType: "guest"
    },
    {
      id: "exp-4",
      position: "Examiner",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      period: "2010",
      roleType: "academic_duty"
    }
  ] as ExperienceItem[],

  publications: [
    {
      id: "pub-6",
      authors: "Das, Debabrata, Kar, T.K., and Pal, Debprasad",
      title: "The impact of invasive species on some ecological services in a harvested predator-prey system",
      journal: "Mathematics and Computers in Simulation",
      year: 2023,
      indexing: "SCI",
      doi: "10.1016/j.matcom.2023.04.024",
      doiUrl: "https://doi.org/10.1016/j.matcom.2023.04.024",
      bibtex: `@article{das2023impact,
  author = {Das, Debabrata and Kar, T. K. and Pal, Debprasad},
  title = {The impact of invasive species on some ecological services in a harvested predator-prey system},
  journal = {Mathematics and Computers in Simulation},
  year = {2023},
  doi = {10.1016/j.matcom.2023.04.024}
}`
    },
    {
      id: "pub-5",
      authors: "Das, Debabrata, Pal, Debprasad, Kar, T.K., and Chaudhuri, KS.",
      title: "Balanced harvesting in two predators one prey system",
      journal: "Journal of Applied Mathematics and Computing (J. Appl. Math. Comput.)",
      year: 2021,
      indexing: "SCI",
      doi: "10.1007/s12190-021-01538-5",
      doiUrl: "https://doi.org/10.1007/s12190-021-01538-5",
      bibtex: `@article{das2021balanced,
  author = {Das, Debabrata and Pal, Debprasad and Kar, T. K. and Chaudhuri, K. S.},
  title = {Balanced harvesting in two predators one prey system},
  journal = {Journal of Applied Mathematics and Computing},
  year = {2021},
  doi = {10.1007/s12190-021-01538-5}
}`
    },
    {
      id: "pub-4",
      authors: "Das, Debabrata, and Kar, T.K.",
      title: "Marine reserve and its consequences in a predator-prey system for ecotourism and fishing",
      journal: "International Journal of Mathematical Modelling and Numerical Optimisation",
      year: 2021,
      volumeIssue: "Vol. 11, No. 1",
      pages: "20–36",
      indexing: "Scopus",
      bibtex: `@article{das2021marine,
  author = {Das, Debabrata and Kar, T. K.},
  title = {Marine reserve and its consequences in a predator-prey system for ecotourism and fishing},
  journal = {International Journal of Mathematical Modelling and Numerical Optimisation},
  volume = {11},
  number = {1},
  pages = {20--36},
  year = {2021}
}`
    },
    {
      id: "pub-3",
      authors: "Kar, T.K., Das, Debabrata, and Pujaru, Kanisha",
      title: "Joint impact of fishing and ecotourism in the Sundarbans: a theoretical perspective",
      journal: "International Journal of Dynamics and Control",
      year: 2020,
      volumeIssue: "8(3)",
      pages: "792–804",
      indexing: "Scopus",
      bibtex: `@article{kar2020joint,
  author = {Kar, T. K. and Das, Debabrata and Pujaru, Kanisha},
  title = {Joint impact of fishing and ecotourism in the Sundarbans: a theoretical perspective},
  journal = {International Journal of Dynamics and Control},
  volume = {8},
  number = {3},
  pages = {792--804},
  year = {2020}
}`
    },
    {
      id: "pub-2",
      authors: "Das, Debabrata, and Kar, T.K.",
      title: "Feedback control and its impact on generalist predator–prey system with prey harvesting",
      journal: "Nonlinear Analysis: Modelling and Control",
      year: 2019,
      volumeIssue: "24, no. 5",
      pages: "718–732",
      indexing: "SCIE",
      bibtex: `@article{das2019feedback,
  author = {Das, Debabrata and Kar, T. K.},
  title = {Feedback control and its impact on generalist predator--prey system with prey harvesting},
  journal = {Nonlinear Analysis: Modelling and Control},
  volume = {24},
  number = {5},
  pages = {718--732},
  year = {2019}
}`
    },
    {
      id: "pub-1",
      authors: "Jana, S., Haldar, S., Das, Debabrata, Nandi, S. K., and Kar, T. K.",
      title: "Modeling and Analysis of an Ecological System Incorporating Infection and Prey Refuge",
      journal: "Biophysical Reviews and Letters",
      year: 2018,
      volumeIssue: "13(04)",
      pages: "195–216",
      bibtex: `@article{jana2018modeling,
  author = {Jana, S. and Haldar, S. and Das, Debabrata and Nandi, S. K. and Kar, T. K.},
  title = {Modeling and Analysis of an Ecological System Incorporating Infection and Prey Refuge},
  journal = {Biophysical Reviews and Letters},
  volume = {13},
  number = {04},
  pages = {195--216},
  year = {2018}
}`
    }
  ] as PublicationItem[],

  achievements: [
    {
      id: "ach-1",
      title: "GATE-2009 Examination",
      year: "2009",
      details: "Declared successful in the GATE-2009 examination in Mathematical Sciences.",
      rank: "All India Rank: 379",
      percentile: "85.91 percentile",
      score: "GATE score: 359",
      badge: "National Competitive Exam"
    },
    {
      id: "ach-2",
      title: "CSIR-UGC NET (Junior Research Fellowship & Lectureship)",
      year: "2011",
      details: "Qualified CSIR-UGC Test for Junior Research Fellowship and Eligibility for Lectureship (NET) held on 19-06-2011 in the subject MATHEMATICAL SCIENCE under eligibility for lectureship (NET) category only.",
      rank: "Rank: 0067/0374",
      badge: "CSIR-UGC National Qualification"
    }
  ] as AchievementItem[],

  seminars: [
    {
      id: "sem-4",
      title: "Mathophilia 2020: \"Mathematics & Mathematicians: from Vedic to Present Pandemic\"",
      type: "Two-Day International Webinar",
      dates: "July 11–12, 2020",
      year: 2020,
      organizer: "Department of Mathematics, Banwarilal Bhalotia College, Asansol, West Bengal, India"
    },
    {
      id: "sem-3",
      title: "Study and Analysis of Mathematical Models of Moving Boundary Problems",
      type: "One-Day Workshop",
      dates: "August 17, 2019",
      year: 2019,
      organizer: "Department of Mathematical Sciences, IIT (BHU)",
      location: "Varanasi"
    },
    {
      id: "sem-2",
      title: "Advance Numerical Schemes for Scientists and Engineers",
      type: "AICTE-Sponsored QIP-Short-Term Course",
      dates: "August 12–16, 2019",
      year: 2019,
      organizer: "Department of Mathematical Sciences, IIT (BHU)",
      location: "Varanasi"
    },
    {
      id: "sem-1",
      title: "Recent Advances In Modelling & Computational Techniques In Applied Mathematics",
      type: "Five-Day National Workshop",
      dates: "November 20–24, 2017",
      year: 2017,
      organizer: "Department of Mathematics, IIEST, Shibpur",
      location: "Howrah / Kolkata"
    }
  ] as SeminarItem[],

  professionalDevelopment: [
    {
      id: "pd-9",
      title: "NEP 2020 Orientation & Sensitization Programme",
      role: "Completed",
      dates: "20/05/2024 to 31/05/2024",
      year: 2024,
      organizer: "Malaviya Mission Teacher Training Centre (MMTTC), Jadavpur University under Malaviya Mission Teacher Training Programme (MM-TTP) of University Grants Commission (UGC)",
      description: "Comprehensive national education policy orientation program focusing on pedagogical transformation, interdisciplinary education, and research integration."
    },
    {
      id: "pd-8",
      title: "AICTE Training And Learning (ATAL) Academy Online Elementary FDP on \"ASTRONOMY, ASTROPHYSICS AND RELATED CHALLENGES\"",
      role: "Completed",
      dates: "04/01/2022 to 08/01/2022",
      year: 2022,
      organizer: "B.P. Poddar Institute of Management and Technology successfully",
      description: "Faculty development program investigating astrophysical modeling, computational challenges, and dynamical systems in celestial mechanics."
    },
    {
      id: "pd-7",
      title: "Short-term training program on \"Assessment and evaluation under outcome-based education\"",
      role: "Completed",
      dates: "10/06/2019 to 14/06/2019 (1 week)",
      year: 2019,
      organizer: "National Institute of Technical Teachers' Training & Research (NITTTR), Kolkata at BPPIMT",
      description: "One-week rigorous pedagogical training on curriculum design, Bloom's taxonomy mapping, and evaluation standards."
    },
    {
      id: "pd-6",
      title: "Workshop on \"Outcome Based Education\"",
      role: "Participated",
      dates: "24/04/2019 and 25/04/2019",
      year: 2019,
      organizer: "National Institute of Technical Teachers' Training & Research (NITTTR), Kolkata at BPPIMT"
    },
    {
      id: "pd-5",
      title: "One-day seminar on \"Operations Research and its Application\"",
      role: "Organised",
      dates: "12th August 2016",
      year: 2016,
      organizer: "B. P. Poddar Institute of Management and Technology at the institute seminar hall"
    },
    {
      id: "pd-4",
      title: "UGC-sponsored orientation program for college and university teachers",
      role: "Participated",
      dates: "14.07.2014 to 11.08.2014",
      year: 2014,
      organizer: "Jadavpur University UGC-Academic Staff College"
    },
    {
      id: "pd-3",
      title: "Conference on \"Challenges of Basic Research in Innovating Technologies\"",
      role: "Organised",
      dates: "4th May 2013",
      year: 2013,
      organizer: "Departments of Applied Sciences and Humanities of BPPIMT at the institute seminar hall"
    },
    {
      id: "pd-2",
      title: "One-week Staff development program on Matlab and LaTeX",
      role: "Participated",
      dates: "29.06.2011 to 05.07.2011",
      year: 2011,
      organizer: "B. P. Poddar Institute of Management and Technology (BPPIMT)"
    },
    {
      id: "pd-1",
      title: "Three-day staff development program on Linux operating system",
      role: "Participated",
      dates: "May 28 to May 5, 2010 (as recorded in CV)",
      year: 2010,
      organizer: "B. P. Poddar Institute of Management and Technology (BPPIMT)"
    }
  ] as ProfessionalDevelopmentItem[],

  languages: [
    { language: "Bengali", proficiency: "Mother tongue", badge: "Native" },
    { language: "English", proficiency: "Spoken, Reading and Writing", badge: "Professional" },
    { language: "Hindi", proficiency: "Spoken and Reading", badge: "Working Knowledge" }
  ],

  interests: [
    { name: "Volleyball", category: "Sport", icon: "volleyball" },
    { name: "Football", category: "Sport", icon: "football" },
    { name: "Detective Novels", category: "Literature", icon: "book" },
    { name: "Listening to Music", category: "Arts", icon: "music" }
  ]
};
