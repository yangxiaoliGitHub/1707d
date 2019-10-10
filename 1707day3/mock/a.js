const Mock = require("mockjs");
const fs= require("fs");
let data = Mock.mock({
  "data|10":[
    {
      "id|+1":1,
      "tit":"@cname",
      "cont":"@ctitle"
    }
  ]
})

fs.writeFileSync("data.json",JSON.stringify(data))