import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 28, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"]'));
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isHovering ? 52 : 36,
            height: isHovering ? 52 : 36,
            opacity: isHovering ? 0.6 : 0.35,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            border: '1px solid #8b5cf6',
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 7,
            height: isHovering ? 6 : 7,
            opacity: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            background: '#8b5cf6',
            borderRadius: '50%',
            boxShadow: '0 0 8px 2px rgba(139,92,246,0.6)',
          }}
        />
      </motion.div>
    </>
  );
}
