import React from "react";
import { motion } from "framer-motion";

import "./section.css";

const Section = (props) => {
  // const style ={
  //     backgroundImage: `url('./images/${props.img}.jpg')`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  // }

  return (
    <section>
      <motion.div
        className="sect__text"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>{props.model}</h2>
        <p>{props.summary}</p>
      </motion.div>

      <motion.div
        className="sect__btns"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button>Order Now</button>
        <button>Learn More</button>
      </motion.div>
    </section>
  );
};

export default Section;
