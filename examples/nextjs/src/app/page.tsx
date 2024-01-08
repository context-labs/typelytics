import { DashboardExample } from "./dashboard";
import { PostHog } from "@typecharts/posthog";
import { BarChart, LineChart } from "@typecharts/tremor";
import type { PostHogEvents } from "~/data/events";

export default async function DashboardSSR() {
  const posthog = new PostHog<PostHogEvents>();
  const data = await posthog
    .query()
    .addSeries("$pageview", {
      sampling: "total",
    })
    .execute({
      groupBy: "day",
      type: "bar",
    });

  return <DashboardExample largeCard={<LineChart {...data} />} />;
}
