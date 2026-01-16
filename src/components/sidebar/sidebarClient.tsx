"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx";
import { ArrowDownZA, ArrowUpAZ, Store } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type Props = {
  stores: {
    _id: string;
    name: string;
  }[];
};

export default function SidebarClient({ stores }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"az" | "za">("az");

  const filteredStores = useMemo(() => {
    let list = stores.filter((store) =>
      store.name.toLowerCase().includes(search.toLowerCase())
    );

    list.sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return list;
  }, [stores, search, sort]);

  return (
    <Sidebar className="border-r bg-background">
      {/* Header */}
      <SidebarHeader className="h-14 border-b px-4 flex items-center font-semibold text-lg">
        Milk Tea Admin
      </SidebarHeader>

      <SidebarContent className="overflow-visible">
        <div className="px-2 pt-3">
          <Input
            placeholder="Search store..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9"
          />
        </div>

        <div className="px-2 pt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9 w-full justify-between">
                {sort === "az" ? "A → Z" : "Z → A"}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
              <DropdownMenuItem onClick={() => setSort("az")}>
                <ArrowUpAZ className="mr-2 h-4 w-4" />A → Z
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setSort("za")}>
                <ArrowDownZA className="mr-2 h-4 w-4" />Z → A
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground px-4">
            Stores
          </SidebarGroupLabel>

          <SidebarMenu>
            {filteredStores.map((store) => {
              const isActive = pathname.includes(store._id);

              return (
                <SidebarMenuItem key={store._id}>
                  <SidebarMenuButton
                    onClick={() => router.push(`/store/${store._id}`)}
                    className={clsx(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                      isActive ? "bg-muted font-medium" : "hover:bg-muted/60"
                    )}
                  >
                    <Store className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{store.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
