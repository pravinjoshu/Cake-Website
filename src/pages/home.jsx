import React from "react";
import { motion } from "framer-motion";
import Carousel from "../components/carousel/carousel.jsx";
import CakePrice from "../components/cake_price/cakePrice.jsx";

function Home() {
  return (
    <div>

    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <motion.h1
        className="animated-title"
        initial={{
          clipPath: "inset(0 100% 0 0)", // fully hidden from right side
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          clipPath: "inset(0 0% 0 0)", // reveal fully left → right
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        CAKE FOREST
      </motion.h1>

    </div>
      <div>
         <Carousel/>
      </div>
      <div>
        <CakePrice/>
      </div>
    </div>
  );
}

export default Home;
