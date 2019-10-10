import {sum,sum1} from "./js/a";
import obj from "./js/b";
import "@/index.css";
import axios from "axios";

axios.get("/getList?i=0").then(res=>{
  console.log(res)
  render(res.data.data)
})

function render(data){
  cont.innerHTML = data.map(item=>{
    return ` <li>${item.cont}</li>`
  }).join("")
}