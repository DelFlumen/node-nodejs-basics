const parseEnv = () => {
  const RSSLogs = Object.keys(process.env)
    .reduce((acc, curr) => {
      if (curr.includes("RSS_")) {
        return (acc += `${curr}=${process.env[curr]}; `);
      } else {
        return acc;
      }
    }, "")
    .trim();
  console.log(RSSLogs);
};

parseEnv();
