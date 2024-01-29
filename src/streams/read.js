import * as fs from "fs";

const read = () => {
  const readableStream = fs.createReadStream(
    "./src/streams/files/fileToRead.txt"
  );
  readableStream.pipe(process.stdout);
};

read();
