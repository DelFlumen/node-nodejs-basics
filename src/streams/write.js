import * as fs from "fs";

const write = () => {
  const writableStream = fs.createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );
  process.stdin.pipe(writableStream);
};

write();
