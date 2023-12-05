import { Period } from "./types";

export const currencies = ["KZT", "RUB", "USD"] as const;
export const periods = ["day", "month", "week"] as const;

export const periodDict: Record<Period, string> = {
  day: "день",
  month: "месяц",
  week: "неделя",
} as const;
