import { Logger, LoggerStrategy } from "./logger";

export class ConsoleLogger<TOptions> implements LoggerStrategy<TOptions> {
  log<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === "string") console.log(message, options || {});
  }

  error<TError>(e: TError, options?: TOptions) {
    if (e instanceof Error) console.error(e.message, options || {});
  }

  success<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === "string") console.log(message, options || {});
  }
}

type OptionsData = {
  color: string;
};

const Inform = new Logger<OptionsData>([new ConsoleLogger()]);

Inform.success("success message!", { color: "red" });
