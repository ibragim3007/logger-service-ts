yarn add logger-service-ts

npm add logger-service-ts

exmaple:

class ToastLogger<TOptions> implements LoggerStrategy<TOptions> {
log<TMessage>(message: TMessage, options?: TOptions) {
if (typeof message === 'string') toast(message, options || {});
}

error<TError>(e: TError, options?: TOptions) {
if (e instanceof Error) toast.error(e.message, options || {});
}

success<TMessage>(message: TMessage, options?: TOptions) {
if (typeof message === 'string') toast.success(message, options || {});
}
}

export const Inform = new Logger<ToastOptions>([new ToastLogger()]);
