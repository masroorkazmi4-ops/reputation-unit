import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Reputation Unit - Web Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08080f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Soft center glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(8,8,15,0) 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            zIndex: 10,
          }}
        >
          {/* Simple RU icon block */}
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "#6366f1",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "0.05em",
              borderRadius: "16px",
              marginBottom: "24px",
            }}
          >
            RU
          </div>

          <h1
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Reputation Unit
          </h1>

          <p
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              letterSpacing: "-0.01em",
              margin: 0,
              marginTop: "16px",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Websites, AI tools, and business systems for modern businesses.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
