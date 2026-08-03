import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "#020617",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #d1fae5",
            borderRadius: "32px",
            boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#059669",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "0",
            }}
          >
            Afflizen
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "0",
              lineHeight: 1.04,
              maxWidth: "900px",
            }}
          >
            Comparer les plateformes utiles plus clairement
          </div>

          <div
            style={{
              color: "#475569",
              fontSize: "32px",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            Crypto, banques en ligne, investissement, cashback, paiements,
            e-commerce, hébergement web et outils IA.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
