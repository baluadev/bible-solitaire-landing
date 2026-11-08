"use client";

import { useEffect } from "react";

/**
 * Same rule as the game: the colour theme follows the Church year.
 *  - Ordinary Time            → sanctuary
 *  - Christmas, Easter season → illuminated
 *  - Advent, Lent             → cloister
 * Runs after hydration so the server-rendered page (sanctuary) never mismatches.
 */
function easterSunday(y: number): Date {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, month - 1, day);
}

const day = (y: number, m: number, d: number) => new Date(y, m, d).getTime();
const DAY = 86_400_000;

export function themeFor(now: Date): "sanctuary" | "illuminated" | "cloister" {
  const t = day(now.getFullYear(), now.getMonth(), now.getDate());
  const y = now.getFullYear();
  const easter = easterSunday(y).getTime();
  if (t >= easter - 46 * DAY && t < easter) return "cloister"; // Lent
  if (t >= easter && t <= easter + 49 * DAY) return "illuminated"; // Easter season
  const dec24 = new Date(y, 11, 24);
  const advent = day(y, 11, 24) - dec24.getDay() * DAY - 21 * DAY;
  if (t >= advent && t <= day(y, 11, 24)) return "cloister"; // Advent
  if (t >= day(y, 11, 25) || t <= day(y, 0, 6)) return "illuminated"; // Christmas
  return "sanctuary";
}

export default function LiturgicalTheme() {
  useEffect(() => {
    document.documentElement.dataset.theme = themeFor(new Date());
  }, []);
  return null;
}
