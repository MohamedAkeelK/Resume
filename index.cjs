#! /usr/bin/env node
import path from "path";
const __dirname = path.resolve();
import fs from "fs";
//reads contents of info.json
fs.readFile(__dirname + "./info.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    return data;
  }
});
