import * as fs from "node:fs/promises";

const create = async () => {
  const doesFileExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (await doesFileExist("./src/fs/files/fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile(
      "./src/fs/files/fresh.txt",
      "I am fresh and young",
      function (err) {
        if (err) throw err;
      }
    );
  }
};

await create();
