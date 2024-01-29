import * as fs from "node:fs/promises";

const remove = async () => {
  const doesFileExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (!(await doesFileExist("./src/fs/files/fileToRemove.txt"))) {
    throw new Error("FS operation failed");
  } else {
    fs.unlink("./src/fs/files/fileToRemove.txt", function (err) {
      if (err) throw err;
    });
  }
};

await remove();
