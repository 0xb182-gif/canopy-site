/* Marketing screenshot card — 1290 × 2796 (iPhone 6.9") */
const { useMemo } = React;

const BG = {
  dark: "#0A0F0C",
  green: "#1E3A2A",
  brand: "#22C55E",
  brandSoft: "#4ADE80",
  ink: "#F4F7F4",
  mute: "rgba(244,247,244,0.55)",
};

// Simple leaf glyph used in lockup
function LeafMark({ size = 64, color = BG.brand }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 54 C 10 28, 30 10, 56 10 C 56 36, 36 54, 10 54 Z" stroke={color} strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
      <path d="M10 54 C 22 42, 38 26, 56 10" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function Lockup({ tone = "light" }) {
  const color = tone === "light" ? BG.ink : BG.dark;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <LeafMark size={56} color={BG.brand} />
      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em",
        color, lineHeight: 1,
      }}>Canopy</div>
    </div>
  );
}

// Phone treatment: rounded corners + outer shadow + thin bezel
function PhoneShot({ src, style = {}, tilt = 0 }) {
  return (
    <div style={{
      position: "relative",
      transform: `rotate(${tilt}deg)`,
      filter: "drop-shadow(0 60px 80px rgba(0,0,0,0.5)) drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
      ...style,
    }}>
      {/* Bezel */}
      <div style={{
        padding: 14,
        background: "#0a0a0a",
        borderRadius: 110,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        <img src={src} style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: 96,
        }}/>
      </div>
    </div>
  );
}

/* ---- Card variants ---- */

function MarketingCard({ children, bg = BG.dark, accent = BG.brand }) {
  return (
    <div style={{
      width: 1290, height: 2796,
      background: bg,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Manrope', sans-serif",
      color: BG.ink,
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${accent}26, transparent 60%)`,
        pointerEvents: "none",
      }}/>
      {children}
    </div>
  );
}

function Headline({ children, size = 168, mt = 0, color = BG.ink, accent }) {
  return (
    <h1 style={{
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontSize: size,
      lineHeight: 0.95,
      letterSpacing: "-0.045em",
      color,
      margin: 0,
      marginTop: mt,
      textWrap: "balance",
    }}>{children}</h1>
  );
}

function Sub({ children, color }) {
  return (
    <p style={{
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontSize: 42,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: color || BG.mute,
      margin: 0,
      marginTop: 32,
      maxWidth: 1000,
    }}>{children}</p>
  );
}

function Eyebrow({ children, color = BG.brand }) {
  return (
    <div style={{
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color,
    }}>{children}</div>
  );
}

/* ---- Six designed cards ---- */

function Card1() {
  // Hero: dark bg, big "Never miss / a watering."
  return (
    <MarketingCard>
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow>01 · Plant care, simplified</Eyebrow>
        <Headline mt={80}>Never miss<br/>a <span style={{ color: BG.brand }}>watering</span>.</Headline>
        <Sub>Canopy keeps every plant on schedule — quietly, in the background, until you need it.</Sub>
      </div>
      <div style={{
        position: "absolute",
        left: 140, right: 140,
        top: 1200,
      }}>
        <PhoneShot src="screens/01-today.png"/>
      </div>
    </MarketingCard>
  );
}

function Card2() {
  // Plants grid — "Every plant. / All in one place."
  return (
    <MarketingCard accent={BG.brand}>
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow>02 · Your collection</Eyebrow>
        <Headline mt={80}>Every leaf.<br/>One library.</Headline>
        <Sub>Photograph each plant, name them, give them a room. They live in a beautiful grid.</Sub>
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 1200 }}>
        <PhoneShot src="screens/02-plants.png"/>
      </div>
    </MarketingCard>
  );
}

function Card3() {
  // Monstera detail — "Schedules / that adapt."
  return (
    <MarketingCard bg="#0F1A12">
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow>03 · Smart scheduling</Eyebrow>
        <Headline mt={80}>A rhythm<br/>for <span style={{ color: BG.brand, fontStyle: "italic", fontWeight: 700 }}>every</span> plant.</Headline>
        <Sub>Watering, misting, feeding, repotting — each on its own cadence, tracked with streaks.</Sub>
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 1240 }}>
        <PhoneShot src="screens/09-monstera-detail.png"/>
      </div>
    </MarketingCard>
  );
}

function Card4() {
  // Plant database — big & feature-forward
  return (
    <MarketingCard bg="#0A0F0C">
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow>04 · Built-in field guide</Eyebrow>
        <Headline mt={80}>Knows the<br/>plants you<br/>grow.</Headline>
        <Sub>A curated database of houseplants with sensible default care schedules. Tap and it's yours.</Sub>
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 1340 }}>
        <PhoneShot src="screens/04-database.png"/>
      </div>
    </MarketingCard>
  );
}

function Card5() {
  // Settings / theme — "Make it yours" — flip palette: brand green bg, dark ink
  return (
    <MarketingCard bg={BG.brand} accent="#0A0F0C">
      {/* Override radial glow */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.18), transparent 60%)` }}/>
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow color="#0A0F0C">05 · Personal touch</Eyebrow>
        <Headline mt={80} color="#0A0F0C">Make it<br/>yours.</Headline>
        <Sub color="rgba(10,15,12,0.7)">Seven accents. Light, dark, or auto. Set a daily reminder for whenever you're at your sharpest.</Sub>
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 1240 }}>
        <PhoneShot src="screens/06-settings.png"/>
      </div>
    </MarketingCard>
  );
}

function Card6() {
  // Add your own plant — extensible database
  return (
    <MarketingCard bg="#0A0F0C">
      <div style={{ padding: "180px 110px 0", position: "relative", zIndex: 2 }}>
        <Eyebrow>06 · Yours to extend</Eyebrow>
        <Headline mt={80}>Hundreds<br/>built in. Add<br/>the <span style={{ color: BG.brand }}>rest</span>.</Headline>
        <Sub>An extensive library of common houseplants — and a few taps to add anything else you grow.</Sub>
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 1340 }}>
        <PhoneShot src="screens/05-add-database.png"/>
      </div>
    </MarketingCard>
  );
}

Object.assign(window, {
  Card1, Card2, Card3, Card4, Card5, Card6,
});
