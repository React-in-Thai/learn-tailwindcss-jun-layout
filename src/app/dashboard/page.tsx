import {
  BarChart2,
  Calendar,
  ChevronsUpDown,
  Database,
  FileText,
  GalleryVerticalEnd,
  Home,
  Mail,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { RailCollapse, TriggerMobileSidebar } from "./triggers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuGroups = [
  {
    label: "Overview",
    items: [
      {
        icon: Home,
        label: "Dashboard",
        menus: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      { icon: BarChart2, label: "Analytics" },
      { icon: FileText, label: "Reports" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { icon: Mail, label: "Inbox" },
      { icon: Calendar, label: "Calendar" },
      { icon: Database, label: "Projects" },
      { icon: Users, label: "Team" },
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="jun-layout">
      <div className="jun-header">
        <div className="container flex items-center gap-4 px-4">
          <TriggerMobileSidebar />
          <h1 className="font-semibold">Playground Dashboard</h1>
        </div>
      </div>

      <aside className="jun-edgeSidebar jun-edgeSidebar-drawer md:jun-edgeSidebar-permanent md:jun-edgeSidebar-w-[280px] jun-edgeSidebar-permanent-autoCollapse-lg">
        <div className="jun-edgeContent jun-sidebarContainer">
          <div className="flex flex-col p-2">
            {/* App Switcher */}
            <button className="jun-sidebarMenuButton jun-sidebarMenuButton-spacing-2 jun-sidebarMenuButton-shrink-spacing-0">
              <div className="jun-sidebarIcon flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="jun-sidebarText text-left text-sm leading-tight flex items-center">
                <div className="flex-1">
                  <div className="truncate font-semibold">Acme Inc.</div>
                  <div className="truncate text-xs">Enterprise</div>
                </div>
                <ChevronsUpDown className="ml-auto size-4 " />
              </div>
            </button>
          </div>
          <div className="flex-1 min-h-0 overflow-auto">
            {/* Menu Groups */}
            {menuGroups.map((group, index) => (
              <div key={index} className="jun-sidebarGroup relative p-2">
                <div className="jun-sidebarGroupLabel text-muted-foreground tracking-wide">
                  {group.label}
                  <button className="jun-sidebarMenuAction" title="Add Project">
                    <Plus /> <span className="sr-only">Add Project</span>
                  </button>
                </div>
                <ul className="jun-sidebarMenu">
                  {group.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <li key={itemIndex} className="jun-sidebarMenuItem">
                        <button className="jun-sidebarMenuButton">
                          <Icon className="jun-sidebarIcon" />
                          <span className="jun-sidebarText">{item.label}</span>
                        </button>
                        <button className="jun-sidebarMenuAction jun-sidebarMenuAction-hoverAppear">
                          <MoreHorizontal />
                        </button>
                        {item.menus && (
                          <div className="jun-sidebarGroupText">
                            <div>
                              <ul className="jun-sidebarMenu jun-sidebarMenu-nested">
                                {item.menus.map((item, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="jun-sidebarMenuItem"
                                  >
                                    <button className="jun-sidebarMenuButton">
                                      <span className="jun-sidebarText">
                                        {item.title}
                                      </span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="jun-sidebarGroup">
              <div className="jun-sidebarMenu">
                {/* Settings */}
                <button className="jun-sidebarMenuButton">
                  <Settings className="jun-sidebarIcon" />
                  <span className="jun-sidebarText">Settings</span>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ul className="jun-sidebarMenu">
              <li className="jun-sidebarMenuItem">
                <button className="jun-sidebarMenuButton jun-sidebarMenuButton-spacing-2 jun-sidebarMenuButton-shrink-spacing-0">
                  <Avatar className="jun-sidebarIcon h-8 w-8 rounded-lg">
                    <AvatarImage src="/unknow.png" alt="Unknown" />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="jun-sidebarText flex items-center flex-1 text-left text-sm leading-tight">
                    <div className="flex-1">
                      <div className="truncate font-semibold">Unknown</div>
                      <div className="truncate text-xs">unknown@test.com</div>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <RailCollapse />
      </aside>

      <main className="jun-content">{/* dashboard content */}</main>
    </div>
  );
}
