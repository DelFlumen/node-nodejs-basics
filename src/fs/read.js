import * as fs from "node:fs/promises";
import { readFile } from "node:fs";

const read = async () => {
  const doesFileExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (await doesFileExist("./src/fs/files/fileToRead.txt")) {
    readFile("./src/fs/files/fileToRead.txt", "utf8", function (err, data) {
      console.log(data);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
