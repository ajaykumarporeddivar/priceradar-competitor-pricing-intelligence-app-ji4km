export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export type CompetitorStatus = 'active' | 'paused' | 'archived';
export type CompetitorType = 'saas' | 'ecommerce' | 'other';
export type PricingChangeType = 'price_drop' | 'price_increase' | 'plan_added' | 'plan_removed' | 'feature_added' | 'feature_removed' | 'trial_changed' | 'discount_changed' | 'url_changed' | 'status_changed';
export type AlertChannel = 'email' | 'slack';
export type AlertStatus = 'sent' | 'pending' | 'failed';
export type AlertType = 'price_drop_10_percent' | 'any_price_change' | 'any_plan_change' | 'weekly_digest';

export interface PricingPlan {
  name: string;
  priceMonthly: number | null; // null for free tier
  priceAnnual: number | null; // null if not offered annually
  features: string[]; // List of included features
  isTrialAvailable: boolean;
  trialDays?: number;
  currency: string;
}

export interface CompetitorPricingData {
  planId: string; // Unique ID for a specific plan
  competitorId: string;
  timestamp: string; // ISO date string when this data was valid
  plans: PricingPlan[];
  rawDataUrl?: string; // Optional URL to the scraped raw data
}

export interface PricingChange {
  id: string;
  competitorId: string;
  type: PricingChangeType;
  description: string;
  timestamp: string; // ISO date string of when the change was detected
  oldValue: string | null; // JSON string or simple value of old state
  newValue: string | null; // JSON string or simple value of new state
  planName?: string; // If change relates to a specific plan
  featureName?: string; // If change relates to a specific feature
}

export interface Competitor {
  id: string;
  name: string;
  url: string; // The pricing page URL to scrape
  type: CompetitorType;
  status: CompetitorStatus;
  lastScrapedAt: string; // ISO date string
  nextScrapeAt: string; // ISO date string
  scrapeIntervalDays: number;
  addedByUserId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  pricingHistory?: CompetitorPricingData[]; // Snapshot of pricing at different times
}

export interface Alert {
  id: string;
  userId: string;
  competitorId: string;
  type: AlertType;
  channel: AlertChannel;
  status: AlertStatus;
  createdAt: string;
  sentAt?: string;
  message: string;
  pricingChangeId?: string; // Link to a specific pricing change that triggered it
}

export type SubscriptionPlanName = 'Free' | 'Pro' | 'Business';

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlanName;
  competitorLimit: number;
  pricePerMonth: number;
  status: 'active' | 'cancelled' | 'trialing';
  startDate: string; // ISO date string
  endDate?: string; // ISO date string for end of subscription
  nextBillingDate?: string; // ISO date string
}