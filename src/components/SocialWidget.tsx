"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaCommentDots, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SocialWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // WhatsApp logic
  const waPhoneNumber = "2348102654479";
  const waMessage = encodeURIComponent(
    "Hey Israel, I just visited your site. I'm looking to [build an MVP / automate my workflow] and need a partner who moves fast. Are you available to chat?"
  );
  const whatsappUrl = `https://wa.me/${waPhoneNumber}?text=${waMessage}`;

  const telegramUrl = `https://t.me/izzydevbuilds?text=${waMessage}`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  // Auto-open and close effect
  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsOpen(true), 3000);
    const timer2 = setTimeout(() => setIsOpen(false), 5000); // Close after 2 seconds open
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.8, y: 10 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Telegram */}
            <motion.a
              variants={itemVariants}
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#0077b5] focus:outline-none focus:ring-4 focus:ring-[#0088cc]/30"
              aria-label="Chat on Telegram"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setHasInteracted(true)}
            >
              <FaTelegramPlane className="h-6 w-6" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20b857] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
              aria-label="Chat on WhatsApp"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setHasInteracted(true)}
            >
              <FaWhatsapp className="h-6 w-6" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={
          !isOpen && !hasInteracted
            ? {
                rotate: [0, -10, 10, -10, 10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                },
              }
            : {}
        }
        aria-label="Contact Support"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="h-6 w-6 text-gray-800" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaCommentDots className="h-7 w-7 text-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && !hasInteracted && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm"
          >
            1
          </motion.span>
        )}
      </motion.button>
    </div>
  );
};

export default SocialWidget;
