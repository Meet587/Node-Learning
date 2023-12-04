const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subFolder", "test.txt");
// console.log(filepath);

const base = path.basename(filepath);

const absolut = path.resolve(__dirname, "\contant", "subFolder/", "text.txt");
console.log(absolut);
console.log(__dirname);
