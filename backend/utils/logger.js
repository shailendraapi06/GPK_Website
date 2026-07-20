function formatMessage(level, message) {
  return `[${new Date().toISOString()}] [${level}] ${message}`;
}

export const logger = {
  info(message) {
    console.log(formatMessage("INFO", message));
  },
  warn(message) {
    console.warn(formatMessage("WARN", message));
  },
  error(message, error = null) {
    console.error(formatMessage("ERROR", message));

    if (error) {
      console.error(error);
    }
  }
};
