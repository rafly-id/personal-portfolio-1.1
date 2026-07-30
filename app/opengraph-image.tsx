import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rafly Adriansyah — Frontend Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #a1a1aa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            MUHAMMAD RAFLY ADRIANSYAH
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Frontend Developer & UI/UX Specialist
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #27272a",
            paddingTop: "32px",
            color: "#71717a",
            fontSize: 22,
          }}
        >
          <span>rafly-id.vercel.app</span>
          <span>Next.js • React • TypeScript • GSAP</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
