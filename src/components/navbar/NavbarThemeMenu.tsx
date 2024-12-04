"use client";
import { useTheme } from "@/hooks/use-theme";
import { type validTheme } from "@/types/theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { THEMES } from "@/data/themes";

export const NavbarThemeMenu = () => {
  const { theme, themeHandler } = useTheme();

  const handleValueChange = (value: string) => {
    if (value && Object.keys(THEMES).includes(value)) {
      themeHandler(value as validTheme);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{THEMES[theme]}</DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <ToggleGroup
          type="single"
          variant={"outline"}
          className="mx-auto"
          onValueChange={handleValueChange}
        >
          <div className="grid grid-cols-2 gap-1">
            {Object.entries(THEMES).map(([theme, icon]) => (
              <ToggleGroupItem
                key={theme}
                value={theme}
                className="flex h-24 w-24 flex-col items-center justify-center"
              >
                {icon}
                <p className="text-xs">{theme}</p>
              </ToggleGroupItem>
            ))}
          </div>
        </ToggleGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
