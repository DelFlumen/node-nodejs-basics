import * as fs from "fs";
import * as zlib from "zlib";

const compress = () => {
  var gzip = zlib.createGzip();
  var rStream = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  var wStream = fs.createWriteStream("./src/zip/files/archive.gz");

  rStream.pipe(gzip).pipe(wStream);
};

compress();
