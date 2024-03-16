export type LogFunctionParametersType<TOptions = any, TMessage = any> = (message: TMessage, options?: TOptions) => void;
export interface LoggerStrategy<TOptions = any, TMessage = any> {
    log: LogFunctionParametersType<TOptions, TMessage>;
    error: LogFunctionParametersType<TOptions, TMessage>;
    success: LogFunctionParametersType<TOptions, TMessage>;
}
export declare class Logger<TOptions> implements LoggerStrategy<TOptions> {
    private strategies;
    constructor(strategies: LoggerStrategy<TOptions>[]);
    private callFields;
    log: LogFunctionParametersType<TOptions>;
    error: LogFunctionParametersType<TOptions>;
    success<TMessage>(message: TMessage, options?: TOptions): void;
}
