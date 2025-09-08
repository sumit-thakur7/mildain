"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarContent,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Home,
  LayoutDashboard,
  Users,
  DollarSign,
  Briefcase,
  Award,
  Heart,
  Target,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith("/admin/dashboard")}
            >
              <Link href="/admin/dashboard">
                <LayoutDashboard />
                Dashboard
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/genology")}>
              <Link href="#">
                <Users />
                Genology
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/direct-income")}>
              <Link href="#">
                <DollarSign />
                Direct Income
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/team-income")}>
              <Link href="#">
                <Briefcase />
                Team Income
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Collapsible asChild>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                    <Award />
                    <span>Rank & Bonus</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubButton>Sub Item 1</SidebarMenuSubButton>
                  <SidebarMenuSubButton>Sub Item 2</SidebarMenuSubButton>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <Collapsible asChild>
          <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                    <Heart />
                    <span>Loyalty Income</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubButton>Sub Item 1</SidebarMenuSubButton>
                  <SidebarMenuSubButton>Sub Item 2</SidebarMenuSubButton>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/target")}>
              <Link href="#">
                <Target />
                Target
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/support")}>
              <Link href="#">
                <LifeBuoy />
                Customer Support
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home />
                Back to Site
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
