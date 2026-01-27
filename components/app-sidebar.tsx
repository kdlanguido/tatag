"use client"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { appSidebarNav } from "@/lib/contants"
import { authClient } from "@/lib/auth-client"
import { UserI } from "@/model/User.model"

export function AppSidebar({ profile}: { profile: UserI}) {

  const { data: session } = authClient.useSession()

  if (!session) return

  const userData = {
    name: session?.user.name || "",
    email: session?.user.email || "",
    avatar: session?.user.image || "",
  }

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
    >
      <SidebarContent>
        <NavMain items={appSidebarNav.navMenu} header={"Main Menu"} />

        <NavMain items={appSidebarNav.navMain} header={"Dashboard"} />
        {
          profile?.membership?.memberLevel === 'admin' && <NavMain items={appSidebarNav.navAdmin} header={"Admin Controls"} chapterId={profile?.membership?.chapterId.toString()} />
        }
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}
