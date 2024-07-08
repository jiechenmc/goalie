import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    NavigationMenuTrigger,
    NavigationMenuContent
} from "@/components/ui/navigation-menu"
import { NavigationMenuIndicator } from "@radix-ui/react-navigation-menu";
import Link from "next/link";


const Navbar = () => {
    const navItems = [{ 'path': '/', display: 'Home' }, { 'path': '/goals', display: 'Goals' }, { 'path': '/journey', display: 'Journey' }, { 'path': '/community', display: 'Community' }]
    return <div>
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
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>TEst</NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>;
}

export default Navbar;