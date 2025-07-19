import GettingStarted from "@/components/dashboard/getting-started/GettingStarted";
import Feed from "@/components/feed/Feed";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <div className="page">
      <DashboardLayout>
        <GettingStarted />
      </DashboardLayout>
    </div>
  );
}
