"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While studying{" "}
        <span className="font-medium">Applied Computer Science</span>, I decided
        to pursue my passion for programming. <br /> I enrolled in a summer
        internship and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Angular and Firebase or MERN (MongoDB, Express, React and Node.js)
        </span>
        . I am also familiar with Flutter/Dart and a little bit of Next.js. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dogs. I also
        enjoy <span className="font-medium">learning new things</span>. I have
        always liked cars and can fix my{" "}
        <span className="font-medium">golf mk4 2.8l vr6</span>. <br /> I made my
        girlfriend a{" "}
        <span className="font-medium">
          ring and a pendant out of brass wire
        </span>
        . I&apos;m also learning French on duolingo.
      </p>
    </motion.section>
  );
}
