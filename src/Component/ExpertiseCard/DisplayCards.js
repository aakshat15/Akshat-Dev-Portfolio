import {
  Server,
  Database,
  Cloud,
  Layout,
  Atom,          // for React
  FileCode,      // for JavaScript
  CupSoda        // symbolic for Java
} from "lucide-react";

import { DisplayCard } from "./DisplayCard";

const data = [
  {
    title: "React.js",
    description:
      "Experienced in building modern, responsive, and dynamic user interfaces using React.js, Redux, Zustand, and Context API. Skilled in creating reusable components and integrating APIs.",
    date: "",
    Icon: Atom, // Represents React
  },
  {
    title: "JavaScript",
    description:
      "Proficient in JavaScript (ES6+) for developing interactive, scalable, and high-performance web applications. Strong understanding of DOM manipulation, asynchronous programming, and modern JS frameworks.",
    date: "",
    Icon: FileCode, // Represents JavaScript
  },
  {
    title: "Java",
    description:
      "Solid foundation in Java for object-oriented programming, algorithms, and building cross-platform applications. Familiar with core concepts like OOP, exception handling, and data structures.",
    date: "",
    Icon: CupSoda, // Represents Java (coffee cup)
  },
  {
    title: "Node.js & Express.js",
    description:
      "Hands-on experience with backend development using Node.js and Express.js. Skilled in building RESTful APIs, authentication (JWT), real-time communication (Socket.IO), and integrating databases.",
    date: "",
    Icon: Server, // Backend/server icon
  },
  {
    title: "Databases (SQL & NoSQL)",
    description:
      "Practical experience with MySQL, PostgreSQL, and MongoDB for designing schemas, writing queries, and managing data efficiently. Familiar with Prisma, Sequelize, and Mongoose for ORM/ODM.",
    date: "",
    Icon: Database, // Database icon
  },
  {
    title: "UI/UX & Animation",
    description:
      "Experienced with modern UI frameworks like Material UI, Tailwind CSS, and Bootstrap. Passionate about delivering engaging experiences using Framer Motion animations.",
    date: "",
    Icon: Layout, // UI/UX icon
  },
];


export default function CardList() {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {data.map((item, idx) => (
    <div  key={idx} className="max-w-sm mx-auto">
      <DisplayCard {...item} className="text-base" />
    </div>
  ))}
</div>
  );
}
