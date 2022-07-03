//页脚
let f_1='<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备2022003293号-1</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008589" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="https://cdn.jsdelivr.net/gh/niaodtiantang/d@master/beianimg.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">粤公网安备 44030502008589号</p></a>';//niaodtiantang.com时内容
let f_2='';//其他内容
if (document.location.hostname=='www.niaodtianatng.com'){//niaodtiantang.com时显示icp
    document.getElementById("footer").innerHTML = f_1;
}else{//其他情况
    document.getElementById("footer").innerHTML = f_2;
}