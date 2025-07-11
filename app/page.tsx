import GettingStarted from "@/components/dashboard/getting-started/GettingStarted";
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
