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
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-swiss-charcoal text-swiss-platinum border border-swiss-border shadow-lg transition-transform hover:scale-110 hover:bg-[#0088cc] hover:border-[#0088cc] hover:text-white focus:outline-none"
              aria-label="Chat on Telegram"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setHasInteracted(true)}
            >
              <FaTelegramPlane className="h-5 w-5" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-swiss-charcoal text-swiss-platinum border border-swiss-border shadow-lg transition-transform hover:scale-110 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white focus:outline-none"
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

      {/* Main Toggle Button - Squircle */}
      <motion.button
        onClick={toggleOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-swiss-platinum text-swiss-charcoal shadow-2xl focus:outline-none border border-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          !isOpen && !hasInteracted
            ? {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0px 0px 0px rgba(237, 237, 237, 0)",
                  "0px 0px 20px rgba(237, 237, 237, 0.3)",
                  "0px 0px 0px rgba(237, 237, 237, 0)",
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
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
              <FaTimes className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaCommentDots className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Dot (Green Pulse) - Adjusted for Squircle */}
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-swiss-charcoal"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default SocialWidget;
