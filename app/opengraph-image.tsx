import { ImageResponse } from "next/og";

export const alt = "DreamRides Dubai luxury car rental";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 78% 20%, rgba(215,180,106,0.32), transparent 28%), linear-gradient(135deg, #050505 0%, #111111 52%, #20170a 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%" }}>
          <div style={{ color: "#d7b46a", fontSize: 26, fontWeight: 700, letterSpacing: 8 }}>
            DREAMRIDES DUBAI
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2, lineHeight: 0.95, maxWidth: 820 }}>
            Luxury Car Rental in Dubai
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 32, lineHeight: 1.35, maxWidth: 840 }}>
            Supercars, VIP delivery, concierge booking, and premium Dubai rental experiences.
          </div>
          <div style={{ display: "flex", gap: 18, marginTop: 16 }}>
            {["Ferrari", "Lamborghini", "Rolls Royce", "Porsche"].map((brand) => (
              <div
                key={brand}
                style={{
                  border: "1px solid rgba(215,180,106,0.42)",
                  borderRadius: 12,
                  color: "#d7b46a",
                  fontSize: 24,
                  fontWeight: 700,
                  padding: "16px 22px",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
