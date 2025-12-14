"use client";

import { useState } from "react";
import Onboarding from "../feature/Onboarding";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Onboarding onFinish={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
}
