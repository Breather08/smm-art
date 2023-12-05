import { currencies, periods } from "./constants";

export type Currency = (typeof currencies)[number];
export type Period = (typeof periods)[number];

export interface PricingFeature {
  description: string;
  isAvailable: boolean;
}

export interface PeriodPricing {
  title: string;
  sum: string;
  period: Period;
  isMostPopular?: boolean;
  features: PricingFeature[];
}
