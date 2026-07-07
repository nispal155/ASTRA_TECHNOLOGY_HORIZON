"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function Template({ children }: { children: React.ReactNode }) {
 const [isLoading, setIsLoading] = useState(true);

 return (
 <>
 <Preloader onComplete={() => setIsLoading(false)} />
 
 {!isLoading && (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 {children}
 </motion.div>
 )}
 </>
 );
}
