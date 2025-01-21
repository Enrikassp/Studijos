import { color } from "console-log-colors";

export function log(message, variant = "info") {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("lt-LT");

  let formattedMessage;

  if (variant === "info") formattedMessage = color.yellow(message);
  else if (variant === "error") formattedMessage = color.red(message);
  else if (variant === "warning") formattedMessage = color.magenta(message);
  else formattedMessage = message;

  console.log(`[${color.red(formattedDate)}]: ${formattedMessage}`);
}
