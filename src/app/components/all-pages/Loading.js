import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="loadingSquares">
      <div className="squaresContainer">
        <motion.div
          className="square"
          animate={{
            opacity: [1, 0, 1],
            backgroundColor: ["#000", "#fff", "#000"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
        <motion.div
          className="square"
          animate={{
            opacity: [1, 0, 1],
            backgroundColor: ["#000", "#fff", "#000"], 
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 0.2, 
          }}
        />
        <motion.div
          className="square"
          animate={{
            opacity: [1, 0, 1],
            backgroundColor: ["#000", "#fff", "#000"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
};