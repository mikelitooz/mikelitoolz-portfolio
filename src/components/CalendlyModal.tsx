"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CALENDLY_URL } from "@/constants";

interface CalendlyModalProps {
    isOpen: boolean;
    onClose: () => void;
    url?: string;
}

export default function CalendlyModal({
    isOpen,
    onClose,
    url = CALENDLY_URL,
}: CalendlyModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Load Calendly widget script and initialize
    useEffect(() => {
        if (!isOpen) return;

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        script.onload = () => {
            if (containerRef.current && (window as any).Calendly) {
                (window as any).Calendly.initInlineWidget({
                    url: url,
                    parentElement: containerRef.current,
                    prefill: {},
                    utm: {},
                });
            }
        };

        document.head.appendChild(script);

        // Also add Calendly CSS
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            // Clean up on close
            if (script.parentNode) script.parentNode.removeChild(script);
            if (link.parentNode) link.parentNode.removeChild(link);
        };
    }, [isOpen, url]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[900px] h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl mx-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Close booking modal"
                        >
                            <X className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Calendly Embed Container */}
                        <div
                            ref={containerRef}
                            className="w-full h-full"
                            style={{ minWidth: "320px", minHeight: "600px" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
