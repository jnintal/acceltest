import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-100">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto pt-16 md:pt-0">{children}</div>
    </div>
  );
}
