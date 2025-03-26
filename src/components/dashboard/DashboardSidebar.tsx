"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, Home, Lock, Menu as MenuIcon, Users, ChevronDown, X, AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Activity",
    href: "/dashboard/activity",
    icon: BarChart2,
  },
  {
    name: "Accounts",
    href: "/dashboard/accounts",
    icon: MenuIcon,
    subItems: [
      {
        name: "Checking 9522",
        href: "/dashboard/accounts/checking-9522",
        balance: "$540,814.40",
      },
      {
        name: "Savings 7231",
        href: "/dashboard/accounts/savings-7231",
        balance: "$180,271.12",
      },
      {
        name: "Treasury",
        href: "/dashboard/accounts/treasury",
        balance: "$2,884,243.08",
      },
    ],
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    name: "Security",
    href: "/dashboard/security",
    icon: Lock,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [openAccounts, setOpenAccounts] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check if mobile view on client side
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const NavContent = () => (
    <div className="space-y-1">
      <div className="flex items-center gap-2 p-2 mb-6">
        <div className="w-8 h-8 bg-zinc-700 text-white flex items-center justify-center rounded">
          B
        </div>
        <div className="flex-1 flex items-center justify-between">
          <span className="font-medium">Badlands</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-3 py-3 rounded",
                  isActive ? "bg-zinc-800" : "hover:bg-zinc-900"
                )}
                onClick={(e) => {
                  if (item.name === "Accounts") {
                    e.preventDefault();
                    setOpenAccounts(!openAccounts);
                  } else if (isMobileView) {
                    setIsOpen(false);
                  }
                }}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
                {hasSubItems && (
                  <ChevronDown
                    size={16}
                    className={cn(
                      "ml-auto transition-transform",
                      openAccounts && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {hasSubItems && openAccounts && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems?.map((subItem) => (
                    <div key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className="flex items-center justify-between py-2 text-gray-300 hover:text-white"
                        onClick={() => isMobileView && setIsOpen(false)}
                      >
                        <span>{subItem.name}</span>
                        <span className="text-sm text-gray-400">{subItem.balance}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  // Mobile sidebar using Sheet component
  if (isMobileView) {
    return (
      <>
        <div className="fixed top-0 left-0 z-40 w-full bg-black text-white h-16 flex items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsOpen(true)}
          >
            <AlignJustify size={24} />
          </Button>
          <div className="ml-4 text-xl font-semibold">Accel</div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="p-0 w-64 bg-black text-white border-r border-zinc-800">
            <div className="pt-10 p-4">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      <div className="p-4">
        <NavContent />
      </div>
    </div>
  );
}
