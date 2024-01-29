import * as fs from "fs";
import * as zlib from "zlib";

const decompress = () => {
  const gunzip = zlib.createGunzip();
  const rStream = fs.createReadStream("./src/zip/files/archive.gz");
  const wStream = fs.createWriteStream("./src/zip/files/fileToCompress.txt");

  rStream.pipe(gunzip).pipe(wStream);
};

decompress();
