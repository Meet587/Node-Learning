const fs = require("fs");
const { endianness } = require("os");

const getFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

getFile("./content/first.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
getFile("./content/second.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
getFile("./content/subFolder/test.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const start = async () => {
  const first = await getFile("./content/first.txt");
  const second = await getFile("./content/second.txt");
  const test = await getFile("./content/subFolder/test.txt");
  console.log(first, second, test);
};

start();
