import { AdminSidebar } from "@/components/admin-sidebar";
import { AdminHeader } from "@/components/admin-header";
import { AdminRightSidebar } from "@/components/admin-right-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
        <AdminRightSidebar />
      </div>
    </SidebarProvider>
  );
}
