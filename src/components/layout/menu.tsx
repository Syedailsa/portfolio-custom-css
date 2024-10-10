import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import navItems from "./navitems";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function MenuBar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="absolute pt-14 top-2 right-2 md:hidden text-themewhite"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[200px] sm:w-[200px] bg-gray-800 text-themewhite no-select"
      >
        <nav className="select-none">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={index < navItems.length - 1 ? "pb-3" : ""}
            >
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className={`hover:font-semibold block w-full select-none
          ${pathname === item.href ? "drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

