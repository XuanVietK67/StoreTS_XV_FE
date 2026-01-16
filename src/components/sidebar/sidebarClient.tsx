"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

      <SidebarContent className="flex flex-col overflow-hidden">
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
        <div className="flex-1 overflow-y-auto">
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
                        "relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                        isActive
                          ? "bg-emerald-50 text-emerald-700 font-semibold"
                          : "hover:bg-muted/60"
                      )}
                    >
                      {/* Accent bar */}
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-emerald-500" />
                      )}

                      <Store
                        className={clsx(
                          "h-4 w-4",
                          isActive
                            ? "text-emerald-600"
                            : "text-muted-foreground"
                        )}
                      />

                      <span className="truncate">{store.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
