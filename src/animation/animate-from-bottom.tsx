import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimateLeftProps {
    children: ReactNode;
}

const AnimateFromBottom = ({ children }: AnimateLeftProps) => {

    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ translateY: 140 }}
                animate={{ scale: 1, translateY: 0, }}
                transition={{ delay: .1, duration: 4, type: 'spring', damping: 80, bounce: 4, stiffness: 80 }}
            >
                <motion.div
                    drag
                    dragElastic={1}
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AnimateFromBottom;