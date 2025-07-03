import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll position relative to this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'], // When top enters and bottom leaves the viewport
    });


    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <motion.div
            ref={ref}
            id={id}
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
                opacity,
                transition: 'all 0.3s ease',
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
