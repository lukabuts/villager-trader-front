import { CreateVillager } from "@/components";
import { useVillagerStore } from "@/store";

const Guest = () => {
  const { alive, dead, idCount, addVillager, killVillager, reviveVillager } =
    useVillagerStore();
  return (
    <>
      <CreateVillager
        alive={alive}
        dead={dead}
        idCount={idCount}
        addVillager={addVillager}
        killVillager={killVillager}
        reviveVillager={reviveVillager}
      />
    </>
  );
};

export default Guest;
