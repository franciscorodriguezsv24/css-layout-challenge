import {
  CircleFadingArrowUp,
  FileClock,
  Files,
  Home,
  SquareArrowOutUpRight,
  Trash,
} from "lucide-react";

export type LinksData = {
  link: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export const links: LinksData[] = [
  { link: "/", label: "Home", icon: Home },
  { link: "#", label: "My Files", icon: Files },
  { link: "#", label: "Recent Files", icon: FileClock },
  { link: "#", label: "Shared Filed", icon: SquareArrowOutUpRight },
  { link: "#", label: "File Request", icon: CircleFadingArrowUp },
  { link: "#", label: "Trash", icon: Trash },
];
