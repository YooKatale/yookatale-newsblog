import banana from '@public/ProductImages/banana.jpeg'
import mango from '@public/ProductImages/mango.jpeg'
import lemon from '@public/ProductImages/lemon.jpeg'
import orange from '@public/ProductImages/orange.jpeg'

export const jobCategories = [
  "Software Development",
  "Data Science",
  "Web Development",
  "Mobile App Development",
  "Product Management",
];

export const comments = [
  {
    id: 1,
    content: "This is a great article!",
    author: "JohnDoe",
    timestamp: "2023-07-31 12:00:00",
    replies: [
      {
        id: 101,
        content: "Thanks for your comment!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 12:05:00",
      },
      {
        id: 102,
        content: "Glad you liked it!",
        author: "AnotherUser",
        timestamp: "2023-07-31 12:10:00",
      },
    ],
    likes: 15,
  },
  {
    id: 2,
    content: "Nice work, keep it up!",
    author: "JaneSmith",
    timestamp: "2023-07-31 12:30:00",
    replies: [
      {
        id: 201,
        content: "Thank you, Jane!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 12:32:00",
      },
    ],
    likes: 8,
  },
  {
    id: 3,
    content: "I have a question about this topic.",
    author: "Questioner123",
    timestamp: "2023-07-31 14:00:00",
    replies: [
      {
        id: 301,
        content: "Sure, feel free to ask!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 14:05:00",
      },
      {
        id: 302,
        content: "I'm curious too, waiting for the answer!",
        author: "CuriousMind",
        timestamp: "2023-07-31 14:10:00",
      },
    ],
    likes: 12,
  },
  {
    id: 4,
    content: "Well written! I learned a lot.",
    author: "LearningLover",
    timestamp: "2023-07-31 15:00:00",
    replies: [],
    likes: 20,
  },
  {
    id: 5,
    content: "Could you provide more examples?",
    author: "ExampleSeeker",
    timestamp: "2023-07-31 16:00:00",
    replies: [
      {
        id: 501,
        content: "Certainly! Here's an additional example...",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 16:05:00",
      },
    ],
    likes: 5,
  },
];

export const jobs = [
  {
    _id: "1",
    title: "Graphic Designer",
    category: "Design",
    reportsTo: "Project Manager",
    employment: "Paid internship",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Uganda",
    details: {
      responsibilities: [
        "Illustrate written concepts by design",
        "Plan and study concepts",
        "Create a variety of company work",
        "Review layouts & improvements",
        "Digitally market company products & services",
        "Visit clients and offer different services",
        "Communicate to different audiences visually",
        "Additional skills are a plus 1",
      ],
      requirements: [
        "Creative ,curious and a good team player",
        "Digital Media experience",
        "Experience in seo, visual story telling",
        "Experience in motion and design",
        "Super interpersonal skills, listening & more",
        "Photoshop, illustrator & video editing & more",
        "Competency in Microsoft applications",
        "Clear understanding of marketing, production, corporate identity, packaging, advertisements & multi-media design",
        "A bachelor degree in design or marketing or a related field",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
  {
    _id: "2",
    title: "Junior developer",
    category: "Software development",
    reportsTo: "Product Designer",
    employment: "Paid internship",
    terms: "Fixed contract [3-12months]",
    location: "Kampala, Uganda",
    details: {
      responsibilities: [
        "Writing & maintaining code",
        "Bug fixing",
        "Create small creative solutions",
        "Work with developing manager in all aspects",
        "Monitor Technical performance of systems",
        "Conduct development tests",
        "Gather customer feedback about program functionality",
        "Customer care & technical assistance",
      ],
      requirements: [
        "Creative curiosity",
        "Clear execution knowledge",
        "Sound programming experience",
        "Excellent communication skills",
        "Bachelor’s degree in computer science",
        "Prior experience in IOS & Android development",
        "Clear practical Coding knowledge React Js, next Js , node Js front & backend",
        "Clear knowledge of email systems & Microsoft office software",
        "Good team player",
        "Quick to learn new software & technologies",
        "Good Digital experience knowledge",
        "Any extra skills are a plus 1",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "1 month probation",
    closingDate: "21st August 2023.",
  },
  {
    _id: "3",
    title: "Sales person",
    category: "Sales",
    reportsTo: "Director of sales",
    employment: "Part time",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Ntinda & Entebbe",
    details: {
      responsibilities: [
        "Generate both online and offline leads",
        "Door-to-door sales",
        "Develop digital communities",
        "Promote company programs",
        "Negotiate with clients and answer questions",
        "Attend events for brand promotions",
        "Visit clients and offer different services",
        "Find out different client needs",
        "Additional skills are a plus 1",
      ],
      requirements: [
        "Creative, curious and a good team player",
        "Digital Media experience",
        "Experience in sales",
        "Super interpersonal skills, quick rapport",
        "Committed to excellent customer service",
        "Competency in Microsoft applications",
        "Excellent written and verbal skills",
        "A bachelor degree in business, agriculture or marketing or a related field",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },

  {
    _id: "5",
    title: "Regional Manager",
    category: "Management",
    reportsTo: "CEO",
    employment: "Paid internship",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Ntinda & Entebbe",
    details: {
      responsibilities: [
        "Achieving business goals and revenue targets",
        "Overseeing daily operations, managing budgets, and setting performance objectives",
        "Recruiting, training, and supporting general managers as well as conducting regular performance appraisals",
        "Handling corporate sales & clients",
        "Developing and implementing business, marketing, and advertising plans",
        "Managing internal and external stakeholder relations and negotiating contracts",
        "Planning, evaluating, and optimizing operations to be efficient and cost-effective",
        "Ensuring products and services comply with regulatory and quality standards",
        "Ensuring company standards and procedures are followed",
        "Preparing and presenting monthly, quarterly, and annual statements, analyses, and reports of operations and finances",
        "Dealing with escalated customer issues, incident reports, and legal actions",
      ],
      requirements: [
        "Digital knowledge/ experience",
        "Accounting experience",
        "Sales & marketing experience",
        "Experience in leadership",
        "Excellent communication skills, both verbal and written",
        "Proficiency in Microsoft Office, with CRM systems, and project management tools",
        "Excellent prioritization and decision-making skills",
        "Ability to multitask and work efficiently under pressure",
        "Strong analytical and problem-solving skills",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
];


export const products = [
  {
    id: 1,
    image: banana,
    name: "Bananas",
    price: 5000,
    description: "Sweet and ripe yellow Bananas"
  },
  {
    id: 2,
    image: mango,
    name: "Mangoes",
    price: 10000,
    description: "Sweet and ripe mangoes for juice"
  },
  {
    id: 3,
    image: orange,
    name: "Oranges",
    price: 5000,
    description: "Sweet and ripe oranges for juice"
  },
  {
    id: 4,
    image: lemon,
    name: "Lemons",
    price: 5000,
    description: "These are fresh lemons"
  },
]
