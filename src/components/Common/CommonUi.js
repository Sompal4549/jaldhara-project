"use client";
import React from "react";
import { motion } from "framer-motion";
const CommonUi = ({ children, id }) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="w-full bg-primary animate__animated animate__bounce common-ui"
        id={id}
      >
        {/* Years of transforming... */}
        <div className="w-full relative h-full">{children}</div>
      </motion.div>
    </>
  );
};

export default CommonUi;
