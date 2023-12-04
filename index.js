const fs = require("fs");

for (let index = 0; index < 10000; index++) {
  fs.writeFileSync("./content/big.txt", `hellow meet ${index}\n`, {
    flag: "a",
  });
}
