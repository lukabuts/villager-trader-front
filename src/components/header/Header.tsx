import { Villager } from "@/icons";

const Header = () => {
  return (
    <header className="pixel-border pt-5 px-6 pb-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Villager />
        <h1 className="block font-press-start text-[13px]/[1.6] text-emerald text-shadow-green">
          Trading Tracker
          <span className="text-gold block mt-1 text-[9px]">
            Minecraft Villager Manager
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="stat alive">
          <strong className="text-emerald">0</strong>
          ALIVE
        </div>
        <div className="stat dead">
          <strong className="text-red">0</strong>
          KILLED
        </div>
      </div>
    </header>
  );
};

export default Header;
