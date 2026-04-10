import type { CreateVillagerProps } from "../componentsProps";
import { Button, FormGroupLabel, Input, SectionLabel } from "../ui";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import jobs from "@/data/VillagerJobs.json";
export type VillagerType = (typeof jobs)[number]["id"];
const CreateVillager = ({
  alive,
  dead,
  idCount,
  addVillager,
  killVillager,
  reviveVillager,
}: CreateVillagerProps) => {
  console.log({ alive, dead, idCount });

  return (
    <div className="container">
      {/* Librarian */}
      <SectionLabel variant="green">⬛ Spawn New Librarian</SectionLabel>
      <div className="flex flex-col  gap-3">
        <FormGroupLabel>Villager Type</FormGroupLabel>
        <FieldGroup className="w-full max-w-32">
          <Field>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {jobs.map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      {job.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </div>
      <div className="flex flex-wrap items-end gap-3 mt-4">
        <div className="flex flex-col gap-1">
          <FormGroupLabel>Villager Name</FormGroupLabel>
          <Input
            type="text"
            className="w-56"
            placeholder="e.g. Booksworth"
            maxLength={30}
          />
        </div>

        <Button variant="create">[ SPAWN ]</Button>
      </div>

      {/* Trades */}
      <div className="mt-4">
        <SectionLabel variant="yellow">📚 Add Trades</SectionLabel>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-col gap-1">
            <FormGroupLabel>Item / Book</FormGroupLabel>
            <Input type="text" placeholder="e.g. Mending" />
          </div>

          <div className="text-gold text-2xl pb-1">→</div>

          <div className="flex flex-col gap-1">
            <FormGroupLabel>Price (emeralds)</FormGroupLabel>
            <Input
              type="number"
              placeholder="e.g. 5"
              className="w-24"
              min={1}
              max={100}
            />
          </div>

          <Button className="mt-6" variant="add">
            + ADD{" "}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 min-h-9"></div>
      </div>
    </div>
  );
};

export default CreateVillager;
