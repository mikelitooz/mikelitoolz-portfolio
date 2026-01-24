"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, Variants, Easing } from "framer-motion";

const FRAME_COUNT = 120;
const SCROLL_HEIGHT = "400vh";

// Helper to generate frame paths
const getFramePath = (index: number) => `/hero-sequence/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

export default function BlackBoxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (1-120)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises: Promise<HTMLImageElement>[] = [];

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = getFramePath(i);
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
        imagePromises.push(promise);
      }

      try {
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load hero sequence images:", error);
      }
    };

    loadImages();
  }, []);

  // Draw to canvas when frame changes
  const drawFrame = useCallback(
    (index: number) => {
      if (!canvasRef.current || images.length === 0) return;

      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const img = images[index - 1]; // 1-indexed
      if (!img) return;

      const canvas = canvasRef.current;

      // High DPI support
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Calculate "cover" fit (fills entire canvas, may crop)
      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgAspect > canvasAspect) {
        // Image is wider than canvas - fit height, crop width
        drawHeight = rect.height;
        drawWidth = rect.height * imgAspect;
        drawX = (rect.width - drawWidth) / 2;
        drawY = 0;
      } else {
        // Image is taller than canvas - fit width, crop height
        drawWidth = rect.width;
        drawHeight = rect.width / imgAspect;
        drawX = 0;
        drawY = (rect.height - drawHeight) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    },
    [images]
  );

  // Listen to scroll and update frame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.min(FRAME_COUNT, Math.max(1, Math.round(latest)));
    setCurrentFrame(frame);
    drawFrame(frame);
  });

  // Initial draw when loaded
  useEffect(() => {
    if (isLoaded) {
      drawFrame(1);
    }
  }, [isLoaded, drawFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded && currentFrame) {
        drawFrame(currentFrame);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, currentFrame, drawFrame]);

  // Determine active scene based on frame count (Zones)
  // Zone 1: Identity (Frame 0-25)
  // Zone 2: Engineering (Frame 35-55)
  // Zone 3: AI (Frame 65-85)
  // Zone 4: CTA (Frame 95-120)
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    if (currentFrame <= 25) setActiveScene(1);
    else if (currentFrame >= 35 && currentFrame <= 55) setActiveScene(2);
    else if (currentFrame >= 65 && currentFrame <= 85) setActiveScene(3);
    else if (currentFrame >= 95) setActiveScene(4);
    else setActiveScene(0); // Transition zones
  }, [currentFrame]);

  // Premium "Cinematic Reveal" Variants
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as Easing }, // Cast to Easing
    },
  };

  return (
    <section ref={containerRef} className="relative bg-background" style={{ height: SCROLL_HEIGHT }}>
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-swiss-gray border-t-accent rounded-full animate-spin" />
              <p className="text-swiss-gray text-sm tracking-widest uppercase">Initializing...</p>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas ref={canvasRef} className="w-full h-full" style={{ opacity: isLoaded ? 1 : 0 }} />

        {/* Text Overlays - AnimatePresence not needed as we just switch variants */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Section 1: Identity - CENTER */}
          <motion.div
            initial="visible"
            animate={activeScene === 1 ? "visible" : "hidden"}
            variants={textVariants}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground tracking-tighter">MICHEAL IFEANYI</h1>
            <p className="mt-4 text-lg md:text-2xl text-swiss-gray tracking-widest uppercase">AI Automation Engineer</p>
          </motion.div>

          {/* Section 2: Engineering - LEFT */}
          <motion.div
            initial="hidden"
            animate={activeScene === 2 ? "visible" : "hidden"}
            variants={textVariants}
            className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-24"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tight">Fluid</h2>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-swiss-gray tracking-tight">Systems.</h2>
          </motion.div>

          {/* Section 3: AI - RIGHT */}
          <motion.div
            initial="hidden"
            animate={activeScene === 3 ? "visible" : "hidden"}
            variants={textVariants}
            className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-16 lg:pr-24 text-right"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tight">Intelligent</h2>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-swiss-gray tracking-tight">Agents.</h2>
          </motion.div>

          {/* Section 4: CTA - CENTER */}
          <motion.div
            initial="hidden"
            animate={activeScene === 4 ? "visible" : "hidden"}
            variants={textVariants}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">Ready to Build?</h2>
            <a
              href="#contact"
              className="mt-8 px-8 py-4 bg-foreground text-background font-medium text-lg tracking-wide rounded-full hover:bg-accent hover:text-background transition-colors duration-300 pointer-events-auto"
            >
              Start Project
            </a>
          </motion.div>
        </div>

        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-linear-to-t from-background to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
