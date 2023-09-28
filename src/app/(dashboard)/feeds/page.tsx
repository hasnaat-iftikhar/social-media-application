import type { Metadata } from "next";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Feeds | Social Media Application",
  description:
    "Welcome to our social media platform where you can connect with friends, share moments, and explore the world. Join the community today!",
};

const Page = () => {
  return <DashboardLayout>Feeds</DashboardLayout>;
};

export default Page;
