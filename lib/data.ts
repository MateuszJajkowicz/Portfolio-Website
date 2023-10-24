import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiFillCar } from "react-icons/ai"
import { LuGraduationCap } from "react-icons/lu";
import kanban from "@/public/kanban_screenshot_1.png";
import ecommerce from "@/public/ecommerce_screenshot_1.png";
import lovelee from "@/public/lovelee_screenshot_1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Applied Computer Science",
    location: "Cracow University of Technology",
    description:
      "I have earned a Bachelor's degree with my 'Innovative Dating App' with a graduation score of 4.0.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Software developer and tester",
    location: "Comarch, Cracow",
    description:
      "Stack: Angular6, AngularJS, RxJS, Angular Material. We were migrating an invoice app from AngularJS to Angular6. That's where I really got to know Angular.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2019 - March 2020",
  },
  {
    title: "Car Detailing & Wrapping",
    location: "",
    description:
      "I had a break from programming during which I did something I always wanted to try, namely working in car detailing and gaining new experiences in life.",
    icon: React.createElement(AiFillCar),
    date: "June 2020 - March 2022",
  },
  {
    title: "Full-Stack Developer - Trainee",
    location: "Codelab, Remote",
    description:
      "Stack: Angular13, AngularJS, RxJS, Java, Spring Boot, Angular Material. We were migrating an in-house CV app from AngularJS to Angular13. That was my first commercial encounter with Java and Spring Boot.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - September 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Kanban",
    description:
      "Inspired by Trello. Web application for managing kanban boards.",
    tags: ["Angular", "TypeScript", "Firebase", "Angular Material", "PWA"],
    imageUrl: kanban,
    href: "https://github.com/MateuszJajkowicz/Kanban"
  },
  {
    title: "E-Commerce-App",
    description:
      "Full featured shopping cart, product reviews and ratings, user profile with orders, admin management, checkout process, PayPal/credit card integration",
    tags: ["MongoDB", "Express", "React", "Node", "Redux", "Bootstrap"],
    imageUrl: ecommerce,
    href: "https://github.com/MateuszJajkowicz/MERN-Stack-E-Commerce-App"
  },
  {
    title: "LoveLee - Mobile Dating App",
    description:
      "A dating app different from all others, compared to others available on the market, is designed to increase users commitment to the relationship they are building.",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: lovelee,
    href: "https://github.com/MateuszJajkowicz/LoveLee-Dating-App"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Flutter/Dart",
  "Firebase",
  "MongoDB",
  "React",
  "Express",
  "Node.js",
  "Next.js - Learing",
  "Redux",
  "PostgreSQL",
  "Git",
  "Postman",
  "Swagger",
  "Angular Material",
  "Tailwind",
  "Framer Motion",
  "Scrum",
  "Polish - Native",
  "English - C1",
] as const;
