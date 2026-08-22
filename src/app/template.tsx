"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="animate-in fade-in duration-500">
          {children}
        </div>
      )}
    </>
  );
}
