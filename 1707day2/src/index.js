import {
    sum
} from "@/sum";
import obj from "@/obj";
import "./css/a";
// import "./css/b";
import axios from "axios";
import BScroll from "better-scroll";
//初始化 渲染数据
let page = 1,
    limit = 5,
    total; //总页数
axios.get("/getList", {
    params: {
        page,
        limit,
        i: 0
    }
}).then(res => {
    console.log(res)
    total = res.data.total;
    render(res.data.data)
})
//实现tab切换
let lis = document.querySelectorAll(".tit li");
lis.forEach((item, i) => {
    item.onclick = function () {
        document.querySelector(".active").classList.remove("active")
        this.classList.add("active")
        axios.get("/getList", {
            params: {
                limit,
                page,
                i
            }
        }).then(res => {
            console.log(res)
            render(res.data.data)
        })
    }
})
// 实现上拉加载更多
let mysroll = new BScroll(".main", {
    click: true,
    pullUpLoad: {
        threshold: true
    }
})
mysroll.on("pullingUp", () => {
    page++;
    setTimeout(() => {
        if (page > total) {
            up.innerHTML = "没有更多数据";
            return;
        }
        axios.get("/getList", {
            params: {
                page,
                limit,
                i: 0
            }
        }).then(res => {
            render(res.data.data)
        })

        mysroll.finishPullUp();
        mysroll.refresh();
    }, 1000);

})

//渲染数据
function render(data) {
    cont.innerHTML += data.map(item => {
        return `<li>
    <h3>${item.id}</h3>
    <h5>${item.tit}</h5>
    <p>${item.cont}</p>
  </li>`
    }).join("")
}
//发出post请求
// axios.post("/post",{
//     user:2,
//     pwd:2
// }).then(res=>{
//   console.log(res)
// })