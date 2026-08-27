"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-11-28T00:00:00").getTime();

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

type TimeLeft = ReturnType<typeof getTimeLeft>;

export default function Countdown() {
  // undefined: not yet mounted on the client (matches the server render).
  // null: the wedding date has passed. object: time remaining.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>(undefined);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft());
    const timeout = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (timeLeft === undefined) return null;

  if (timeLeft === null) {
    return <p className="hero__countdown-done">We are married!</p>;
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="hero__countdown" aria-label="Countdown to the wedding">
      {units.map((unit) => (
        <div key={unit.label} className="hero__countdown-item">
          <span className="hero__countdown-value">{String(unit.value).padStart(2, "0")}</span>
          <span className="hero__countdown-label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
