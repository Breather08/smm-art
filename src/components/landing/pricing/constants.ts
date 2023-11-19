export const currencies = ["KZT", "RUB", "USD"] as const;
export const periods = ["day", "month", "week"] as const;

export type Currency = (typeof currencies)[number];
export type Period = (typeof periods)[number];

interface PricingFeature {
  description: string;
  isAvailable: boolean;
}

export interface PeriodPricing {
  title: string;
  sum: number;
  isMostPopular?: boolean;
  features: PricingFeature[];
}
