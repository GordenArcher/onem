import { PlayCircle, Star } from "lucide-react";
import HeroImage from "../../assets/images/hero.jpg";
import { CompanyRating } from "../../constant/data/main/home";
import Button from "../../components/shared/ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: 0.5,
      transition: { duration: 0.3 },
    },
  } as const;

  const ratingItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      transition: { duration: 0.2 },
    },
  } as const;

  const starVariants = {
    initial: { scale: 1 },
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 3,
      },
    }),
  } as const;

  return (
    <div className="w-full h-full relative">
      <motion.div
        className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-3.5 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full h-full">
          <motion.div
            className="flex items-start flex-col gap-4 relative"
            variants={containerVariants}
          >
            <motion.div className="space-y-13" variants={containerVariants}>
              <motion.div
                className="space-y-6 relative"
                variants={containerVariants}
              >
                <motion.h1
                  className="font-bold text-5xl max-md:text-3xl text-[#002152]"
                  variants={textVariants}
                >
                  Onboarding and Document Management Made Easy
                </motion.h1>

                <motion.p
                  className="font-normal text-[18px]"
                  variants={textVariants}
                  transition={{ delay: 0.1 }}
                >
                  Simplify onboarding workflows, automate notifications, and
                  ensure secure document submission—all in one place.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex items-center gap-2.5"
                variants={containerVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    handleClick={() => alert()}
                    title="get started"
                    className="px-7 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded duration-150 ease-out cursor-pointer"
                    children={"Get started"}
                  />
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    handleClick={() => alert()}
                    title="get started"
                    className="px-10 py-3 bg-transparent border border-blue-600 text-blue-600 rounded duration-150 ease-out cursor-pointer flex items-center gap-2.5 hover:bg-blue-50 transition-colors"
                    children={
                      <motion.div
                        className="flex items-center gap-2.5"
                        whileHover={{ gap: "15px" }}
                        transition={{ duration: 0.2 }}
                      >
                        <PlayCircle size={20} />
                        <span>Watch a Video</span>
                      </motion.div>
                    }
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full pt-4 py-1"
              variants={containerVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-3.5">
                {CompanyRating.map((rat) => {
                  return (
                    <motion.div
                      key={rat.id}
                      className="w-full h-full relative p-1"
                      variants={ratingItemVariants}
                      whileHover="hover"
                    >
                      <div className="flex items-center gap-1">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            className="w-[90px] h-[62px]"
                            draggable={false}
                            src={rat.image}
                            alt={rat.text}
                          />
                        </motion.div>

                        <div className="flex flex-col justify-between gap-2">
                          <h2 className="text-[#000000] font-normal text-[18px]">
                            {rat.text}
                          </h2>

                          <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                              {rat.ratingStar.map((st, index) => (
                                <motion.div
                                  key={st}
                                  custom={index}
                                  initial="initial"
                                  animate="animate"
                                  variants={starVariants}
                                >
                                  <Star
                                    size={10}
                                    color="#0052CC"
                                    fill="#0052CC"
                                  />
                                </motion.div>
                              ))}
                            </div>

                            <motion.div
                              className="h-4 w-0.5 bg-gray-400 block"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            />

                            <div>
                              <p className="text-[#525252] font-normal text-sm">
                                {rat.ratings_number}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-full"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative h-full overflow-hidden rounded-2xl">
            <motion.img
              src={HeroImage}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
              alt="hero image"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-transparent to-transparent pointer-events-none"
              whileHover={{
                background:
                  "linear-gradient(to top, rgba(0, 33, 82, 0.05), transparent)",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
