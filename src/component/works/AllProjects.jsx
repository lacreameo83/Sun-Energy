import React from "react";
import { motion } from "framer-motion";
import { workpicture } from "./workpicture";

function AllProjects() {
  // Parent container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Initial delay for better visibility of stagger
        staggerChildren: 0.25, // Time delay between each child animation
      },
    },
  };

  // Child elements' animation
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="flex bg-black flex-col gap-10 overflow-x-hidden mt-10">
      <p className="text-center font-bold text-[20px] text-[#34bbb4] ">
        Some of Our projects
      </p>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animates only when the section is in view
        viewport={{ once: true, amount: 0.1 }} // Triggers when 10% of section is in view
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 p-10 gap-8"
      >
        {workpicture.map((img, index) => (
          <motion.div
            key={index}
            variants={childVariants} // Apply only child variants
            className=" h-[30vh] sm:h-[50vh] object-cover  rounded-lg  "
          >
            <img
              src={img.image}
              alt={`Image ${index}`}
              className=" h-full w-full "
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default AllProjects;
