import type { Villager } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type VillagerStore = {
  alive: Villager[];
  dead: Villager[];
  idCount: number;

  addVillager: (v: Villager) => void;
  killVillager: (id: number) => void;
  reviveVillager: (id: number) => void;
};

export const useVillagerStore = create<VillagerStore>()(
  persist(
    (set, get) => ({
      alive: [],
      dead: [],
      idCount: 1,

      addVillager: (v) =>
        set((state) => ({
          alive: [...state.alive, v],
          idCount: state.idCount + 1,
        })),

      killVillager: (id) => {
        const villager = get().alive.find((v) => v.id === id);
        if (!villager) return;

        set((state) => ({
          alive: state.alive.filter((v) => v.id !== id),
          dead: [...state.dead, villager],
          idCount: state.idCount - 1,
        }));
      },

      reviveVillager: (id) => {
        const villager = get().dead.find((v) => v.id === id);
        if (!villager) return;

        set((state) => ({
          dead: state.dead.filter((v) => v.id !== id),
          alive: [...state.alive, villager],
        }));
      },
    }),
    {
      name: "villagers-storage",
    },
  ),
);
