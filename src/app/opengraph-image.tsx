import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — More Auto Glass Jobs, Not Clicks`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05070f 0%, #0f1424 55%, #141b2e 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Real logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt={site.name} height={132} style={{ height: 132 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "38px",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            Marketing built only for auto glass shops
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "76px",
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            Get more auto glass jobs. Not clicks.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Local SEO + AI visibility", "Google Ads", "Web Design"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: "24px",
                color: "#c4cbdc",
                border: "1px solid rgba(148,163,184,0.25)",
                borderRadius: "999px",
                padding: "10px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
