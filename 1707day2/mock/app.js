const fs = require("fs");
const Mock = require("mockjs");
let data = Mock.mock([{
  "jp|10": [{
    "id|+1": 1,
    "tit": "@cname",
    "cont": "@ctitle"
  }]},
  {"map|10": [{
    "id|+1": 100,
    "tit": "@cname",
    "cont": "@ctitle"
  }]}
])

fs.writeFileSync("./list1.json", JSON.stringify(data))