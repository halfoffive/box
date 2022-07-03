//适用于eval.html
let index_zh_cn="<div class=\"mdui-text-color-blue\"><h1>计算器</h1></div>\n" +
    "<div class=\"mdui-textfield mdui-textfield-floating-label\">\n" +
    "    <label class=\"mdui-textfield-label\">请输入算式</label>\n" +
    "    <input id=\"ntb_eval_t_1\" oninput=\"ntb_eval_1()\" class=\"mdui-textfield-input\" type=\"text\" pattern=\"^.*(?=.*['1','2','3','4','5','6','7','8','9','0','+','-','*','/','(',')']).*$\" required/>\n" +
    "    <div class=\"mdui-textfield-error\">算式只能包含数字及+-*/()</div>\n" +
    "    <div class=\"mdui-textfield-helper\">请输入算式，且只能包含数字及+-*/()</div>\n" +
    "</div>\n" +
    "<div class=\"mdui-text-color-blue\"><h1>计算结果</h1></div>\n" +
    "<div class=\"mdui-chip\">\n" +
    "  <span class=\"mdui-chip-icon mdui-color-blue\">A</span>\n" +
    "    <span class=\"mdui-chip-title\" id=\"ntb_eval_a_1\">null</span>\n" +
    "</div>";//显示的内容
document.getElementById("main").innerHTML=index_zh_cn;//替换内容

//所需函数和脚本
function ntb_eval_1() {
    let a=document.getElementById("ntb_eval_t_1");
    let b=eval(a.value);
    if (b-b==0){
        document.getElementById("ntb_eval_a_1").innerHTML = b;
    }else{
        document.getElementById("ntb_eval_a_1").innerHTML = '无结果！错误代码：'+b;
    }
}