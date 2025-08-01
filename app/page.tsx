import GettingStarted from "@/components/dashboard/getting-started/GettingStarted";
import UserStats from "@/components/dashboard/user-stats/UserStats";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <div className="page">
      <DashboardLayout>
        {/* <GettingStarted /> */}
        <UserStats />
      </DashboardLayout>
    </div>
  );
}
