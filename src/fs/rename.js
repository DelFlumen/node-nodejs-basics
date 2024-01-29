import * as fs from "node:fs/promises";

const rename = async () => {
  const doesFileExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (
    !(await doesFileExist("./src/fs/files/wrongFilename.txt")) ||
    (await doesFileExist("./src/fs/files/properFilename.md"))
  ) {
    throw new Error("FS operation failed");
  } else {
    fs.rename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md",
      function (err) {
        if (err) throw err;
      }
    );
  }
};

await rename();
