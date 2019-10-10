import {a} from "./js/a";
import {b} from "./js/b";
import "./css/index";
import "./css/a";
import axios from "axios";
console.log(a,b)

axios.get("/get",{
  params:{
    user:1,
    pwd:1
  }
}).then(res=>{
  console.log(res)
})


axios.post("/post",{
    user:2,
    pwd:2
}).then(res=>{
  console.log(res)
})