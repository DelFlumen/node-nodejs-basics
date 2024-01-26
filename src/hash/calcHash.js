import * as crypto from "crypto";
import * as fs from "fs";

const calculateHash = () => {
  const readerStream = fs.createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");
  readerStream.pipe(hash);

  readerStream.on("end", function () {
    hash.end();
    console.log(hash.read());
  });
};

calculateHash();
