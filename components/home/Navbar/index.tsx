import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    NavigationMenuTrigger,
    NavigationMenuContent
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Bell, Goal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ListItem from "@/components/ui/list-item";
import React from "react";

const Navbar = () => {
    const navItems = [{ 'path': '/', display: 'Home' }, { 'path': '/goals', display: 'Goals' }, { 'path': '/journey', display: 'Journey' }, { 'path': '/community', display: 'Community' }]
    return <div className="flex justify-between px-16 pt-4">
        <div className="text-lg font-semibold flex">
            <Goal />
            Goalie
        </div>
        <NavigationMenu>
            <NavigationMenuList>
                {navItems.map((nav) =>
                    <NavigationMenuItem key={nav.path}>
                        <Link href={nav.path} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {nav.display}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}
                <NavigationMenuItem>
                    <NavigationMenuTrigger><Bell className="mr-2 h-4 w-4" /></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                            <ListItem href="/goals/test" title="Typography">
                                Jon Doe has finished a task in goal xyz
                            </ListItem>
                            <ListItem href="/goals/test" title="Typography">
                                Jon Doe has finished a task in goal xyz
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>;
}

export default Navbar;