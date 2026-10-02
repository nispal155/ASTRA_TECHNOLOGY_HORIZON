import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/Company-Logo.jpg"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 420,
            height: "100%",
            background: "#0B1F3A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logoSrc} width={420} height={345} alt="" />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            borderTop: "12px solid #1D4ED8",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 600, color: "#1D4ED8", textTransform: "uppercase", letterSpacing: 2 }}>
            Itahari, Nepal
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#0B1F3A", lineHeight: 1.1, marginTop: 16 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: "#475569", marginTop: 24, lineHeight: 1.35 }}>
            Web apps, mobile apps, cloud & digital marketing for growing businesses.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
