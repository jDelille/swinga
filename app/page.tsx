import GettingStarted from "@/components/dashboard/getting-started/GettingStarted";
import ShotDispersionDemo from "@/components/dashboard/shot-graph/ShotGraph";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <div className="page">
      <DashboardLayout>
        {/* <GettingStarted /> */}
        <ShotDispersionDemo />
      </DashboardLayout>
    </div>
  );
}
