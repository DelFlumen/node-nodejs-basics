import * as fs from "node:fs/promises";
import { readdir } from "node:fs";

const list = async () => {
  const doesFolderExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (await doesFolderExist("./src/fs/files")) {
    readdir("./src/fs/files/", (_, files) => {
      console.log(files);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
