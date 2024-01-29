import { spawn } from "child_process";

const spawnChildProcess = (args) => {
  // Spawn child process
  const child = spawn("node", ["./src/cp/files/script.js", ...args], {
    // Apply pipe to stdin and pipe to stdout, use IPC for stdin and stdout
    stdio: ["pipe", "pipe", process.stderr, "ipc"],
  });

  // Pipe stdin of master process to stdin of child process
  process.stdin.pipe(child.stdin);

  // Listen for data from child process stdout and send it to master process stdout
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  // Handle errors
  child.on("error", (err) => {
    console.error("Child process error:", err);
  });

  // Handle child process exit
  child.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
