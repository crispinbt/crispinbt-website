import { ImageResponse } from "next/og";

export const alt =
  "Crispin Boden-Tebbutt - SEO Consultant, Swansea and UK-wide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1220 0%, #16233d 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#6ea8fe", fontSize: 30, letterSpacing: 2 }}>
          CRISPINBT.CO.UK
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: 78, fontWeight: 700, lineHeight: 1.1 }}>
            Crispin Boden-Tebbutt
          </div>
          <div style={{ color: "#9fb3d1", fontSize: 40, marginTop: 20 }}>
            SEO Consultant · Swansea, South Wales &amp; UK-wide
          </div>
        </div>
        <div style={{ display: "flex", color: "#9fb3d1", fontSize: 28 }}>
          Technical SEO · Content Strategy · Local SEO · Automation
        </div>
      </div>
    ),
    size,
  );
}
