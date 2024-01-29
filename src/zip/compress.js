import * as fs from "fs";
import * as zlib from "zlib";

const compress = () => {
  const gzip = zlib.createGzip();
  const rStream = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  const wStream = fs.createWriteStream("./src/zip/files/archive.gz");

  rStream.pipe(gzip).pipe(wStream);

  rStream.on("end", () =>
    fs.unlink("./src/zip/files/fileToCompress.txt", function (err) {
      if (err) throw err;
    })
  );
};

compress();
