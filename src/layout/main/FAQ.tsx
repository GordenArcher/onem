import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How can I contact support if I have issues with onboarding?",
      answer:
        "You can contact our support team by emailing support@company.com, calling our helpline at 1-800-123-4567, or using the live chat feature in the dashboard. Our team is available 24/7 to assist with any onboarding issues.",
    },
    {
      id: 2,
      question: "Is there a mobile app for this platform?",
      answer:
        "Yes! We have both iOS and Android mobile apps available for download. You can find them in the App Store and Google Play Store by searching for 'Our Platform Name'. The mobile app provides full access to onboarding tasks, notifications, and document submissions.",
    },
    {
      id: 3,
      question: "Can I customize onboarding tasks for specific roles?",
      answer:
        "Absolutely! Administrators can customize onboarding workflows for different roles. In the admin dashboard, navigate to 'Workflow Templates' where you can create role-specific templates, assign different tasks, set deadlines, and configure automated reminders for each position.",
    },
    {
      id: 4,
      question: "Is my personal information and document submission secure?",
      answer:
        "Security is our top priority. We use bank-level 256-bit SSL encryption for all data transmissions and store information in SOC 2 Type II certified data centers. All documents are encrypted at rest, and we comply with GDPR, CCPA, and other data protection regulations.",
    },
    {
      id: 5,
      question: "How do I receive reminders for deadlines?",
      answer:
        "Reminders are sent automatically via email and in-app notifications. You can customize reminder frequency in your notification settings—choose to receive alerts 7 days, 3 days, 1 day, and on the day of each deadline. Push notifications are also available if you use our mobile app.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[1401px] m-auto py-12">
      <section className="space-y-4 relative">
        <div className="p-2 text-center">
          <h4 className="text-[#002152] text-[32px] font-normal">
            Frequently Asked Questions
          </h4>
        </div>

        <div className="pt-12 max-w-[926px] m-auto">
          <div className="w-full flex flex-col gap-3 relative">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full"
              >
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex cursor-pointer items-center gap-1.5 justify-between px-3 py-4 hover:bg-gray-50 rounded transition-colors"
                  >
                    <div className="text-lg font-normal text-left">
                      {item.question}
                    </div>

                    <motion.div
                      animate={{ rotate: activeIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-1"
                    >
                      {activeIndex === index ? (
                        <Minus className="w-6 h-6 font-light text-[#002152]" />
                      ) : (
                        <Plus className="w-6 h-6 font-light text-[#002152]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-3 pb-4">
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-base leading-relaxed"
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="w-full h-0.5 bg-[#E8E8E8]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
