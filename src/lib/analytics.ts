import { track as trackVercel } from "@vercel/analytics";

export type AnalyticsProperties = Record<string, string | number | boolean>;

/**
 * Single call site for every analytics event (see CONTENT_STRATEGY.md §Analytics
 * Strategy). Routes through Vercel Analytics today; swapping or adding a
 * provider later (e.g. PostHog) only touches this file, never call sites.
 */
export function track(event: string, properties?: AnalyticsProperties): void {
  trackVercel(event, properties);

  if (process.env.NODE_ENV === "development") {
    console.info(`[analytics] ${event}`, properties ?? {});
  }
}
