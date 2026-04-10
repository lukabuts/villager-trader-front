import { useVillagerStore } from "@/store";

const CreateVillager = () => {
  const { alive, dead, idCount, addVillager, killVillager, reviveVillager } =
    useVillagerStore();
  return (
    <div className="bg-panel border-2 border-panel-border border-t-4 border-t-green-dark p-5 shadow-[0_4px_0_rgba(0,0,0,0.4)]">
      <div className="section-label">⬛ Spawn New Villager</div>

      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-text-dim text-sm">Villager Name</label>
          <input
            type="text"
            placeholder="e.g. Booksworth"
            maxLength={30}
            className="w-55 bg-night border-2 border-panel-border border-b-[3px] border-b-stone-dark text-text font-mono text-xl px-3 py-2 outline-none focus:border-emerald font-vt323"
          />
        </div>

        <button className="bg-green-dark text-white border-b-4 border-b-[#214d14] px-5 py-2 font-mono text-xl active:translate-y-0.5 active:border-b-0 active:shadow-none hover:bg-green transition">
          [ SPAWN ]
        </button>
      </div>

      {/* Trades */}
      <div className="mt-4">
        <div className="font-press-start text-[8px] text-gold border-l-4 border-gold px-3 py-2 mb-3">
          📚 Add Trades
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-dim text-sm">Item / Book</label>
            <input
              type="text"
              placeholder="e.g. Sharpness V"
              maxLength={40}
              className="w-40 bg-night border-2 border-panel-border border-b-[3px] border-b-stone-dark text-text font-mono text-xl px-3 py-2 outline-none focus:border-emerald"
            />
          </div>

          <div className="text-gold text-2xl pb-1">→</div>

          <div className="flex flex-col gap-1">
            <label className="text-dim text-sm">Price</label>
            <input
              type="text"
              placeholder="e.g. 12"
              className="w-22.5 bg-night border-2 border-panel-border border-b-[3px] border-b-stone-dark text-text font-mono text-xl px-3 py-2 outline-none focus:border-emerald"
            />
          </div>

          <button className="bg-[#3d2e0c] text-gold border-b-4 border-b-[#221800] px-4 py-2 font-mono text-lg hover:bg-[#5a4010] active:translate-y-0.5 active:border-b-0 transition">
            + ADD
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 min-h-9"></div>
      </div>
    </div>
  );
};

export default CreateVillager;
