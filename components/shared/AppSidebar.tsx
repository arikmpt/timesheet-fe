"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { CalendarDays, ChevronDown, ChevronRight, Database, House, LogOut, Settings, SquarePen, Timer } from "lucide-react"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function AppSidebar() {
    const [openMasterData, setMasterData] = useState(false);
    const [openSetting, setOpenSetting] = useState(false);

    const onClickMasterData = () => setMasterData((prevState) => !prevState);
    const onClickSetting = () => setOpenSetting((prevState) => !prevState);

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader />
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive>
                                    <Link href="#">
                                        <House />
                                        <span className="group-data-[collapsible=icon]:hidden">Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Timer />
                                        <span className="group-data-[collapsible=icon]:hidden">Timesheet</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <CalendarDays />
                                        <span className="group-data-[collapsible=icon]:hidden">Time Off</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <Collapsible open={openMasterData} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild onClick={onClickMasterData}>
                                        <SidebarMenuButton asChild>
                                            <Link href="#" className="flex justify-between">
                                                <div className="flex gap-2 items-center">
                                                    <Database />
                                                    <span className="group-data-[collapsible=icon]:hidden">Master</span>
                                                </div>
                                                <span className="group-data-[collapsible=icon]:hidden">
                                                    {openMasterData ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                                                </span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Employee Management</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Partner Management</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Contract Management</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>User Management</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Role Management</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                            <Collapsible open={openSetting} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild onClick={onClickSetting}>
                                        <SidebarMenuButton asChild>
                                            <Link href="#" className="flex justify-between">
                                                <div className="flex gap-2 items-center">
                                                    <Settings />
                                                    <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                                                </div>
                                                <span className="group-data-[collapsible=icon]:hidden">
                                                    {openSetting ? <ChevronDown size={16} /> : <ChevronRight size={16}/>}
                                                </span>
                                                
                                            </Link>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Position</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">
                                                        <span>Public Holiday</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="group-data-[collapsible=icon]:hidden">Home</span>
                            </a>
                        </SidebarMenuButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuAction>
                                    <ChevronRight size={16}/>
                                </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" align="start">
                                <DropdownMenuItem>
                                    <a href="#" className="flex gap-2 justify-content content-center items-center grow hover:text-primary">
                                        <SquarePen size={16}/>
                                        <span>Home</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#" className="flex gap-2 justify-content content-center items-center grow hover:text-primary">
                                        <LogOut size={16}/>
                                        <span>Logout</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
  