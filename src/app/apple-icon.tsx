import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6366f1", // Accent color
          color: "white",
          fontSize: "80px",
          fontWeight: 800,
          borderRadius: "40px",
          letterSpacing: "0.05em",
        }}
      >
        RU
      </div>
    ),
    { ...size }
  );
}
