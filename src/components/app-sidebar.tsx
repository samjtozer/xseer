import { AudioLines, Book, BookAudio, Mic, Sparkles } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar"
 
// Menu items.
const items = [
  {
    title: "Podcasts",
    url: "/podcasts",
    icon: Mic,
  },
  {
    title: "Books",
    url: "/books",
    icon: Book,
  },
  {
    title: "Music",
    url: "/music",
    icon: AudioLines,
  },
  {
    title: "Audiobooks",
    url: "/audiobooks",
    icon: BookAudio,
  },
]
 
export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenuButton asChild isActive tooltip={"Home"}>
                    <a href={"/"}>
                        <Sparkles />
                        <span>Home</span>
                    </a>
                </SidebarMenuButton>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}