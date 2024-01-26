import { Transform } from "stream";

const transform = () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseString).pipe(process.stdout);
};

transform();
