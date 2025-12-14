"use client";

import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
