import { LogFunctionParametersType, LoggerStrategy } from "./interface";

export class Logger<TOptions> implements LoggerStrategy<TOptions> {
  private strategies: LoggerStrategy<TOptions>[] = [];

  constructor(strategies: LoggerStrategy<TOptions>[]) {
    this.strategies = strategies;
  }

  private callFields = <TData>(
    key: keyof LoggerStrategy,
    message: TData,
    options?: TOptions
  ) => {
    this.strategies.forEach((strategy) => {
      strategy[key](message, options);
    });
  };

  log: LogFunctionParametersType<TOptions> = <TMessage>(
    message: TMessage,
    options?: TOptions
  ) => {
    this.callFields("log", message, options);
  };

  error: LogFunctionParametersType<TOptions> = <TError>(
    e: TError,
    options?: TOptions
  ) => {
    this.callFields("error", e, options);
  };

  success<TMessage>(message: TMessage, options?: TOptions) {
    this.callFields("success", message, options);
  }
}
