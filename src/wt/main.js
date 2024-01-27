import { Worker, isMainThread } from "worker_threads";
import * as os from "os";

const performCalculations = async () => {
  const cpuNumber = os.cpus().length;
  const workerPromises = [];

  if (isMainThread) {
    for (let i = 0; i < cpuNumber; i++) {
      const worker = new Worker("./src/wt/worker.js", { workerData: 10 + i });

      const workerPromise = new Promise((resolve, reject) => {
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });

      // Push the promise to the array
      workerPromises.push(workerPromise);
    }
    // Wait for all worker promises to resolve
    Promise.all(workerPromises)
      .then((results) => {
        const result = results.reduce((acc, curr) => {
          return [...acc, { status: curr.status, data: curr.data }];
        }, []);

        console.log(result);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
};

await performCalculations();
