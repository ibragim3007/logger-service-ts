import { ConsoleLogger } from "./example.log";
import { Logger } from "./logger.service";

type OptionsData = {
  color: string;
};

const Inform = new Logger<OptionsData>([new ConsoleLogger()]);

Inform.success("success message!", { color: "red" });
