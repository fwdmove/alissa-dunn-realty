"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "$6M+", label: "Closed in 2024" },
  { value: "36+", label: "Transactions in 2 years" },
  { value: "Top 20", label: "In her company" },
  { value: "Top 500", label: "of 5,000 Memphis agents" },
];

const credentials = [
  "Eagle Award Winner",
  "Rookie of the Year",
  "Military Relocation Specialist",
  "Arlington Chamber Ambassador",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Page() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 42%", minHeight: "100svh" }}>
        {/* Left — copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
            padding: "2.5rem 3.5rem",
            backgroundColor: "#ffffff",
            minHeight: "100svh",
          }}
        >
          {/* Logo / Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}
            aria-label="Alissa Dunn Realty"
          >
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <rect x="1.5" y="1.5" width="51" height="51" rx="4" stroke="#1B3A5C" strokeWidth="1.5" />
              <path d="M13.5 28.5L27 17.5L40.5 28.5" stroke="#3A9A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 28V39H37V28" stroke="#1B3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 39V31H31V39" stroke="#1B3A5C" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M18 12H36" stroke="#1B3A5C" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontSize: "1.35rem", fontWeight: 700, lineHeight: 1, color: "#1B3A5C" }}>
                Alissa Dunn
              </div>
              <div style={{ fontSize: "0.62rem", fontWeight: 600, color: "#3A9A5C", letterSpacing: "0.24em", textTransform: "uppercase", marginTop: "0.375rem" }}>
                Realty Memphis
              </div>
            </div>
          </motion.div>

          {/* Main copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              style={{ fontSize: "0.7rem", fontWeight: 500, color: "#3A9A5C", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}
            >
              Memphis Real Estate
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                fontWeight: 700,
                color: "#1B3A5C",
                lineHeight: 1.05,
              }}
            >
              Memphis real<br />
              estate, done<br />
              <span style={{ color: "#3A9A5C" }}>right.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              style={{ marginTop: "2rem", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.7, color: "#4A5568", maxWidth: "28rem" }}
            >
              Alissa Dunn is a Memphis-native realtor who closed over $6M in
              2024, ranked top 20 in her company and top 500 of 5,000 agents in
              the area. She knows this city — and she works hard for every
              client.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease }}
              style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
            >
              <a
                href="mailto:alissa@alissadunnrealty.com"
                style={{
                  display: "inline-block",
                  padding: "0.875rem 2rem",
                  backgroundColor: "#1B3A5C",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Work With Alissa
              </a>
              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "#6B7A8D" }}>
                (901) 555-0142
              </span>
            </motion.div>
          </div>

          {/* Credential strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem 0" }}
          >
            {credentials.map((c, i) => (
              <span key={c} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: i === 0 ? "#3A9A5C" : "#8A9AAD" }}>{c}</span>
                {i < credentials.length - 1 && (
                  <span style={{ color: "#DDE3EA", fontSize: "0.5rem", margin: "0 0.25rem" }}>●</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          style={{ position: "relative" }}
        >
          <Image
            src="/alissa.jpeg"
            alt="Alissa Dunn"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
            unoptimized
          />
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: "3rem",
              background: "linear-gradient(to right, white, transparent)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#F5F7FA", borderTop: "1px solid #DDE3EA" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3.5rem 2rem" }}>
          {/* Stat numbers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#1B3A5C", lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.7rem", fontWeight: 500, color: "#3A9A5C", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#DDE3EA", marginBottom: "2.5rem" }} />

          {/* About blurb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}
          >
            <p style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7, color: "#4A5568" }}>
              Alissa is a Memphis native, Chamber of Commerce Ambassador, and{" "}
              <span style={{ fontWeight: 600, color: "#1B3A5C" }}>certified Military Relocation Specialist</span>
              {" "}— giving her clients access to expertise and community insight you won&apos;t find on Zillow.
            </p>

            <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
              <a
                href="mailto:alissa@alissadunnrealty.com"
                style={{
                  display: "inline-block",
                  padding: "0.875rem 2rem",
                  border: "2px solid #1B3A5C",
                  color: "#1B3A5C",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "background-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#1B3A5C";
                  el.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#1B3A5C";
                }}
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
