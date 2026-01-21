import { Link } from "react-router-dom";
import type { FeaturesTypes } from "../types/home/shared";
import { motion } from "framer-motion";

const FeatureCard = ({
  icon: Icon,
  head,
  description,
  bg,
  color,
}: FeaturesTypes) => {
  const cardVariants = {
    initial: { opacity: 1 },
    hover: {
      boxShadow: "0 20px 40px rgba(0, 33, 82, 0.1)",
      borderColor: "#002152/10",
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  } as const;

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="w-full h-full p-4 rounded border border-[#E8E8E8] bg-white"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between flex-col gap-8">
        <motion.div
          className={`w-16 h-16 rounded-full flex items-center justify-center`}
          style={{ background: bg }}
          variants={iconVariants}
        >
          <Icon color={color} />
        </motion.div>

        <div className="py-1">
          <h2 className="font-semibold text-xl text-[#1F1F1F]">{head}</h2>
        </div>

        <div className="relative">
          <span className="text-[18px] font-normal leading-0">
            {description}
          </span>
        </div>

        <motion.div variants={linkVariants}>
          <Link
            to={"#"}
            className="text-blue-600 underline inline-flex items-center gap-2"
          >
            Learn more
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatDelay: 1,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
