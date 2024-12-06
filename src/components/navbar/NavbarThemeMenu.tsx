"use client";
import { useTheme } from "@/hooks/use-theme";
import { type validTheme } from "@/types/theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const THEMES: {
  [name: string]: React.ReactNode;
} = {
  mono: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#4d4d4d] to-[#ffffff]`}
    ></div>
  ),
  pink: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#8a0040] to-[#ff4d85]`}
    ></div>
  ),
  github: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#1a1c23] to-[#39A564]`}
    ></div>
  ),
  solarized: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#004052] to-[#b0c2c2]`}
    ></div>
  ),
  dracula: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#004052] to-[#8a0040]`}
    ></div>
  ),
};

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
