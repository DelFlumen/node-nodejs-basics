import { isMainThread, workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (!isMainThread) {
    // do CPU intensive task
    // Data sent from main thread is available in workerData
    try {
      const calcResult = nthFibonacci(workerData);

      // Send the result back to the main thread
      parentPort.postMessage({
        status: "resolved",
        data: calcResult,
      });
    } catch (error) {
      // Send error message back to the main thread
      parentPort.postMessage({
        status: "error",
        data: null,
      });
    }
  }
};

sendResult();
