// type OptionsLogType<TData = unknown> = TData;
export type LogFunctionParametersType<TOptions = any, TMessage = any> = (
  message: TMessage,
  options?: TOptions
) => void;

export interface LoggerStrategy<TOptions = any, TMessage = any> {
  log: LogFunctionParametersType<TOptions, TMessage>;
  error: LogFunctionParametersType<TOptions, TMessage>;
  success: LogFunctionParametersType<TOptions, TMessage>;
}
