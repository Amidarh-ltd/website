import { Metadata } from "next";
import StatusLayout from "@/modules/trupper/status/layout";

export const metadata: Metadata = {
  title: "System Status - Trupper",
  description:
    "Live status and uptime history for Trupper's core services — database, background jobs, system resources, and configuration.",
  alternates: {
    canonical: "https://amidarh.com/trupper/status",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrupperStatusPage() {
  return <StatusLayout />;
}
