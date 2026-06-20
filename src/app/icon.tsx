import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: "16px",
          fontWeight: 800,
          borderRadius: "6px",
          letterSpacing: "0.05em",
        }}
      >
        RU
      </div>
    ),
    { ...size }
  );
}
