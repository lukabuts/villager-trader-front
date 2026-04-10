import type { Villager } from "@/types";

export interface CreateVillagerProps {
  alive: Villager[];
  dead: Villager[];
  idCount: number;
  addVillager: (v: Villager) => void;
  killVillager: (id: number) => void;
  reviveVillager: (id: number) => void;
}

export interface ButtonProps {
  variant: "create" | "add" | "search" | "clear" | "kill" | "revive" | null;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface SectionLabelProps {
  variant: "green" | "red" | "blue" | "yellow";
  children: React.ReactNode;
}
