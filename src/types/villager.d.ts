export interface Villager {
  id: number;
  name: string;
  createdAt: string;
  trades: Trade[];
}

export interface Trade {
  item: string;
  price: number | null;
}
