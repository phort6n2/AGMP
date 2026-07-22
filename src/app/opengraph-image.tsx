import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — More Auto Glass Jobs, Not Clicks`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #7dd3fc, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              color: "#05070f",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#98a2bd", fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "40px",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            Marketing built only for auto glass shops
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "78px",
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
