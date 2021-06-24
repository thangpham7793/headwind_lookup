import { red, green } from "../deps.ts";

function logger() {
  return {
    error: (msg: Error) => console.error(red(msg.toString())),
    info: (msg = "") => console.info(green(msg)),
  };
}

export default logger();
