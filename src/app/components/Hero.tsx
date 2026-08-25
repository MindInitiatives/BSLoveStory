"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <Image
          src="/photos/park-bw.jpeg"
          alt="Blessing and Stephen"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero__panel">
        <p className="eyebrow">Join us as we celebrate</p>

        <h1 className="hero__names">
          <span>Blessing</span>
          <span className="hero__amp">&amp;</span>
          <span>Stephen</span>
        </h1>

        <p className="flourish">
          <span />
        </p>

        <p className="hero__date">
          <time dateTime="2026-11-28">Saturday, 28 November 2026</time>
        </p>

        <p className="hero__greeting">
          We are overjoyed to share this beautiful chapter with you, and grateful to have you by
          our side.
        </p>
      </div>
    </section>
  );
}
