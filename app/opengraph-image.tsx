import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imagePath = path.join(process.cwd(), "public/images/0.jpeg");
  const imageData = fs.readFileSync(imagePath).toString("base64");
  const imageSrc = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0b0a09",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(to top, rgba(11,10,9,0.95), rgba(11,10,9,0.35))",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 64,
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#f0c9a0",
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Komorní těleso mezi punkem a filharmonií
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              color: "#f5f5f4",
              fontWeight: 700,
            }}
          >
            Trhni si Smyčcem
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
