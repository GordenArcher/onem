import { motion } from "framer-motion";
import { Features } from "../../constant/data/main/home";
import FeatureCard from "../../components/FeatureCard";

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  } as const;

  return (
    <section className="py-12">
      <div className="space-y-4 relative">
        <motion.div
          className="py-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h1 className="font-bold text-3xl text-center">
            Discover What Makes Us Stand Out
          </h1>
          <motion.div className="pt-2" variants={descriptionVariants}>
            <p className="font-normal text-[18px] text-center">
              Our platform is designed to simplify and secure the onboarding
              process. With powerful features like automated reminders, secure
              document submission, and personalized workflows, we ensure your
              team stays organized, efficient, and protected every step of the
              way.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-3.5 pt-3 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div
            className="w-full flex items-center justify-between gap-6"
            variants={containerVariants}
          >
            {Features.map((feature, index) => (
              <motion.div
                key={feature.id || index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="w-full"
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
