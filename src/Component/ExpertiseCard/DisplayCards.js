import {
  Atom,          // for React
  FileCode,      // for JavaScript
  CupSoda        // symbolic for Java
} from "lucide-react";

import { DisplayCard } from "./DisplayCard";

const data = [
  {
    title: "React",
    description: "Passionate about UI/UX. Over experience in HTML, CSS, JS, React  frameworks.",
    date: "",
    Icon: Atom, // Looks like React
  },
  {
    title: "JavaScript",
    description: "JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites.",
    date: "",
    Icon: FileCode, // Looks like a JS file
  },
  {
    title: "Java",
    description: "Java is a high-level, object-oriented programming language designed for portability, scalability, and building cross-platform applications.",
    date: "",
    Icon: CupSoda, // Can represent Java (like a coffee cup)
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
