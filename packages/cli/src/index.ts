import { Command } from "commander";
import { registerCreateComponentCommand } from "./commands/create-component";

const program = new Command();

program
  .name("yuva")
  .description("Yuva Devlab CLI – tooling for @yuva-devlab/ui")
  .version("0.0.0");

registerCreateComponentCommand(program);

program.parse(process.argv);
