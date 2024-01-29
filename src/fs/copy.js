import * as fs from "node:fs/promises";

const copy = async () => {
  const doesFolderExist = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (
    !(await doesFolderExist("./src/fs/files")) ||
    (await doesFolderExist("./src/fs/files_copy"))
  ) {
    throw new Error("FS operation failed");
  } else {
    fs.cp(
      "./src/fs/files",
      "./src/fs/files_copy",
      { recursive: true },
      function (err) {
        if (err) throw err;
      }
    );
  }
};

await copy();
