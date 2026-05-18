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
      <section className="relative min-h-screen grid md:grid-cols-[1fr_42%]">
        {/* Left — copy */}
        <div
          className="flex flex-col justify-center gap-8 px-8 py-10 md:px-14 md:py-12 bg-white"
          style={{ minHeight: "100svh" }}
        >
          {/* Logo / Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3.5"
            aria-label="Alissa Dunn Realty"
          >
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect x="1.5" y="1.5" width="51" height="51" rx="4" stroke="#1B3A5C" strokeWidth="1.5" />
              <path d="M13.5 28.5L27 17.5L40.5 28.5" stroke="#3A9A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 28V39H37V28" stroke="#1B3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 39V31H31V39" stroke="#1B3A5C" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M18 12H36" stroke="#1B3A5C" strokeWidth="1.4" strokeLinecap="round" />
            </svg>

            <div>
              <div
                className="font-700 leading-none"
                style={{ fontSize: "1.35rem", color: "#1B3A5C" }}
              >
                Alissa Dunn
              </div>
              <div
                className="font-600 uppercase mt-1.5"
                style={{ fontSize: "0.62rem", color: "#3A9A5C", letterSpacing: "0.24em" }}
              >
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
              className="text-xs font-500 tracking-widest uppercase mb-6"
              style={{ color: "#3A9A5C", letterSpacing: "0.2em" }}
            >
              Memphis Real Estate
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
              className="font-700 leading-none"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
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
              className="mt-8 font-400 leading-relaxed max-w-md"
              style={{ fontSize: "1.05rem", color: "#4A5568" }}
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
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <a
                href="mailto:alissa@alissadunnrealty.com"
                className="inline-block px-8 py-3.5 font-600 text-sm tracking-wide text-white rounded-sm transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#1B3A5C",
                  letterSpacing: "0.04em",
                }}
              >
                Work With Alissa
              </a>
              <span className="text-sm font-400" style={{ color: "#6B7A8D" }}>
                (901) 555-0142
              </span>
            </motion.div>
          </div>

          {/* Credential strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="flex flex-row flex-wrap gap-y-3 items-center"
          >
            {credentials.map((c, i) => (
              <span
                key={c}
                className="flex items-center gap-5 text-xs font-500"
              >
                <span style={{ color: i === 0 ? "#3A9A5C" : "#8A9AAD" }}>{c}</span>
                {i < credentials.length - 1 && (
                  <span style={{ color: "#DDE3EA", fontSize: "0.6rem" }}>●</span>
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
          className="relative hidden md:block"
        >
          <Image
            src="/alissa.jpeg"
            alt="Alissa Dunn"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
          {/* Subtle navy gradient on the left edge to blend with white */}
          <div
            className="absolute inset-y-0 left-0 w-12 pointer-events-none"
            style={{
              background: "linear-gradient(to right, white, transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#F5F7FA", borderTop: "1px solid #DDE3EA" }}>
        <div className="max-w-6xl mx-auto px-8 py-14 md:py-16">
          {/* Stat numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-12">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="text-center"
              >
                <div
                  className="font-700"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "#1B3A5C",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  className="mt-2 text-xs font-500 tracking-widest uppercase"
                  style={{ color: "#3A9A5C", letterSpacing: "0.15em" }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#DDE3EA" }} className="mb-10" />

          {/* About blurb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-400 leading-relaxed" style={{ fontSize: "1rem", color: "#4A5568" }}>
              Alissa is a Memphis native, Chamber of Commerce Ambassador, and{" "}
              <span className="font-600" style={{ color: "#1B3A5C" }}>
                certified Military Relocation Specialist
              </span>{" "}
              — giving her clients access to expertise and community insight
              you won&apos;t find on Zillow.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="mailto:alissa@alissadunnrealty.com"
                className="inline-block px-8 py-3.5 border-2 font-600 text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-navy"
                style={{
                  borderColor: "#1B3A5C",
                  color: "#1B3A5C",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1B3A5C";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1B3A5C";
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
