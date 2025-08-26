import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Mic } from "lucide-react";

export const DATA = {
  name: "Samuel Forrest",
  initials: "SF",
  url: "https://samuelforrest.me",
  location: "Teddington, London",
  locationLink: "https://www.google.com/maps/place/Teddington/",
  description:
    "An aspiring Software Engineer and Entrepreneur, studying Maths, Physics, Computer Science, and EPQ at A Level. Private Tutor & Web Developer. Applying to Degree Apprenticeships & University.",
  summary:
    "I started coding when I was 10, adventuring into HTML, CSS and Javascript. Fast forward to now I'm 17, studying A Levels at [St George's College, Weybridge](/#education),  while building [Tradelingo, an educational trading app for Gen Z](https://tradelingo.samuelforrest.me). Along the way, [I've completed work experience](/#work) with British Airways, the AIIB, Amazon, HUDJO and Virgin Atlantic, while building my skills in teaching and communication as a tutor and developer. I have also participated in Hackathons, worked on [projects](/#projects) and enjoyed my [extracurriculars.](/#extracurriculars)\n\nDo view my [Computing, AI and Aviation Blog.](/blog)",
  avatarUrl: "/samuel-forrest-april-2025.webp",
  skills: [
    "JavaScript",
    "TypeScript",
    "Git/Github",
    "TailwindCSS",
    "NativewindCSS",
    "React",
    "Next.js",
    "APIs",
    "CI/CD",
    "Supabase",
    "Firebase",
    "Databases",
    "SQL",
    "Google Cloud",
    "SEO",
    "Python",
    "Microsoft Office",
    "Notion",
    "VSCode",
    "Claude/Openai/Gemini",
    "Analytical & Research Skills"
  ],
  interpersonalskills: [
    "Communication",
    "Time Management",
    "Organisation",
    "Presentation Skills",
    "Analytical Thinking",
    "Client Communication",
    "Active Listening",
    "Teamwork",
    "Leadership",
    "Critical Thinking",
    "Multitasking",
    "Teaching",
    "Stress Management",
    "Collaboration"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sam@samuelforrest.me",
    tel: "07453446391",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/samuelforrest",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samueljforrest/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/samueljforrest/",
        icon: Icons.x,
        navbar: true,
      },
      Insta: {
        name: "Instagram",
        url: "https://instagram.com/samueljforrest/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:sam@samuelforrest.me",
        icon: Icons.email,
        navbar: true,
      },
      cv: {
        name: "CV",
        url: "https://samuelforrest.me/assets/cv.pdf",
        icon: Icons.cv,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Superprof",
      href: "https://superprof.com",
      badges: [],
      location: "Remote",
      title: "Private Tutor",
      logoUrl: "/superprof.webp",
      start: "Sep 2024",
      end: "Present",
      description:
        "Delivering one-to-one tutoring to Computer Science students from diverse backgrounds, including those with special educational needs (SEND). Over 45 hours of lessons given to date. I strengthened key interpersonal skills such as clear communication, strucutred lesson planning, time management and the ability to provide empathetic and tailored constructive feedback.",
    },
    {
      company: "Freelance Web Developer",
      href: "/#projects",
      badges: [],
      location: "Remote",
      title: "Full-stack",
      logoUrl: "/webdeveloper.webp",
      start: "March 2025",
      end: "Present",
      description:
        "Designed, coded and deployed responsive websites for 3 paying clients, using TailwindCSS, React, Next.js, Supabase, Gemini API, Google Analytics, and integrating features such as authentication, admin dashboards, blogs and AI summaries. Client projects available below. I communicated directly with clients to gather requeirements and to provide progress updates throughout the development process and support to maintain the websites, strengthening client communication, active listening and problem-solving skills.",
    },
    {
      company: "Incoming WEX",
      href: "https://britishairways.com",
      badges: [],
      location: "In-person work experience",
      title: "In-person work expereicence",
      logoUrl: "/britishairways.webp",
      start: "August 2025",
      end: "August 2025",
      description:
        "Incoming Work Experience at British Airways.",
    },
    {
      company: "JPMorgan & Chase",
      badges: [],
      href: "https://jpmorganchase.com",
      location: "Remote",
      title: "Software Engineer Job Simulation",
      logoUrl: "/jpmc.webp",
      start: "August 2025",
      end: "August 2025",
      description:
        "JPMorgan & Chase Job Simulation on Forage",
    },
    {
      company: "Step into Bath",
      badges: [],
      href: "https://bath.ac.uk",
      location: "In Person",
      title: "In person residential course",
      logoUrl: "/bath.webp",
      start: "July 2025",
      end: "July 2025",
      description:
        "Selected to attend the competitive Step into Bath residential summer school for Year 12 students, living in undergraduate accomodation and participating in social and networking events with current students and fellow applicants. I engaged in science-specific taster lectures and recieved tailored advice from admissions tutors on personal statements and competitive university applications.",
    },
    {
      company: "Amazon",
      badges: [],
      href: "https://amazon.co.uk",
      location: "Virtual",
      title: "Virtual work experience",
      logoUrl: "/amazon.webp",
      start: "July 2025",
      end: "July 2025",
      description:
        "This virtual experience provided valuable insights into the wide range of careers available at Amazon and Amazon Web Services (AWS), with an optional focused module on AI knowledge validation. I particularly enjoyed the module on Computer Science careers and degree apprenticeships, which deepened my understanding of the various pathways I can take into the tech industry and the in-demand skills. The transferrable employability skills module allowed me to evaluate which soft and technical skills I have strengths and weaknesses in, helping me to become more well-rounded.",
    },
    {
      company: "Air Accidents Investigation Branch",
      badges: [],
      href: "https://www.gov.uk/government/organisations/air-accidents-investigation-branch",
      location: "Virtual",
      title: "In-person work experience",
      logoUrl: "/aaib.webp",
      start: "July 2025",
      end: "July 2025",
      description:
        "Gained first-hand insight into how air crashes are investigated in the UK, by examining black box data, aircraft systems data and inspeting recovered aircraft in the AAIB hangar. I strengthened my attention to detail, technical observation and professional communication skills in such a serious and sensitive safety-critical work environment.",
    },
    {
      company: "HUDJO",
      badges: [],
      href: "https://hudjo.com",
      location: "Virtual",
      title: "Shadowed a founding software engineer",
      logoUrl: "/hudjo.webp",
      start: "August 2024",
      end: "October 2024",
      description:
        "Explored cross-platform mobile app development by shadowing a startup developer at HUDJO, an app focused on bike parking solutions at local buisnesses in London, which recently recieved funding from Deliveroo. I was introduced to Javascript, Typescript and the Expo framwork, learning how cross-platform apps are built, from a former Google & Yandex software engineer.",
    },
    {
      company: "VATSIM",
      badges: [],
      href: "https://vatsim.net",
      location: "Virtual",
      title: "Virtual Pilot & Air Traffic Controller",
      logoUrl: "/vatsim.webp",
      start: "Jul 2023",
      end: "Present",
      description:
        "Flight simulation enthusiast, an active member of VATSIM as a pilot and air traffic controller, developing strong multitasking, quick decision-mkaing and stress management skills as I work towards becoming an S1 controller at vACC Switzerland (part of Vatsim Europe)",
    },
    {
      company: "Virgin Atlantic x Kingston University",
      badges: [],
      href: "https://virginatlantic.com",
      location: "Virtual",
      title: "In-person residential course",
      logoUrl: "/virgin.webp",
      start: "August 2024",
      end: "August 2024",
      description:
        "I gained practical and theoretical insight into aerodynamics and aerospace engineering, with hands-on experience with flight simulators and wind tunnel experiments at Kingston University, London. I led a 4-person team during design and presented a glider to an audienece of 100+ students; won the final competition, showcasing teamwork, leadership, problem-solving and perseverance.",
    },
    {
      company: "Audio & Visuals Team",
      badges: [],
      href: "https://stmichaelsfulwell.co.uk",
      location: "Virtual",
      title: "Long-term volunteering",
      logoUrl: "/stmichaels.webp",
      start: "December 2017",
      end: "June 2023",
      description:
        "I volunteered 2 hours every Sunday, managing the audio and visuals at the Church, dislaying song lyrics in sync with the band and ensuring balanced and clear sound levels of microphones and instruments. I developed technical sound skills in sound mixing, equipment setup and YouTube live-streaming, alongside developing critical thinking skills and remaining calm under pressure.",
    },
  ],
  education: [
    {
      school: "St George's College, Weybridge",
      href: "https://www.stgeorgesweybridge.com/",
      degree: "GCSE Grades: 9999999987 | A Levels: Computing (A*), Physics (A), Maths (B), EPQ (A) predicted",
      logoUrl: "/sgc.webp",
      start: "2024",
      end: "2026",
    },
    {
      school: "Newland House School, Teddington",
      href: "https://www.newlandhouse.net/",
      degree: "KS3 | Awards in Achievement, Mathematics, Geography, Computer Science, French.",
      logoUrl: "/nhs.webp",
      start: "2012",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Tradelingo",
      href: "https://tradelingo.samuelforrest.me/",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Tradelingo is an educational trading app for Gen Z. It is currently in a private Alpha. It is being developed for my Computer Science NEA.",
      technologies: [
        "React Native",
        "Typescript",
        "Javascript",
        "Firebase",
        "NativewindCSS",
        "SQL",
        "Figma"
      ],
      links: [
        {
          type: "Website",
          href: "https://tradelingo.samuelforrest.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tradelingo.webp",
    },
    {
      title: "Bio News Weekly",
      href: "https://companycritique.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "Built a website for a paying client for them to public biology news articles using a custom portal. Featured in my Blog.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Gemini API",
        "Supabase",
        "Netlify",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bionewsweekly.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/samuelforrest/bionewsweekly.com",
          icon: <Icons.github className="size-3" />,
        },
                {
          type: "Blog",
          href: "",
          icon: <Icons.blog className="size-3" />,
        },
      ],
      image: "/bionewsweekly.webp",
      
    },
    {
      title: "Verda: AI CO2 emissions calculator & ML Trash sorter",
      href: "https://github.com/samuelforrest/verdapp.xyz",
      dates: "May 2025",
      active: true,
      description:
        "Winning Hackathon Project, KTHack25, made by my teammate and I.",
      technologies: [
        "Next.js",
        "Gemini API",
        "Supabase",
        "Vercel",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://verdapp.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/samuelforrest/verdapp.xyz",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/",
          icon: <Icons.blog className="size-3" />,
        },
      ],
      image: "/logo-verdapp.webp",
    },
    {
      title: "Zoe Cat Care",
      href: "https://www.wapprentice.app/",
      dates: "July 2025",
      active: true,
      description:
        "Designed and built a website for a Cat Carer, constantly providing updates to the client and ensuring the website met their expectations. Notebaly, SEO was greatly improved.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.zoecc.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/samuelforrest/ZoeCC.co.uk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zoecc.webp",
    },    
    {
      title: "ScreenFine",
      href: "https://www.leaf-network.org",
      dates: "May 2025",
      active: true,
      description:
        "ScreenFine is a conceptual app idea, where the user has to pay to extend their screen time limits. I will likely build when I have more time on my hands. ",
      technologies: [
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://screenfine.netlify.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/screenfine.webp",
    },
    {
      title: "The Revision Podcast",
      href: "https://therevisionpodcast.netlify.app",
      dates: "April 2025 - Present",
      active: true,
      description:
        "With the use of advanced AI, I have created a podcast in which 2 AI hosts discuss topics, or entire sylabbuses for A level and GCSE subjects, helping students who are auditory learners.",
      technologies: [
        "Podcasting",
        "Spotify",
        "Google NotebookLM",
        "ChatGPT",
      ],
      links: [
        {
          type: "Website",
          href: "https://therevisionpodcast.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Podcast",
          href: "https://open.spotify.com/show/568FPtKmIlTgWgaDAfap03?si=dd19efa73db94ba2",
          icon: <Icons.mic className="size-3" />,
        }
      ],
      image: "/therevisionpodcast.webp",
    },
    {
      title: "EPQ",
      href: "https://therevisionpodcast.netlify.app",
      dates: "September 2024 - June 2025",
      active: true,
      description:
        "My EPQ had the question, 'to what extent is it feasible to reintroduce commercial supersonic transport by the Year 2040?'",
      technologies: [
        "Research Skills",
        "Presentation Skills",
        "Microsoft Word",

      ],
      links: [
        {
          type: "PDF Document",
          href: "https://therevisionpodcast.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://open.spotify.com/show/568FPtKmIlTgWgaDAfap03?si=dd19efa73db94ba2",
          icon: <Icons.blog className="size-3" />,
        }
      ],
      image: "/boom.webp",
    },
    {
      title: "Harvard CS50x Course",
      href: "https://therevisionpodcast.netlify.app",
      dates: "July 2024 - Present",
      active: true,
      description:
        "I am slowly working my way through the CS50x course, led by Professor David J. Malan",
      technologies: [
        "Python",
        "C",
        "SQL",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Master Repo",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cs50.webp",
    },
  ],
  extracurriculars: [
    {
      title: "Academic scholarship",
      location: "School",
      description:
        "My school awarded me an academic scholarship for outstanding performance inside and outside of class.",
      image:
        "/sgc.webp",
      links: [
      ],
    },
    {
      title: "Grade 7 Saxophone",
      location: "School",
      description:
        "I was awarded Grade 7 Saxophone by MTB. I participate regularly in Jazz Band and Concert Band, developing discipline, teamwork, confidence and performance skills.",
      image:
        "/mtb.webp",
      links: [
      ],
    },
    {
      title: "Grade 4 Piano",
      location: "Home",
      description:
        "Developed an AI chat Bot that blends humor, fun, and learning in a unique and interactive way. It uses engaging conversation techniques to motivate students and keep them focused while studying.",
      image:
        "/abrsm.webp",
      links: [
      ],
    },
    {
      title: "KTByte25 Hackathon Winner",
      location: "Online",
      description:
        "Developed Verda, an AI CO2 emission calculator and Machine Learning Trash sorter, winning KTHack25 £300 prize with my teammate.",
      image:
        "/kthack.webp",
      links: [
      ],
    },
    {
      title: "DofE Silver & Bronze",
      location: "In-person",
      description:
        "Completed 40 hours of volunteering and around 40 hours of skills (coding).  ",
      icon: "public",
      image:
        "/dofe.webp",
      links: [
      ],
    },
    {
      title: "100 WPM with 95% accuracy",
      location: "Online",
      description:
        "Average typing speed, on monkeytype.",
      image:
        "/monkeytype.webp",
      links: [
      ],
    },
    {
      title: "Bebras Challenge",
      location: "Online",
      description:
        "Yearly participation of Bebras Challenge in-school  ",
      icon: "public",
      image:
        "/bebras.webp",
      links: [
      ],
    },
    {
      title: "Senior UKMT - Bronze Award",
      location: "School",
      description:
        "I participate in the UK Maths Trust Challenge yearly, latest award was Bronze.",
      image:
        "/ukmt.webp",
      links: [
      ],
    },
    {
      title: "Listening to Podcasts",
      location: "Online",
      description:
        "I listen to podcasts daily, my favourites including the Diary of a CEO, Lightcone Podcast (Y-Combinator) and Mentour Piot",
      image:
        "/doac.webp",
      links: [
      ],
    },
    {
      title: "Bike Rides",
      location: "Home",
      description:
        "I cycled London to Brighton (£500 raised), London to Paris (£500 raised), London to Bath, and Vienna to Budapest via Bratislava (Danube River).",
      image:
        "/bike.webp",
      links: [
      ],
    },
    {
      title: "PC Building",
      location: "Home",
      description:
        "I've built PCs for myself, friends and family from scratch.",
      image:
        "/pc.webp",
      links: [
      ],
    },
    {
      title: "Rowing Club",
      location: "School",
      description:
        "Dedicated 8 hours a week to the Rowing Club from 2021-2025.",
      image:
        "/sgc.webp",
      links: [
      ],
    },
    {
      title: "Computer Science & Aviation Blog",
      location: "School",
      description:
        "Writing my opinions on the latest news.",
      image:
        "web-app-manifest-192x192.png",
      links: [
      ],
    },
    {
      title: "Apprentice Nation Mentee",
      location: "Online",
      description:
        "Apprentice Nation is an award-winning platform that unites major brands, top UK talent and the power of music to inspire and engage youth into careers they love.",
      image:
        "apprenticenation_logo.webp",
      links: [
      ],
    },
    {
      title: "Leaf Pathways Member",
      location: "Online",
      description:
        "A student network for aspiring young professionals/students for Law, Engineering/tech and Finance.",
      image:
        "leaf.webp",
      links: [
      ],
    },
  ],
} as const;
