"use client";

import { useState } from "react";
import Onboarding from "../feature/Onboarding";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"loading" | "exiting" | "done">("loading");

  return (
    <>
      {status !== "done" && (
        <Onboarding
          onExitStart={() => setStatus("exiting")}
          onFinish={() => setStatus("done")}
        />
      )}
      {status !== "loading" && children}
    </>
  );
}
